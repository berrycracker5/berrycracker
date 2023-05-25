import MPost from "./models/MPost";

export const MyPosts: MPost[] = [
  {
    postNo: "4",
    postTitle: "스윽 왔다가 엄청 많이 작업하고 감..",
    postContent: "후우...",
    postOthers: "신규",
    createDate: "20230526",
  },
  {
    postNo: "3",
    postTitle: "세번째 제목입니다",
    postContent: "내용 3",
    postOthers: "-",
    createDate: "20230514",
  },
  {
    postNo: "2",
    postTitle: "두번째 제목입니다",
    postContent: `
# head

**굵게**

일반 텍스트

\`\`\`
코드블럭
\`\`\`

*기울이기*

글자 \'배경색\'

> 인용문
`,
    postOthers: "-",
    createDate: "20230513",
  },
  {
    postNo: "1",
    postTitle: "첫번째 제목입니다 3333",
    postContent: "내용 1",
    postOthers: "-",
    createDate: "20230511",
  },
]