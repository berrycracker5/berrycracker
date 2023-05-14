export default interface Post {
  postNo: string;
  postTitle: string;
  postText: any;      // 마크다운 들어갈거 생각
  postOthers?: string; // 비고
  createDate: string; // YYYYMMDD
  updateDate?: string;
}