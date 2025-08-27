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
      <Container>
        <Arranger
          class={cn(
            "flex justify-center",
          )}
        >
          <h1
            class={cn(
              "w-full max-w-150",
              "text-2xl",
            )}
          >
            {title}
          </h1>
        </Arranger>
        <Arranger
          class={cn(
            "flex justify-center",
            "mt-4",
          )}
        >
          <p
            class={cn(
              "w-full max-w-150",
              "text-slate-500",
            )}
          >
            {description}
          </p>
        </Arranger>
      </Container>
    </div>
  );
});
