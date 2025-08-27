import { defineComponent } from "~/utils/typing.ts";
import { cn } from "~/utils/styling.ts";
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
            YuArasino RunnerGame
          </h2>
        </Arranger>
        <Arranger
          class={cn(
            "flex justify-center",
          )}
        >
          <canvas
            class={cn(
              "h-40 w-full max-w-150",
            )}
          />
        </Arranger>
      </Container>
    </section>
  );
});
