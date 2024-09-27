export default function Post({ post }) {
  return (
    <li>
      <span>아이디 : {post.userId}</span>
      {" / "}
      <span>글 번호: {post.id}</span>
      {" / "}
      <span>제목 : {post.title}</span>
      {" / "}
      <span>내용 : {post.body}</span>
    </li>
  );
}
