import { page } from "fresh";
import { define } from "@/utils/fresh.ts";
import { blogTags, siteName } from "@/consts.ts";

export const handler = define.handlers({
  GET: ({ state }) => {
    const tags = blogTags;

    state.title = `タグ一覧 | ${siteName}`;
    state.description = "タグ一覧です。";
    return page({
      tags,
    });
  },
});

export default define.page<typeof handler>(({ data }) => {
  const { tags } = data;
  return (
    <main>
      <section>
        <h1>タグ</h1>
        <ul>
          {tags.map((
            { slug, name },
          ) => {
            return (
              <li
                key={slug}
              >
                <a
                  href={`/blog/${slug}`}
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
});
