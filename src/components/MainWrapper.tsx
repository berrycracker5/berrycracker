import React from "react";
import Main from "../pages/Main";
import Styles from "../pages/Styles";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import PostsList from "../pages/PostsList";

const MainWrapper: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/posts" element={<PostsList />} />
      <Route path="/styles" element={<Styles />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default MainWrapper;