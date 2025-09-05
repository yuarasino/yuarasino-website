import { useCallback } from "preact/hooks";

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
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  isRunning: boolean = false;
  runningTimer: number = 0;
  spaceHandler: ((event: KeyboardEvent) => void) | null = null;
  clickHandler: (() => void) | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = getContext(canvas);
  }

  init() {
    console.log("init");
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
    while (!this.judge()) {
      const deltaTime = await waitFrame();
      this.update(deltaTime);
      this.draw();
    }
    this.isRunning = false;
    this.deinit();
    await waitTimeout(5);
    this.init();
  }

  judge(): boolean {
    return this.runningTimer > 5;
  }

  update(deltaTime: number) {
    this.runningTimer += deltaTime;
    console.log(this.runningTimer);
  }

  draw() {
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

const waitFrame = async (): Promise<number> => {
  const promise = new Promise<number>((resolve) => {
    requestAnimationFrame(resolve);
  });
  const previous = performance.now();
  const current = await promise;
  return (current - previous) / 1000;
};

const waitTimeout = async (time: number): Promise<void> => {
  const promise = new Promise<void>((resolve) => {
    setTimeout(resolve, time * 1000);
  });
  await promise;
};

const getContext = (
  canvas: HTMLCanvasElement,
): CanvasRenderingContext2D => {
  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Failed to get canvas context.");
  }
  return context;
};
