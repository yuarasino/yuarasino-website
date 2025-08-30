import { defineComponent } from "~/utils/typing.ts";
import { cn } from "~/utils/styling.ts";
import { Container } from "~/components/Container.tsx";
import { Arranger } from "~/components/Arranger.tsx";

type Props = {
  title: string;
  description: string;
};

export const ErrorArea = defineComponent<Props>((
  { title, description },
) => {
  return (
    <div>
      <Container
        class={cn(
          "py-16",
        )}
      >
        <Arranger
          class={cn(
            "flex justify-center",
          )}
        >
          <div
            class={cn(
              "w-full max-w-[600px]",
            )}
          >
            <h1
              class={cn(
                "text-2xl",
              )}
            >
              {title}
            </h1>
          </div>
        </Arranger>
        <Arranger
          class={cn(
            "flex justify-center",
            "mt-4",
          )}
        >
          <div
            class={cn(
              "w-full max-w-[600px]",
            )}
          >
            <p
              class={cn(
                "text-slate-500",
              )}
            >
              {description}
            </p>
            <p
              class={cn(
                "mt-4",
                "text-slate-500",
                "underline",
              )}
            >
              <a href="/">
                トップページに戻る
              </a>
            </p>
          </div>
        </Arranger>
      </Container>
    </div>
  );
});
