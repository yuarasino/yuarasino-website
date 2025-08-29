import { useEffect } from "preact/hooks";
import { defineComponent } from "~/utils/typing.ts";
import { cn } from "~/utils/styling.ts";
import { runGameAsync } from "~/lib/game.ts";

export const GameIsland = defineComponent(() => {
  useEffect(() => {
    const handleKeyDown = async (event: KeyboardEvent) => {
      if (event.code !== "Space") {
        return;
      }
      globalThis.removeEventListener("keydown", handleKeyDown);
      globalThis.removeEventListener("touchstart", handleTouchStart);
      await runGameAsync("#game");
      globalThis.addEventListener("keydown", handleKeyDown);
      globalThis.addEventListener("touchstart", handleTouchStart);
    };

    const handleTouchStart = async () => {
      globalThis.removeEventListener("keydown", handleKeyDown);
      globalThis.removeEventListener("touchstart", handleTouchStart);
      await runGameAsync("#game");
      globalThis.addEventListener("keydown", handleKeyDown);
      globalThis.addEventListener("touchstart", handleTouchStart);
    };

    globalThis.addEventListener("keydown", handleKeyDown);
    globalThis.addEventListener("touchstart", handleTouchStart);
  });

  return (
    <div
      class={cn(
        "w-full max-w-[600px]",
      )}
      role="application"
      aria-label="新篠ゆうのランナーゲーム"
    >
      <canvas
        class={cn(
          "h-[150px] w-full max-w-[600px]",
        )}
        id="game"
      />
      <p
        class={cn(
          "mt-4",
          "text-center",
        )}
      >
        プレイするにはSpaceキーを押してください。
      </p>
    </div>
  );
});
