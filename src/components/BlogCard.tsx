import { FC } from "react";
import { IBlog, PropsBlog,  } from "../types/blog.types";

const BlogCardConponent: FC<PropsBlog> = ({ blog, key }) => {
  return (
    <>
      <div className="w-full shadow-md lg:max-w-sm p-2" key={key}>
        <img
          className="object-cover w-full h-48"
          src={blog.image}
          alt="image"
        />
        <div className="p-4">
          <h4 className="text-xl font-semibold text-blue-600">{blog.title}</h4>
          <p className="mb-2 leading-normal">{blog.text}</p>
          <button className="px-4 py-2 text-blue-100 bg-blue-500 rounded shadow">
            Read more
          </button>
        </div>
      </div>
    </>
  );
};
export default BlogCardConponent;
