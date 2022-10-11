export default function BlogCardConponent() {
  const blogs = [
    {
      title: "React",
      img: "https://picsum.photos/536/354",
      content: "This is blog about React",
    },
    {
      title: "Tailwind",
      img: "https://picsum.photos/536/354",
      content: "This is blog about Tailwind",
    },
    {
      title: "Redux",
      img: "https://picsum.photos/536/354",
      content: "This is blog about Redux",
    },
    {
      title: "TypeScript",
      img: "https://picsum.photos/536/354",
      content: "This is blog about TypeScript",
    },
  ];
  return (
    <>
      <div className="grid gap-2 lg:grid-cols-4 p-5">
        {blogs.map((item, key) => (
          <div className="w-full shadow-md lg:max-w-sm p-2" key={key}>
            <img
              className="object-cover w-full h-48"
              src={item.img}
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600">
                {item.title}
              </h4>
              <p className="mb-2 leading-normal">{item.content}</p>
              <button className="px-4 py-2 text-blue-100 bg-blue-500 rounded shadow">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
