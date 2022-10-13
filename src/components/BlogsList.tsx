import { FC } from "react";
import { IBlog, IPropsBlogs } from "../types/blog.types";
import BlogCardConponent from "./BlogCard";

type PropsBlogs = Omit<IPropsBlogs, "blog" | "key">;
const BlogsListConponent: FC<PropsBlogs> = ({ blogs }) => {
  return (
    <>
      <div className="grid gap-2 lg:grid-cols-4 p-5">
        {blogs.map((blog, key) => (
          <BlogCardConponent blog={blog} key={key} />
        ))}
      </div>
    </>
  );
};
export default BlogsListConponent;
