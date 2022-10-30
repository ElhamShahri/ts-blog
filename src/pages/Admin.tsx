import { useState } from "react";
import BlogTableComponent from "../components/BlogTables";
import { getblog } from "../functions/fakeData";
import { IBlog } from "../types/blog.types";

export default function AdminPage() {
  const [blogs, setBlogs] = useState<IBlog[]>(getblog);
  return (
    <>
      <h1>Home</h1>
      <BlogTableComponent blogs={blogs} />
    </>
  );
}
