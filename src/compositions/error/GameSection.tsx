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
            Game
          </h2>
        </Arranger>
        <Arranger
          class={cn(
            "flex justify-center",
          )}
        >
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
            >
              ゲーム画面
            </canvas>
            <p
              class={cn(
                "mt-4",
              )}
            >
              プレイするにはSpaceキーを押してください。
              <br />
              クリックかタップでもプレイできます。
            </p>
          </div>
        </Arranger>
      </Container>
    </section>
  );
});
