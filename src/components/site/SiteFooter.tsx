import { cn } from "../../utils/tailwind.ts";
import { SvgIcon } from "../SvgIcon.tsx";

export const SiteFooter = () => {
  const iconLinks = [
    {
      name: "X",
      src: "/icons/x-twitter.svg",
      alt: "Xへのリンク",
      href: "https://x.com/yuarasino",
    },
    {
      name: "YouTube",
      src: "/icons/youtube.svg",
      alt: "YouTubeへのリンク",
      href: "https://youtube.com/@yuarasino",
    },
    {
      name: "GitHub",
      src: "/icons/github.svg",
      alt: "GitHubへのリンク",
      href: "https://github.com/yuarasino",
    },
  ];

  return (
    <footer
      class={cn(
        "flex flex-col gap-8",
        "py-8",
        "bg-blue-900 text-white",
      )}
    >
      <div class="flex justify-center">
        <div class="flex items-center gap-2">
          <img
            class="size-10"
            src="/images/logomark-mono.svg"
            alt=""
          />
          <span class="font-mono text-2xl">
            YuArasino.net
          </span>
        </div>
      </div>
      <div class="flex justify-center">
        <p class="flex gap-12">
          {iconLinks.map((item) => (
            <a
              class={cn(
                "flex justify-center items-center",
                "size-10",
                "bg-white",
                "rounded-full",
              )}
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon
                class="size-8 text-blue-900"
                src={item.src}
                alt={item.alt}
              />
            </a>
          ))}
        </p>
      </div>
      <div class="flex justify-center">
        <p>&copy; Yu Arasino</p>
      </div>
    </footer>
  );
};
