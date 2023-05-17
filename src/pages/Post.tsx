/* eslint-disable jsx-a11y/anchor-is-valid  */
/* eslint-disable jsx-a11y/anchor-has-content  */
/* eslint-disable react/jsx-pascal-case  */

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import styled from "styled-components";
import MPost from "@/models/MPost";
import moment from "moment";
import { MyPosts } from "../MyPosts";
import "./Post.css";
import ReactMarkDown from "react-markdown"
import remarkGfm from "remark-gfm"

interface ILocationState {
  post: MPost;
}
const Post: React.FC = () => {
  const locationState = useLocation().state as ILocationState;
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(locationState.post.postContent);
  })

  return (
    <>
      {/* <!-- Main --> */}
      <div id="main">
        <div className="inner">
          {/* <!-- Header --> */}
          <MainHeader />

          {/* Post */}
          <div className="post-wrapper">
            <h1 className="post-title">
              {locationState?.post?.postTitle}
            </h1>
            <div className="post-content">
              {/* {locationState?.post?.postContent} */}
              <ReactMarkDown remarkPlugins={[remarkGfm]}>
                {/* 아래처럼 쓰면 <pre> 태그가 생겨버려서 안됨 */}
                {/* {locationState?.post?.postContent} */}
                {/* {content} */}
                {`
# head

**굵게**

일반 텍스트

\`\`\`
코드블럭
\`\`\`

*기울이기*

글자 \'배경색\'

> 인용문
                `}
              </ReactMarkDown>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Post;