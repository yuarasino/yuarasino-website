export type NavLink = {
  slug: string;
  name: string;
  href: string;
};

export type BlogCategory = {
  slug: string;
  name: string;
};

export type BlogTag = {
  slug: string;
  name: string;
};

export type BlogMeta = {
  title: string;
  description: string;
  date: Date;
  category: string;
  tags: string[];
};

export type BlogArticle = {
  slug: string;
  meta: BlogMeta;
  content: string;
};
