import { HttpError, page } from "fresh";
import { define } from "@/utils/fresh.ts";
import { siteName } from "@/consts.ts";
import { getBlogArticle } from "@/utils/markdown.ts";

import type { BlogArticle } from "@/types.ts";

export const handler = define.handlers({
  GET: async ({ state, params }) => {
    let article: BlogArticle;
    try {
      article = await getBlogArticle(params.slug);
    } catch {
      throw new HttpError(404);
    }

    state.title = `${article.meta.title} | ${siteName}`;
    state.description = article.meta.description;
    return page({
      article,
    });
  },
});

export default define.page<typeof handler>(({ data }) => {
  const { meta, content } = data.article;
  return (
    <main>
      <article>
        <div>
          <h1>{meta.title}</h1>
          <p>{meta.description}</p>
          <time>{meta.date}</time>
          <p>{meta.category}</p>
          <p>{meta.tags.join(", ")}</p>
        </div>
        <div>{content}</div>
      </article>
    </main>
  );
});
