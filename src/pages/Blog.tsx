import { useState } from "react";
import BlogsListConponent from "../components/BlogsList";
import { getblog } from "../functions/fakeData";
import { IBlog } from "../types/blog.types";



export default function BlogPage() {
    const [blogs] = useState<IBlog[]>(getblog());
  return (
    <>
      <h1>Blog</h1>
      <BlogsListConponent blogs={blogs} />
    </>
  );
}
