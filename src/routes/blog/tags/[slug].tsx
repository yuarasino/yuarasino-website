import { HttpError, page } from "fresh";
import { define } from "@/utils/fresh.ts";
import { siteName } from "@/consts.ts";
import { getBlogArticlesByTag, getBlogTag } from "@/utils/markdown.ts";

import type { BlogTag } from "@/types.ts";

export const handler = define.handlers({
  GET: async ({ state, params }) => {
    let tag: BlogTag;
    try {
      tag = getBlogTag(params.slug);
    } catch {
      throw new HttpError(404);
    }
    const articles = await getBlogArticlesByTag(tag.slug);

    state.title = `タグ「${tag.name}」 | ${siteName}`;
    state.description = `タグ「${tag.name}」`;
    return page({
      tag,
      articles,
    });
  },
});

export default define.page<typeof handler>(({ data }) => {
  const { tag, articles } = data;
  return (
    <main>
      <section>
        <h1>{`タグ「${tag.name}」`}</h1>
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
