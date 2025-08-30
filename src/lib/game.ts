import groundImage from "~/assets/game/ground.png";

export const runGame = async (canvasId: string) => {
  const game = new Game(canvasId);
  await game.run();
};

const waitAnimationFrame = () => {
  return new Promise<number>((resolve) => requestAnimationFrame(resolve));
};

class Game {
  INITIAL_SPEED_RATE: number = 1;
  SPEED_RATE_INCREMENT: number = 0.01;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  ground: Ground;
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

    this.isRunnning = false;
    this.lastTimestamp = 0;
    this.deltaTime = 0;
    this.speedRate = this.INITIAL_SPEED_RATE;

    this.canvas.addEventListener("resize", this.resize);
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
      "click",
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
      "click",
      this.handleClick.bind(this),
    );
  }

  update() {
    this.speedRate += this.SPEED_RATE_INCREMENT * this.deltaTime;
    this.ground.update(this.deltaTime, this.speedRate);
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

  judge() {
    return false;
  }

  jump() {
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

class Ground {
  IMAGE_WIDTH: number = 1200;
  IMAGE_HEIGHT: number = 12;
  SIZE_WIDTH: number = 1200;
  SIZE_HEIGHT: number = 12;
  SLIDE_VELOCITY_X: number = -200;
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
    this.image.src = groundImage;

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
