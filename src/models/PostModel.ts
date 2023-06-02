export enum PostType {
  HTMLCSS = "html-css",
  JAVASCRIPT = "javascript",
  REACT = "react",
  REACTNATIVE = "react-native",
  GIT = "git",
  OTHERS = "others",
}

export default interface PostModel {
  postNo: string;
  postType: PostType;
  postTitle: string;
  postContent: string;  // Markdown 형식
  postOthers?: string;  // 비고
  createDate: string;   // YYYYMMDD
  updateDate?: string;  // YYYYMMDD
}