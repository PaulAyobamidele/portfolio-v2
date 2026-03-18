export const BLOG_CATEGORIES = [
  "Technology",
  "Research",
  "Philosophy & Religion",
  "Fun",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  published: boolean;
};

export type BlogMeta = BlogFrontmatter & {
  slug: string;
  readingTime: string;
};
