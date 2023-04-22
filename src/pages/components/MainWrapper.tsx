import React from "react";
import Main from "../Main";
import Styles from "../Styles";
import { Routes, Route } from "react-router-dom";
import NotFound from "../NotFound";

const MainWrapper: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/styles" element={<Styles />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default MainWrapper;