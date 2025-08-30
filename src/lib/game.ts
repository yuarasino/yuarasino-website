import groundImage from "~/assets/game/ground.png";
import playersImage from "~/assets/game/players.png";

type Size = { w: number; h: number };
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
  SPEED_RATE_INITIAL: number = 1;
  SPEED_RATE_INCRMENT: number = 1 / 120;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  ground: Ground;
  player: Player;
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
    this.player = new Player(this.canvas, this.context);

    this.isRunning = false;
    this.speedRate = this.SPEED_RATE_INITIAL;
    this.previousTimestamp = 0;

    this.resize();
    globalThis.addEventListener("resize", this.resize.bind(this));
  }

  async runAsync() {
    this.isRunning = true;
    globalThis.addEventListener("keydown", this.handleKeyDown.bind(this));
    globalThis.addEventListener("touchstart", this.handleTouchStart.bind(this));
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
    globalThis.removeEventListener(
      "keydown",
      this.handleKeyDown.bind(this),
    );
    globalThis.removeEventListener(
      "touchstart",
      this.handleTouchStart.bind(this),
    );
  }

  update(deltaTime: number) {
    this.speedRate += this.SPEED_RATE_INCRMENT * deltaTime;
    this.ground.update(deltaTime, this.speedRate);
    this.player.update(deltaTime, this.speedRate);
  }

  draw() {
    this.clear();
    this.ground.draw();
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

  handleKeyDown(event: KeyboardEvent) {
    if (event.code !== "Space") {
      return;
    }
    this.player.jump();
  }

  handleTouchStart() {
    this.player.jump();
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
    this.position = { x: 0, y: this.canvas.height - this.size.h };
    this.velocity = { x: -200, y: 0 };
  }

  update(deltaTime: number, speedRate: number) {
    this.position.x += this.velocity.x * deltaTime * speedRate;
    if (this.position.x < -this.size.w) {
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

class Player {
  IMAGE_SIZE: Size = { w: 70, h: 100 };
  IMAGE_FRAME: number = 0.15;
  JUMP_VELOCITY: Vector = { x: 0, y: -300 };
  GRAVITY_VELOCITY: Vector = { x: 0, y: 15 };
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  image: HTMLImageElement;
  index: number;
  timer: number;
  size: Size;
  position: Vector;
  velocity: Vector;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
    this.image = new Image();
    this.image.src = playersImage;
    this.index = 0;
    this.timer = 0;
    this.size = { w: 35, h: 50 };
    this.position = { x: 20, y: this.canvas.height - this.size.h };
    this.velocity = { x: 0, y: 0 };
  }

  update(deltaTime: number, speedRate: number) {
    if (this.position.y < this.canvas.height - this.size.h) {
      this.velocity.y += this.GRAVITY_VELOCITY.y;
    }
    this.position.y += this.velocity.y * deltaTime;
    if (this.position.y >= this.canvas.height - this.size.h) {
      this.position.y = this.canvas.height - this.size.h;
      this.velocity.y = 0;
    }

    this.timer += deltaTime * speedRate;
    if (this.timer > this.IMAGE_FRAME) {
      this.index = (this.index + 1) % 4;
      this.timer = 0;
    }
  }

  draw() {
    this.context.drawImage(
      this.image,
      this.IMAGE_SIZE.w * this.index,
      0,
      this.IMAGE_SIZE.w,
      this.IMAGE_SIZE.h,
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h,
    );
  }

  jump() {
    if (this.position.y >= this.canvas.height - this.size.h) {
      this.velocity.y = this.JUMP_VELOCITY.y;
    }
  }
}
