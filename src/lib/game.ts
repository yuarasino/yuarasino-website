import groundImage from "~/assets/game/ground.png";

type Size = {w: number; h: number };
type Vector = { x: number; y: number };

const waitAnimationFrameAsync = (): Promise<number> => {
  return new Promise<number>((resolve) => {
    requestAnimationFrame(resolve);
  });
};

export const runGameAsync = async (selector: string) => {
  const game = new Game(selector);
  await game.runAsync();
};

class Game {
  SPEED_RATE_START: number = 1;
  SPEED_RATE_INCRMENT: number = 1 / 120;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  ground: Ground;
  isRunning: boolean;
  speedRate: number;
  previousTimestamp: number;

  constructor(selector: string) {
    const canvas = document.querySelector<HTMLCanvasElement>(selector);
    if (!canvas) {
      throw new Error("Failed to get canvas element.");
    }
    this.canvas = canvas;
    const context = this.canvas.getContext("2d");
    if (!context) {
      throw new Error("Failed to get canvas context.");
    }
    this.context = context;

    this.ground = new Ground(this.canvas, this.context);

    this.isRunning = false;
    this.speedRate = this.SPEED_RATE_START;
    this.previousTimestamp = 0;

    this.resize();
    globalThis.addEventListener("resize", this.resize.bind(this));
  }

  async runAsync() {
    this.isRunning = true;
    while (this.isRunning) {
      await waitAnimationFrameAsync();
      const timestamp = Date.now();
      if (this.previousTimestamp === 0) {
        this.previousTimestamp = timestamp;
        continue;
      }
      const deltaTime = (timestamp - this.previousTimestamp) / 1000;
      this.update(deltaTime);
      this.draw();
      this.previousTimestamp = timestamp;
    }
  }

  update(deltaTime: number) {
    this.speedRate += this.SPEED_RATE_INCRMENT * deltaTime;
    this.ground.update(deltaTime, this.speedRate);
  }

  draw() {
    this.clear();
    this.ground.draw();
  }

  clear() {
    this.context.fillStyle = "white";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  resize() {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
  }
}

class Ground {
  IMAGE_SIZE: Size = { w: 1200, h: 12 };
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  image: HTMLImageElement;
  size: Size;
  position: Vector;
  velocity: Vector;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
    this.image = new Image();
    this.image.src = groundImage;
    this.size = { w: 1200, h: 12 };
    this.position = { x: 20, y: this.canvas.height - this.size.h };
    this.velocity = { x: -200, y: 0 };
  }

  update(deltaTime: number, speedRate: number) {
    this.position.x += this.velocity.x * deltaTime * speedRate;
    this.position.y += this.velocity.y * deltaTime * speedRate;
    if (this.position.x < -this.size.h) {
      this.position.x = 0;
    }
  }

  draw() {
    this.context.drawImage(
      this.image,
      0,
      0,
      this.IMAGE_SIZE.w,
      this.IMAGE_SIZE.h,
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h,
    );
    this.context.drawImage(
      this.image,
      0,
      0,
      this.IMAGE_SIZE.w,
      this.IMAGE_SIZE.h,
      this.position.x + this.size.w,
      this.position.y,
      this.size.w,
      this.size.h,
    );
  }
}
