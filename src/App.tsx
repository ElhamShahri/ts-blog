import BlogCardConponent from "./components/BlogCard";
import BlogTableComponent from "./components/BlogTables";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <hr />
      <NavBar></NavBar>
      <BlogTableComponent></BlogTableComponent>
      <BlogCardConponent></BlogCardConponent>
    </div>
  );
}

export default App;
