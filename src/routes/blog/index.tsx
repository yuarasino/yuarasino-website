import { page } from "fresh";
import { define } from "@/utils/fresh.ts";
import { siteName } from "@/consts.ts";
import { getBlogArticles } from "@/utils/markdown.ts";

export const handler = define.handlers({
  GET: async ({ state }) => {
    const articles = await getBlogArticles();

    state.title = `記事一覧 | ${siteName}`;
    state.description = "ブログの記事一覧です。";
    return page({
      articles,
    });
  },
});

export default define.page<typeof handler>(({ data }) => {
  const articles = data.articles;
  return (
    <main>
      <section>
        <h1>BLOG</h1>
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
