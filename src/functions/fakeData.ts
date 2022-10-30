import { IBlog } from "../types/blog.types";

export function getblog() {
  const blogData: IBlog[] = [
    {
      title: "React",
      image: "https://picsum.photos/536/354",
      text: "This is blog about React",
    },
    {
      title: "Tailwind",
      image: "https://picsum.photos/536/354",
      text: "This is blog about Tailwind",
    },
    {
      title: "Redux",
      image: "https://picsum.photos/536/354",
      text: "This is blog about Redux",
    },
    {
      title: "TypeScript",
      image: "https://picsum.photos/536/354",
      text: "This is blog about TypeScript",
    },
  ];
  return blogData;
}
