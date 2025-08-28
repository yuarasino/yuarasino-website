import { useEffect } from "preact/hooks";
import { defineComponent } from "~/utils/typing.ts";
import { cn } from "~/utils/styling.ts";
import { Game } from "~/lib/game.ts";

export const GameIsland = defineComponent(() => {
  useEffect(() => {
    const game = new Game("#game");
    game.run();
  });

  return (
    <canvas
      class={cn(
        "h-[150px] w-full max-w-[600px]",
      )}
      id="game"
    />
  );
});
