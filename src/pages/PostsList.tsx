/* eslint-disable jsx-a11y/anchor-is-valid  */
/* eslint-disable jsx-a11y/anchor-has-content  */
/* eslint-disable react/jsx-pascal-case  */

import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import styled from "styled-components";
import PostModel from "@/models/PostModel";
import moment from "moment";
import { MyPosts } from "../MyPosts";

const Div_postslistWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
const Div_postslistsHeader = styled.div`
  display: flex;
  width: 100%;
  border-top: solid;
  border-bottom: solid;
  border-block-color: #f56a6a;
  border-width: thin;
  padding: 0.5rem;
`;
const Div_postsWrapper = styled.div`
  width: 100%;
`;
const Button_posts = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  border-bottom: solid;
  border-width: thin;
  margin-top: 0.2rem;
  padding: 2rem 0.5rem;
`;
const Span_postsHeader = styled.span`
  color: black;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow : ellipsis;
`;
const Span_posts = styled.span`
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow : ellipsis;
`;

interface ILocationState {

}
const PostsList: React.FC = () => {
  const posts: PostModel[] = MyPosts;
  const navigate = useNavigate();
  const locationState = useLocation().state as ILocationState;
  const { postType } = useParams();
  const displayPosts: PostModel[] = posts.filter(item => item.postType == postType); // 실제 보여줄 post list

  useEffect(() => {

  })

  const handleClickPost = (item: PostModel) => {
    navigate(`/post/${item?.postNo}`, { state: { post: item } }); // todo : postNo만 던지자
  }

  return (
    <>
      {/* <!-- Main --> */}
      <div className="inner">

        {/* <!-- Header --> */}
        <MainHeader />

        {/* Posts List */}
        {/* width : 10 / 55 / 25 / 10 */}
        <Div_postslistWrapper>
          <Div_postslistsHeader>
            <Span_postsHeader style={{ width: "10%" }}>
              번호
            </Span_postsHeader>
            <Span_postsHeader style={{ width: "55%" }}>
              제목
            </Span_postsHeader>
            <Span_postsHeader style={{ width: "25%" }}>
              작성일자
            </Span_postsHeader>
            <Span_postsHeader style={{ width: "10%" }}>
              비고
            </Span_postsHeader>
          </Div_postslistsHeader>

          <Div_postsWrapper>
            {displayPosts.map((item, index) => {
              return (
                <Button_posts key={index} onClick={() => handleClickPost(item)}>
                  <Span_posts style={{ width: "10%" }}>
                    {item.postNo}
                  </Span_posts>
                  {/* <Span_posts style={{ width: "55%", textAlign: "left" }}> */}
                  <Span_posts style={{ width: "55%" }}>
                    {item.postTitle}
                  </Span_posts>
                  <Span_posts style={{ width: "25%" }}>
                    {moment(item.createDate).format("YYYY.MM.DD")}
                  </Span_posts>
                  <Span_posts style={{ width: "10%" }}>
                    {item.postOthers}
                  </Span_posts>
                </Button_posts>
              )
            })}
          </Div_postsWrapper>
        </Div_postslistWrapper>
      </div>
    </>
  )
}

export default PostsList;