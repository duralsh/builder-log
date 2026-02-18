import type { CollectionEntry } from "astro:content";

export type PostEntry = CollectionEntry<"posts">;

export const sortByDateDesc = (posts: PostEntry[]) =>
  [...posts].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

export const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
