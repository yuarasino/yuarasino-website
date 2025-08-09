import { cn } from "../../utils/tailwind.ts";
import { ResponsiveContainer } from "../ResponsiveContainer.tsx";
import { HeadingText } from "../HeadingText.tsx";
import { ProfileTable } from "../ProfileTable.tsx";

export const ProfileSection = () => {
  const expImages = [1, 2, 3, 4].map((i) => ({
    src: `/images/exp${i}.webp`,
    alt: `新篠ゆうの表情差分${i}`,
  }));
  const profileItems = [
    {
      label: "デビュー日",
      value: "2020/05/29",
    },
    {
      label: "推しマーク",
      value: "🐡 (ふぐの絵文字)",
    },
    {
      label: "推しタグ",
      value: "#あらしのゆう、#あらしのあーと",
    },
    {
      label: "好きなもの",
      value: "ラーメン、カレーナン",
    },
    {
      label: "好きなこと",
      value: "頭を使うゲーム、OSの再インストール、車の運転、百合漫画鑑賞",
    },
  ];

  return (
    <section
      class={cn(
        "bg-dot-pink-50",
      )}
      id="profile"
    >
      <ResponsiveContainer
        class={cn(
          "py-16",
        )}
      >
        <div
          class={cn(
            "flex justify-center items-center",
          )}
        >
          <HeadingText
            class={cn(
              "font-light tracking-widest",
              "text-5xl md:text-6xl",
              "text-pink-300",
            )}
            tag="h2"
            text="PROFILE"
          />
        </div>
        <div
          class={cn(
            "flex justify-center items-center",
            "flex-col lg:flex-row",
            "mt-20 gap-x-16 gap-y-8",
          )}
        >
          <div
            class={cn(
              "flex justify-end",
              "gap-x-4",
              "flex-1",
            )}
          >
            <div
              class={cn(
                "flex flex-col",
                "px-4 py-8 gap-y-4 md:py-10",
                "text-blue-300",
              )}
            >
              {expImages.map(({
                src,
                alt,
              }) => (
                <img
                  key={alt}
                  class={cn(
                    "w-auto",
                    "h-[67.5px] md:h-[90px]",
                  )}
                  src={src}
                  alt={alt}
                  loading="lazy"
                />
              ))}
            </div>
            <img
              class={cn(
                "w-auto",
                "h-[540px] md:h-[720px]",
              )}
              src="/images/avatar.webp"
              alt="新篠ゆうの立ち絵"
              loading="lazy"
            />
          </div>
          <div
            class={cn(
              "flex justify-start",
              "flex-1",
            )}
          >
            <div
              class={cn(
                "px-4 py-8 md:py-10",
                "h-[540px] md:h-[720px]",
              )}
            >
              <div
                class={cn(
                  "font-normal text-5xl",
                  "text-pink-300",
                )}
              >
                新篠 ゆう
              </div>
              <div
                class={cn(
                  "mt-1 ml-1",
                  "font-normal text-xl",
                  "text-black/50",
                )}
              >
                YU ARASINO
              </div>
              <div
                class={cn(
                  "mt-2",
                  "font-normal text-xl",
                )}
              >
                バーチャル美少女プログラマー/麻雀VTuber
              </div>
              <ProfileTable
                class={cn(
                  "mt-8",
                  "text-lg md:text-xl",
                )}
                items={profileItems}
              />
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  );
};
