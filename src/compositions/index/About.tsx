import { defineComponent } from "../../utils/preact.ts";
import { cn } from "../../utils/tailwind.ts";
import { Container } from "../../components/Container.tsx";
import { Box } from "../../components/Box.tsx";

export const About = defineComponent(() => {
  return (
    <section
      class={cn(
        "py-16",
        "bg-slate-100",
      )}
      id="about"
    >
      <Container>
        <Box
          class={cn(
            "flex justify-center",
          )}
        >
          <h2
            class={cn(
              "p-[0.25em]",
              "bg-slate-700",
              "font-light",
              "text-4xl md:text-5xl",
              "tracking-widest leading-none",
              "text-white",
            )}
          >
            ABOUT
          </h2>
        </Box>
        <Box
          class={cn(
            "mt-16",
          )}
        >
          <div
            class={cn(
              "space-y-6",
              "text-lg",
              "text-center",
              "break-keep wrap-anywhere",
              "whitespace-nowrap",
            )}
          >
            <p>
              YUARASINO.NET
              <wbr />
              （ゆう・あらしの・どっとねっと）
              <wbr />
              にようこそ！
            </p>
            <p>
              このサイトは、
              <wbr />
              バーチャル美少女プログラマー
              <wbr />
              新篠ゆう（あらしのゆう）
              <wbr />
              の公式ウェブサイトです。
            </p>
            <p>
              人物・活動・技術などについて、
              <wbr />
              いろいろな情報をお届けします！
            </p>
          </div>
        </Box>
      </Container>
    </section>
  );
});
