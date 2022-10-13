import { useState } from "react";
import BlogCardConponent from "./components/BlogCard";
import BlogsListConponent from "./components/BlogsList";
import BlogTableComponent from "./components/BlogTables";
import NavBar from "./components/NavBar";
import { IBlog } from "./types/blog.types";

function App() {
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
  const [blogs, setBlogs] = useState<IBlog[]>(blogData);

  return (
    <div className="App">
      <header className="App-header"></header>
      <hr />
      <NavBar></NavBar>
      <BlogTableComponent blogs={blogs}/>
      <BlogsListConponent blogs={blogs}/>
    </div>
  );
}

export default App;
