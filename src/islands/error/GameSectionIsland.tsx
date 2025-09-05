import { useGame } from "~/hooks/error/useGame.ts";
import { defineComponent } from "~/utils/typing.ts";
import { GameSection } from "~/compositions/error/GameSection.tsx";

export const GameSectionIsland = defineComponent(() => {
  const canvasRef = useGame();

  return (
    <>
      <GameSection canvasRef={canvasRef} />
    </>
  );
});
