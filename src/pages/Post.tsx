/* eslint-disable jsx-a11y/anchor-is-valid  */
/* eslint-disable jsx-a11y/anchor-has-content  */
/* eslint-disable react/jsx-pascal-case  */

import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import styled from "styled-components";
import PostModel from "@/models/PostModel";
import moment from "moment";
import { MyPosts } from "../MyPosts";
import "./Post.css";
import ReactMarkDown from "react-markdown"
import remarkGfm from "remark-gfm"

interface ILocationState {
  post: PostModel;
}
const Post: React.FC = () => {
  const locationState = useLocation().state as ILocationState;
  const {postNo} = useParams();
  const totalPosts: PostModel[] = MyPosts;
  const displayPost: PostModel = totalPosts.filter(item => item?.postNo == postNo)?.[0];  // 화면에 보여질 post

  return (
    <>
      {/* <!-- Main --> */}
      <div className="inner">

        {/* <!-- Header --> */}
        <MainHeader />

        {/* Post */}
        <div className="post-wrapper">
          <h1 className="post-title">
            {displayPost?.postTitle}
          </h1>
          <div className="post-content">
            <ReactMarkDown remarkPlugins={[remarkGfm]}>
                {displayPost?.postContent}
            </ReactMarkDown>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post;