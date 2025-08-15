import { defineComponent } from "../../utils/preact.ts";
import { cn } from "../../utils/tailwind.ts";
import { Container } from "../../components/Container.tsx";
import { Arranger } from "../../components/Arranger.tsx";

export const About = defineComponent(() => {
  return (
    <section
      class={cn(
        "bg-slate-100",
      )}
    >
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
            ABOUT
          </h2>
        </Arranger>
        <Arranger>
          <div
            class={cn(
              "space-y-4",
              "text-lg",
              "text-center",
              "break-keep wrap-anywhere whitespace-nowrap",
            )}
          >
            <p>
              YUARASINO.NET<wbr />（ゆう・あらしの・どっとねっと）<wbr />へようこそ！
            </p>
            <p>
              このサイトは、<wbr />バーチャル美少女プログラマー<wbr />新篠ゆう（あらしのゆう）<wbr />の公式サイトです。
            </p>
            <p>
              VTuberとしての活動・<wbr />プログラマーとしての活動の両面から、<wbr />いろいろな情報を発信します！
            </p>
          </div>
        </Arranger>
      </Container>
    </section>
  );
});
