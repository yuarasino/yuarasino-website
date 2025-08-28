import groundImage from "~/assets/error/ground.png";
import playersImage from "~/assets/error/players.png";

export class Game {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  prevTs: DOMHighResTimeStamp;
  ground: Ground;
  player: Player;

  constructor(canvasSelecter: string) {
    const canvas = document.querySelector<HTMLCanvasElement>(canvasSelecter);
    if (!canvas) {
      throw new Error("Failed to get canvas element.");
    }
    this.canvas = canvas;
    this.canvas.width = canvas.clientWidth;
    this.canvas.height = canvas.clientHeight;
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Failed to get canvas context.");
    }
    this.context = context;
    this.context.fillStyle = "white";
    this.prevTs = 0;
    this.ground = new Ground(this.canvas, this.context);
    this.player = new Player(this.canvas, this.context);
  }

  run() {
    requestAnimationFrame(this.loop.bind(this));
  }

  loop(currentTs: DOMHighResTimeStamp) {
    if (this.prevTs === 0) {
      this.prevTs = currentTs;
    }
    const deltaT = (currentTs - this.prevTs) / 1000;
    this.update(deltaT);
    this.draw();
    this.prevTs = currentTs;
    requestAnimationFrame(this.loop.bind(this));
  }

  update(deltaT: DOMHighResTimeStamp) {
    this.ground.update(deltaT);
    this.player.update(deltaT);
  }

  draw() {
    this.clear();
    this.ground.draw();
    this.player.draw();
  }

  clear() {
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

class Ground {
  srcW = 1200;
  srcH = 12;
  dstW = 1200;
  dstH = 12;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  img: HTMLImageElement;
  posX: number;
  posY: number;
  vecX: number;
  vecY: number;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
    this.img = new Image();
    this.img.src = groundImage;
    this.posX = 0;
    this.posY = canvas.height - this.dstH;
    this.vecX = -300;
    this.vecY = 0;
  }

  update(deltaT: number) {
    this.posX += this.vecX * deltaT;
    if (this.posX < -this.dstW) {
      this.posX += this.dstW;
    }
    this.posY += this.vecY * deltaT;
  }

  draw() {
    this.context.drawImage(
      this.img,
      0,
      0,
      this.srcW,
      this.srcH,
      this.posX,
      this.posY,
      this.dstW,
      this.dstH,
    );
    this.context.drawImage(
      this.img,
      0,
      0,
      this.srcW,
      this.srcH,
      this.posX + this.dstW,
      this.posY,
      this.dstW,
      this.dstH,
    );
  }
}

class Player {
  srcW = 70;
  srcH = 100;
  dstW = 35;
  dstH = 50;
  vecG = 10;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  img: HTMLImageElement;
  imgIndex: number;
  imgRate: number;
  imgT: number;
  posX: number;
  posY: number;
  vecX: number;
  vecY: number;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
    this.img = new Image();
    this.img.src = playersImage;
    this.imgIndex = 0;
    this.imgRate = 0.1;
    this.imgT = 0;
    this.posX = 20;
    this.posY = this.canvas.height - this.dstH;
    this.vecX = 0;
    this.vecY = 0;
    globalThis.addEventListener("keydown", this.onKeyDown.bind(this));
    globalThis.addEventListener("click", this.onClick.bind(this));
  }

  update(deltaT: number) {
    this.imgT += deltaT;
    if (this.imgT > this.imgRate) {
      this.imgIndex = (this.imgIndex + 1) % 4;
      this.imgT = 0;
    }
    this.posX += this.vecX * deltaT;

    if (this.posY >= this.canvas.height - this.dstH) {
      this.posY = this.canvas.height - this.dstH;
      this.vecY = 0;
    } else {
      this.vecY += this.vecG;
      this.posY += this.vecY * deltaT;
    }
  }

  draw() {
    this.context.drawImage(
      this.img,
      this.srcW * this.imgIndex,
      0,
      this.srcW,
      this.srcH,
      this.posX,
      this.posY,
      this.dstW,
      this.dstH,
    );
  }

  jump() {
    if (this.posY >= this.canvas.height - this.dstH) {
      this.vecY = -250;
      this.posY -= 1;
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.code === "Space") {
      this.jump();
    }
  }

  onClick() {
    this.jump();
  }
}
