import { Routes, Route } from "react-router-dom";
import AdminPage from "./Home";
import BlogPage from "./Blog";
import HomePage from "./Admin";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="dashboard" element={<AdminPage />} />
    </Routes>
  );
}
