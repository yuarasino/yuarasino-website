import { defineComponent } from "../../utils/preact.ts";
import { cn } from "../../utils/tailwind.ts";
import { Box } from "../../components/Box.tsx";
import { Container } from "../../components/Container.tsx";

const Th = defineComponent((
  { children },
) => {
  return (
    <th
      class={cn(
        "block",
        "w-30",
        "font-normal",
        "text-left",
        "text-blue-300",
      )}
    >
      {children}
    </th>
  );
});

const Td = defineComponent((
  { children },
) => {
  return (
    <td
      class={cn(
        "block",
        "flex-1",
      )}
    >
      {children}
    </td>
  );
});

export const Profile = defineComponent(() => {
  const expImages = [1, 2, 3, 4].map((i) => {
    return {
      src: `/images/exp${i}.webp`,
      alt: `新篠ゆうの表情差分${i}`,
    };
  });

  return (
    <section
      class={cn(
        "py-16",
        "bg-dot-pink-100",
      )}
      id="profile"
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
              "bg-pink-300",
              "font-light",
              "text-4xl md:text-5xl",
              "tracking-widest leading-none",
              "text-white",
            )}
          >
            PROFILE
          </h2>
        </Box>
        <Box
          class={cn(
            "flex justify-center items-center",
            "flex-col lg:flex-row",
            "items-center lg:items-start",
            "mt-16 gap-y-8 gap-x-16",
          )}
        >
          <Box
            class={cn(
              "flex justify-end",
              "flex-1",
            )}
          >
            <Box
              class={cn(
                "flex",
                "gap-x-8",
              )}
            >
              <Box>
                <ul
                  class={cn(
                    "flex flex-col",
                    "py-8 gap-y-4",
                  )}
                >
                  {expImages.map((
                    { src, alt },
                  ) => {
                    return (
                      <li>
                        <img
                          class={cn(
                            "h-auto",
                            "w-24 md:w-30",
                            "lg:w-24 xl:w-30",
                          )}
                          src={src}
                          alt={alt}
                          loading="lazy"
                        />
                      </li>
                    );
                  })}
                </ul>
              </Box>
              <Box>
                <img
                  class={cn(
                    "h-auto",
                    "w-48 md:w-60",
                    "lg:w-48 xl:w-60",
                  )}
                  src="/images/avatar.webp"
                  alt="新篠ゆうの立ち絵"
                  loading="lazy"
                />
              </Box>
            </Box>
          </Box>
          <Box
            class={cn(
              "flex justify-start",
              "flex-1",
            )}
          >
            <div
              class={cn(
                "py-8",
                "w-80 md:w-100",
                "lg:w-80 xl:w-100",
              )}
            >
              <div
                class={cn(
                  "text-lg",
                  "leading-none",
                )}
              >
                <p
                  class={cn(
                    "text-4xl",
                    "text-pink-300",
                  )}
                >
                  新篠 ゆう
                </p>
                <p
                  class={cn(
                    "ml-1",
                    "text-xl",
                    "text-slate-500",
                  )}
                >
                  Yu Arasino
                </p>
                <p
                  class={cn(
                    "mt-2",
                  )}
                >
                  バーチャル美少女プログラマー
                </p>
              </div>
              <table
                class={cn(
                  "mt-12",
                  "text-lg",
                  "break-keep wrap-anywhere whitespace-nowrap",
                )}
              >
                <tbody
                  class={cn(
                    "flex flex-col",
                    "gap-y-4",
                  )}
                >
                  <tr
                    class={cn(
                      "flex",
                    )}
                  >
                    <Th>デビュー日</Th>
                    <Td>2020/05/29</Td>
                  </tr>
                  <tr
                    class={cn(
                      "flex",
                    )}
                  >
                    <Th>推しマーク</Th>
                    <Td>🐡（ふぐの絵文字）</Td>
                  </tr>
                  <tr
                    class={cn(
                      "flex",
                    )}
                  >
                    <Th>推しタグ</Th>
                    <Td>
                      #あらしのゆう、<wbr />#あらしのあーと
                    </Td>
                  </tr>
                  <tr
                    class={cn(
                      "flex",
                    )}
                  >
                    <Th>好きなもの</Th>
                    <Td>
                      ラーメン、<wbr />カレーナン、<wbr />オニオンサーモン、<wbr />今川焼カスタード
                    </Td>
                  </tr>
                  <tr
                    class={cn(
                      "flex",
                    )}
                  >
                    <Th>好きなこと</Th>
                    <Td>
                      頭を使うゲーム、<wbr />OSの再インストール、<wbr />車の運転、<wbr />百合アニメ鑑賞
                    </Td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Box>
        </Box>
      </Container>
    </section>
  );
});
