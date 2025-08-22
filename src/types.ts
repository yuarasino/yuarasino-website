export type State = {
  title: string;
  description: string;
  ogType?: "website" | "article";
  ogImage?: string;
  noIndex?: boolean;
};
