import * as path from "@std/path";
import { extractYaml } from "@std/front-matter";
import { blogCategories, blogTags } from "@/consts.ts";

import type { BlogArticle, BlogCategory, BlogMeta, BlogTag } from "@/types.ts";

const getStem = (filename: string): string => {
  const basename = path.basename(filename);
  const extname = path.extname(filename);
  return basename.slice(0, -extname.length);
};

export const getBlogArticles = async (): Promise<BlogArticle[]> => {
  const directory = path.join(Deno.cwd(), "src/contents/blog");
  const articles: BlogArticle[] = [];
  for await (const entry of Deno.readDir(directory)) {
    const file = path.join(directory, entry.name);
    const markdown = await Deno.readTextFile(file);
    const data = extractYaml<BlogMeta>(markdown);
    const article: BlogArticle = {
      slug: getStem(entry.name),
      meta: data.attrs,
      content: data.body,
    };
    articles.push(article);
  }
  return articles.sort((a, b) => b.meta.date.getTime() - a.meta.date.getTime());
};

export const getBlogArticle = async (
  slug: string,
): Promise<BlogArticle> => {
  const file = path.join(Deno.cwd(), "src/contents/blog", `${slug}.md`);
  const markdown = await Deno.readTextFile(file);
  const data = extractYaml<BlogMeta>(markdown);
  const article: BlogArticle = {
    slug: slug,
    meta: data.attrs,
    content: data.body,
  };
  return article;
};

export const getBlogCategory = (
  slug: string,
): BlogCategory => {
  const category = blogCategories.find((c) => c.slug === slug);
  if (!category) {
    throw new TypeError();
  }
  return category;
};

export const getBlogArticlesByCategory = async (
  slug: string,
): Promise<BlogArticle[]> => {
  const articles = await getBlogArticles();
  return articles.filter((a) => a.meta.category === slug);
};

export const getBlogTag = (
  slug: string,
): BlogTag => {
  const tag = blogTags.find((t) => t.slug === slug);
  if (!tag) {
    throw new TypeError();
  }
  return tag;
};

export const getBlogArticlesByTag = async (
  slug: string,
): Promise<BlogArticle[]> => {
  const articles = await getBlogArticles();
  return articles.filter((a) => a.meta.tags.includes(slug));
};
