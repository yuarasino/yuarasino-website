import { useCallback } from "preact/hooks";
import groundImage from "~/assets/error/ground.png";
import cloudImage from "~/assets/error/cloud.png";

import type { RefCallback } from "preact";

export const useGame = (): RefCallback<HTMLCanvasElement> => {
  return useCallback((canvas: HTMLCanvasElement | null) => {
    if (!canvas) {
      return;
    }
    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    globalThis.addEventListener("resize", resize);
    globalThis.dispatchEvent(new UIEvent("resize"));

    const game = new Game(canvas);
    game.init();

    return () => {
      game.deinit();

      globalThis.removeEventListener("resize", resize);
    };
  }, []);
};

class Game {
  TIME_SCALE_INCREMENT: number = 1 / 120;

  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  spaceHandler: ((event: KeyboardEvent) => void) | null = null;
  clickHandler: (() => void) | null = null;

  isRunning: boolean = false;
  runningTimer: number = 0;
  ground: Ground;
  clouds: Clouds;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = getCanvasContext(canvas);

    this.ground = new Ground(this.canvas, this.context);
    this.clouds = new Clouds(this.canvas, this.context);
  }

  init() {
    console.log("init");
    this.drawInFrame();
    if (!this.spaceHandler) {
      this.spaceHandler = this.onSpace.bind(this);
      globalThis.addEventListener("keydown", this.spaceHandler);
    }
    if (!this.clickHandler) {
      this.clickHandler = this.onClick.bind(this);
      globalThis.addEventListener("mousedown", this.clickHandler);
      globalThis.addEventListener("touchstart", this.clickHandler);
    }
  }

  deinit() {
    console.log("deinit");
    if (this.spaceHandler) {
      globalThis.removeEventListener("keydown", this.spaceHandler);
      this.spaceHandler = null;
    }
    if (this.clickHandler) {
      globalThis.removeEventListener("mousedown", this.clickHandler);
      globalThis.removeEventListener("touchstart", this.clickHandler);
      this.clickHandler = null;
    }
  }

  async run() {
    this.isRunning = true;
    this.runningTimer = 0;
    this.ground = new Ground(this.canvas, this.context);
    this.clouds = new Clouds(this.canvas, this.context);

    while (!this.judge()) {
      const deltaTime = await waitForFrame();
      this.update(deltaTime);
      this.draw();
    }

    this.isRunning = false;

    this.deinit();
    await waitForTimeout(5);
    this.init();
  }

  judge(): boolean {
    return this.runningTimer > 5;
  }

  update(deltaTime: number) {
    this.runningTimer += deltaTime;
    const timeScale = 1 + this.TIME_SCALE_INCREMENT * this.runningTimer;
    this.ground.update(deltaTime, timeScale);
    this.clouds.update(deltaTime, timeScale);
  }

  draw() {
    this.fill();
    this.ground.draw();
    this.clouds.draw();
  }

  fill() {
    this.context.fillStyle = "white";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  async drawInFrame() {
    await waitForFrame();
    this.draw();
  }

  jump() {
  }

  async onSpace({ code }: KeyboardEvent) {
    if (code === "Space") {
      await this.onClick();
    }
  }

  async onClick() {
    this.jump();
    if (!this.isRunning) {
      await this.run();
    }
  }
}

class Ground {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  spriteImage: HTMLImageElement;
  spriteX: number = 0;
  spriteY: number = 0;
  spriteW: number = 1200;
  spriteH: number = 12;
  entityX: number = 0;
  entityY: number;
  entityW: number = 1200;
  entityH: number = 12;
  velocityX: number = -200;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;

    this.spriteImage = getSpriteImage(groundImage);
    this.entityY = this.canvas.height - this.entityH;
  }

  update(deltaTime: number, timeScale: number) {
    this.entityX += this.velocityX * deltaTime * timeScale;
    if (!this.isInCanvas()) {
      this.entityX = 0;
    }
  }

  draw() {
    [this.entityX, this.entityX + this.entityW].forEach((dw) => {
      this.context.drawImage(
        this.spriteImage,
        this.spriteX,
        this.spriteY,
        this.spriteW,
        this.spriteH,
        dw,
        this.entityY,
        this.entityW,
        this.entityH,
      );
    });
  }

  isInCanvas(): boolean {
    return this.entityX >= -this.entityW;
  }
}

class Cloud {
  ENTITY_Y_MIN = 20;
  ENTITY_Y_MAX = 80;

  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  spriteImage: HTMLImageElement;
  spriteX: number = 0;
  spriteY: number = 0;
  spriteW: number = 46;
  spriteH: number = 13;
  entityX: number;
  entityY: number;
  entityW: number = 46;
  entityH: number = 13;
  velocityX: number = -100;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;

    this.spriteImage = getSpriteImage(cloudImage);
    this.entityX = this.canvas.width;
    this.entityY = this.getEntityY();
  }

  update(deltaTime: number, timeScale: number) {
    this.entityX += this.velocityX * deltaTime * timeScale;
  }

  draw() {
    this.context.drawImage(
      this.spriteImage,
      this.spriteX,
      this.spriteY,
      this.spriteW,
      this.spriteH,
      this.entityX,
      this.entityY,
      this.entityW,
      this.entityH,
    );
  }

  getEntityY(): number {
    return getRandomNumber(this.ENTITY_Y_MIN, this.ENTITY_Y_MAX);
  }

  isInCanvas(): boolean {
    return this.entityX >= -this.entityW;
  }
}

class Clouds {
  POP_FRAME_MIN: number = 1.5;
  POP_FRAME_MAX: number = 3;

  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  entityList: Cloud[] = [];
  popTimer: number = 0;
  popFrame: number;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;

    this.popFrame = this.randomPopFrame();
    this.pop();
  }

  update(deltaTime: number, timeScale: number) {
    this.entityList.forEach((entity) => {
      entity.update(deltaTime, timeScale);
    });
    this.entityList = this.entityList.filter((entity) => {
      return entity.isInCanvas();
    });

    this.popTimer += deltaTime * timeScale;
    if (this.popTimer >= this.popFrame) {
      this.popTimer = 0;
      this.popFrame = this.randomPopFrame();
      this.pop();
    }
  }

  draw() {
    this.entityList.forEach((entity) => {
      entity.draw();
    });
  }

  pop() {
    const entity = new Cloud(this.canvas, this.context);
    this.entityList.push(entity);
  }

  randomPopFrame(): number {
    return getRandomNumber(this.POP_FRAME_MIN, this.POP_FRAME_MAX);
  }
}

const waitForFrame = async (): Promise<number> => {
  const promise = new Promise<number>((resolve) => {
    requestAnimationFrame(resolve);
  });
  const previous = performance.now();
  const current = await promise;
  return (current - previous) / 1000;
};

const waitForTimeout = async (time: number): Promise<void> => {
  const promise = new Promise<void>((resolve) => {
    setTimeout(resolve, time * 1000);
  });
  await promise;
};

const getCanvasContext = (
  canvas: HTMLCanvasElement,
): CanvasRenderingContext2D => {
  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Failed to get canvas context.");
  }
  return context;
};

const getSpriteImage = (src: string): HTMLImageElement => {
  const image = new Image();
  image.src = src;
  return image;
};

const getRandomNumber = (min: number, max: number): number => {
  return min + (max - min) * Math.random();
};
