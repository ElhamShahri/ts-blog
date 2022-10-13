export interface IBlog {
  title: string;
  image: string;
  text: string;
  author?: string;
}

export interface IPropsBlogs {
  blogs: IBlog[];
  blog: IBlog;
  key: number;
}
