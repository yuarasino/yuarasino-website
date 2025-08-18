import { page } from "fresh";
import { define } from "@/utils/fresh.ts";
import { blogCategories, siteName } from "@/consts.ts";

export const handler = define.handlers({
  GET: ({ state }) => {
    const categories = blogCategories;

    state.title = `カテゴリ一覧 | ${siteName}`;
    state.description = "カテゴリ一覧です。";
    return page({
      categories,
    });
  },
});

export default define.page<typeof handler>(({ data }) => {
  const { categories } = data;
  return (
    <main>
      <section>
        <h1>カテゴリ</h1>
        <ul>
          {categories.map((
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
