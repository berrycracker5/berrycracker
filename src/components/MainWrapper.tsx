import React from "react";
import Main from "../pages/Main";
import Styles from "../pages/Styles";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import PostsList from "../pages/PostsList";
import Post from "../pages/Post";
import { useDispatch } from "react-redux";
import { setShowSidebar } from "../redux/controlSidebar";
import WebProgramming from "../pages/WebProgramming";

const MainWrapper: React.FC = () => {
  const dispatch = useDispatch();

  const handleClickMainWrapper = () => {
    dispatch(setShowSidebar(false));
  }

  return (
    <div id="main" onClick={handleClickMainWrapper}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/post" element={<Post />} />
        <Route path="/webProgramming" element={<WebProgramming />} />
        <Route path="/styles" element={<Styles />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default MainWrapper;