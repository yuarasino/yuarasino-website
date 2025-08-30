import { useEffect } from "preact/hooks";
import { runGame } from "~/lib/game.ts";
import { GameSection } from "~/compositions/error/GameSection.tsx";
import { defineComponent } from "~/utils/typing.ts";

export const GameSectionIsland = defineComponent(() => {
  const canvasId = "canvas";

  useEffect(() => {
    runGame(canvasId);
  });

  return (
    <>
      <GameSection canvasId={canvasId} />
    </>
  );
});
