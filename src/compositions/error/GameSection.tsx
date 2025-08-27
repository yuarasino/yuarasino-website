import { defineComponent } from "~/utils/typing.ts";
import { cn } from "~/utils/styling.ts";
import { GameIsland } from "~/islands/error/GameIsland.tsx";
import { Container } from "~/components/Container.tsx";
import { Arranger } from "~/components/Arranger.tsx";

export const GameSection = defineComponent(() => {
  return (
    <section>
      <Container
        class={cn(
          "py-16",
        )}
      >
        <Arranger>
          <h2
            class={cn(
              "sr-only",
            )}
          >
            Game
          </h2>
        </Arranger>
        <Arranger
          class={cn(
            "flex justify-center",
          )}
        >
          <GameIsland />
        </Arranger>
      </Container>
    </section>
  );
});
