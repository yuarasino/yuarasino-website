import groundImage from "~/assets/game/ground.png";
import playerImage from "~/assets/game/player.png";
import cactus1Image from "~/assets/game/cactus1.png";
import cactus2Image from "~/assets/game/cactus2.png";
import cactus3Image from "~/assets/game/cactus3.png";

export const runGame = async (canvasId: string) => {
  const game = new Game(canvasId);
  await game.run();
};

const waitAnimationFrame = () => {
  return new Promise<number>((resolve) => requestAnimationFrame(resolve));
};

const randomNumber = (min: number, max: number) => {
  return min + (max - min) * Math.random();
};

const randomInteger = (min: number, max: number) => {
  return Math.floor(min + (max - min) * Math.random());
};

class Game {
  INITIAL_SPEED_RATE = 1;
  SPEED_RATE_INCREMENT = 0.01;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  ground: Ground;
  player: Player;
  cactusPopper: CactusPopper;
  isRunnning: boolean;
  lastTimestamp: number;
  deltaTime: number;
  speedRate: number;

  constructor(canvasId: string) {
    const canvas = document.querySelector<HTMLCanvasElement>(`#${canvasId}`);
    if (!canvas) {
      throw new Error("Failed to get canvas.");
    }
    this.canvas = canvas;
    const context = this.canvas.getContext("2d");
    if (!context) {
      throw new Error("Failed to get context.");
    }
    this.context = context;

    this.ground = new Ground(this.canvas, this.context);
    this.player = new Player(this.canvas, this.context);
    this.cactusPopper = new CactusPopper(this.canvas, this.context);

    this.isRunnning = false;
    this.lastTimestamp = 0;
    this.deltaTime = 0;
    this.speedRate = this.INITIAL_SPEED_RATE;

    globalThis.addEventListener("resize", this.resize);
  }

  async run() {
    await waitAnimationFrame();
    this.resize();
    this.draw();
    globalThis.addEventListener(
      "keydown",
      this.handleSpace.bind(this),
    );
    globalThis.addEventListener(
      "mousedown",
      this.handleClick.bind(this),
    );
    globalThis.addEventListener(
      "touchstart",
      this.handleClick.bind(this),
    );
  }

  async loop() {
    this.isRunnning = true;
    this.lastTimestamp = performance.now();
    while (true) {
      await waitAnimationFrame();
      this.deltaTime = (performance.now() - this.lastTimestamp) / 1000;
      this.update();
      this.draw();
      if (this.judge()) {
        break;
      }
      this.lastTimestamp = performance.now();
    }
    this.isRunnning = false;
    globalThis.removeEventListener(
      "keydown",
      this.handleSpace.bind(this),
    );
    globalThis.removeEventListener(
      "mousedown",
      this.handleClick.bind(this),
    );
    globalThis.removeEventListener(
      "touchstart",
      this.handleClick.bind(this),
    );
  }

  update() {
    this.speedRate += this.SPEED_RATE_INCREMENT * this.deltaTime;
    this.ground.update(this.deltaTime, this.speedRate);
    this.player.update(this.deltaTime, this.speedRate);
    this.cactusPopper.update(this.deltaTime, this.speedRate);
  }

  draw() {
    this.clear();
    this.ground.draw();
    this.cactusPopper.draw();
    this.player.draw();
  }

  clear() {
    this.context.fillStyle = "white";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  resize() {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
  }

  judge() {
    return false;
  }

  jump() {
    this.player.jump();
  }

  handleSpace(event: KeyboardEvent) {
    if (event.code !== "Space") {
      return;
    }
    this.handleClick();
  }

  handleClick() {
    this.jump();
    if (!this.isRunnning) {
      this.loop();
    }
  }
}

class Player {
  IMAGE_SOURCE = playerImage;
  IMAGE_WIDTH = 70;
  IMAGE_HEIGHT = 100;
  IMAGE_FRAME = 0.2;
  SIZE_WIDTH = 35;
  SIZE_HEIGHT = 50;
  JUMP_VELOCITY_Y = -250;
  GRAVITY_VELOCITY_Y = 10;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  image: HTMLImageElement;
  imageTimer: number;
  imageIndex: number;
  positionX: number;
  positionY: number;
  velocityY: number;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;

    this.image = new Image();
    this.image.src = this.IMAGE_SOURCE;
    this.imageTimer = 0;
    this.imageIndex = 0;

    this.positionX = 20;
    this.positionY = this.canvas.height - this.SIZE_HEIGHT;
    this.velocityY = 0;
  }

  update(deltaTime: number, speedRate: number) {
    if (!this.collidesWithGround()) {
      this.velocityY += this.GRAVITY_VELOCITY_Y;
    }
    this.positionY += this.velocityY * deltaTime * speedRate;
    if (this.collidesWithGround()) {
      this.positionY = this.canvas.height - this.SIZE_HEIGHT;
      this.velocityY = 0;
    }

    this.imageTimer += deltaTime * speedRate;
    if (this.imageTimer >= this.IMAGE_FRAME) {
      this.imageIndex = (this.imageIndex + 1) % 4;
      this.imageTimer = 0;
    }
  }

  draw() {
    this.context.drawImage(
      this.image,
      this.IMAGE_WIDTH * this.imageIndex,
      0,
      this.IMAGE_WIDTH,
      this.IMAGE_HEIGHT,
      this.positionX,
      this.positionY,
      this.SIZE_WIDTH,
      this.SIZE_HEIGHT,
    );
  }

  jump() {
    if (!this.collidesWithGround()) {
      return;
    }
    this.velocityY = this.JUMP_VELOCITY_Y;
  }

  collidesWithGround() {
    return this.positionY >= this.canvas.height - this.SIZE_HEIGHT;
  }
}

class Ground {
  IMAGE_SOURCE = groundImage;
  IMAGE_WIDTH = 1200;
  IMAGE_HEIGHT = 12;
  SIZE_WIDTH = 1200;
  SIZE_HEIGHT = 12;
  SLIDE_VELOCITY_X = -200;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  image: HTMLImageElement;
  positionX: number;
  positionY: number;
  velocityX: number;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
    this.image = new Image();
    this.image.src = this.IMAGE_SOURCE;

    this.positionX = 0;
    this.positionY = this.canvas.height - this.SIZE_HEIGHT;
    this.velocityX = this.SLIDE_VELOCITY_X;
  }

  update(deltaTime: number, speedRate: number) {
    this.positionX += this.velocityX * deltaTime * speedRate;
    if (this.positionX < -this.SIZE_WIDTH) {
      this.positionX = 0;
    }
  }

  draw() {
    this.context.drawImage(
      this.image,
      0,
      0,
      this.IMAGE_WIDTH,
      this.IMAGE_HEIGHT,
      this.positionX,
      this.positionY,
      this.SIZE_WIDTH,
      this.SIZE_HEIGHT,
    );
    this.context.drawImage(
      this.image,
      0,
      0,
      this.IMAGE_WIDTH,
      this.IMAGE_HEIGHT,
      this.positionX + this.SIZE_WIDTH,
      this.positionY,
      this.SIZE_WIDTH,
      this.SIZE_HEIGHT,
    );
  }
}

class Cactus {
  IMAGE_WIDTH: number;
  IMAGE_HEIGHT: number;
  SIZE_WIDTH: number;
  SIZE_HEIGHT: number;
  SLIDE_VELOCITY_X = -200;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  image: HTMLImageElement;
  positionX: number;
  positionY: number;
  velocityX: number;

  constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    imageSource: string,
    imageWidth: number,
    imageHeight: number,
    sizeWidth: number,
    sizeHeight: number,
  ) {
    this.canvas = canvas;
    this.context = context;

    this.image = new Image();
    this.image.src = imageSource;

    this.IMAGE_WIDTH = imageWidth;
    this.IMAGE_HEIGHT = imageHeight;
    this.SIZE_WIDTH = sizeWidth;
    this.SIZE_HEIGHT = sizeHeight;

    this.positionX = this.canvas.width;
    this.positionY = this.canvas.height - this.SIZE_HEIGHT;
    this.velocityX = this.SLIDE_VELOCITY_X;
  }

  update(deltaTime: number, speedRate: number) {
    this.positionX += this.velocityX * deltaTime * speedRate;
  }

  draw() {
    this.context.drawImage(
      this.image,
      0,
      0,
      this.IMAGE_WIDTH,
      this.IMAGE_HEIGHT,
      this.positionX,
      this.positionY,
      this.SIZE_WIDTH,
      this.SIZE_HEIGHT,
    );
  }

  collidesWithCanvas() {
    return this.positionX >= -this.IMAGE_WIDTH;
  }
}

class Cactus1 extends Cactus {
  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    super(canvas, context, cactus1Image, 48, 100, 24, 50);
  }
}

class Cactus2 extends Cactus {
  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    super(canvas, context, cactus2Image, 98, 100, 49, 50);
  }
}

class Cactus3 extends Cactus {
  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    super(canvas, context, cactus3Image, 68, 70, 34, 35);
  }
}

class CactusPopper {
  CACTUS_CLASSES = [Cactus1, Cactus2, Cactus3];
  MIN_POP_FRAME = 1;
  MAX_POP_FRAME = 3;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  cactuses: Cactus[] = [];
  popTimer: number;
  popFrame: number;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;

    this.popTimer = 0;
    this.popFrame = randomNumber(this.MIN_POP_FRAME, this.MAX_POP_FRAME);
  }

  update(deltaTime: number, speedRate: number) {
    this.cactuses.forEach((cactus) => {
      cactus.update(deltaTime, speedRate);
    });
    this.cactuses = this.cactuses.filter((cactus) =>
      cactus.collidesWithCanvas()
    );

    this.popTimer += deltaTime * speedRate;
    if (this.popTimer >= this.popFrame) {
      this.pop();
      this.popTimer = 0;
      this.popFrame = randomNumber(this.MIN_POP_FRAME, this.MAX_POP_FRAME);
    }
  }

  draw() {
    this.cactuses.forEach((cactus) => {
      cactus.draw();
    });
  }

  pop() {
    const index = randomInteger(0, 3);
    const class_ = this.CACTUS_CLASSES[index];
    const cactus = new class_(this.canvas, this.context);
    this.cactuses.push(cactus);
  }
}
