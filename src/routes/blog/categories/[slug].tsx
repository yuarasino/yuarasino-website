import { HttpError, page } from "fresh";
import { define } from "@/utils/fresh.ts";
import { siteName } from "@/consts.ts";
import {
  getBlogArticlesByCategory,
  getBlogCategory,
} from "@/utils/markdown.ts";

import type { BlogCategory } from "@/types.ts";

export const handler = define.handlers({
  GET: async ({ state, params }) => {
    let category: BlogCategory;
    try {
      category = getBlogCategory(params.slug);
    } catch {
      throw new HttpError(404);
    }
    const articles = await getBlogArticlesByCategory(category.slug);

    state.title = `カテゴリ「${category.name}」 | ${siteName}`;
    state.description = `カテゴリ「${category.name}」の記事一覧です。`;
    return page({
      category,
      articles,
    });
  },
});

export default define.page<typeof handler>(({ data }) => {
  const { category, articles } = data;
  return (
    <main>
      <section>
        <h1>{`カテゴリ「${category.name}」`}</h1>
        <ul>
          {articles.map((
            { slug, meta },
          ) => {
            return (
              <li
                key={slug}
              >
                <a
                  href={`/blog/${slug}`}
                >
                  <article>
                    <h2>{meta.title}</h2>
                    <p>{meta.description}</p>
                    <time>{meta.date}</time>
                    <p>{meta.category}</p>
                    <p>{meta.tags.join(", ")}</p>
                  </article>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
});
