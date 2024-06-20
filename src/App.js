import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PostPage from "./pages/PostPage/PostPage";
import CreatePostPage from "./pages/CreatePostPage/CreatePostPage";
import { Routes, BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<CreatePostPage />} />
        <Route path="/posts" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
