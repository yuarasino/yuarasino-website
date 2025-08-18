import type { BlogCategory, BlogTag, NavLink } from "@/types.ts";

export const siteName = "YUARASINO.NET";

export const navLinks: NavLink[] = [
  {
    slug: "profile",
    name: "PROFILE",
    href: "/#profile",
  },
  {
    slug: "activities",
    name: "ACTIVITIES",
    href: "/#activities",
  },
  {
    slug: "resume",
    name: "RESUME",
    href: "/#resume",
  },
  {
    slug: "works",
    name: "WORKS",
    href: "/#works",
  },
  {
    slug: "blog",
    name: "BLOG",
    href: "/blog",
  },
  {
    slug: "info",
    name: "INFO",
    href: "/info",
  },
];

export const blogCategories: BlogCategory[] = [
  {
    slug: "website",
    name: "ウェブサイト",
  },
];

export const blogTags: BlogTag[] = [
  {
    slug: "fresh",
    name: "Fresh",
  },
];
