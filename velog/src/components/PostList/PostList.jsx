import React from "react";

const PostList = ({ posts, onPostClick }) => {
  return (
    <main>
      {posts.map((post) => (
        <div key={post.id} className="post" onClick={() => onPostClick(post)}>
          <img src={post.image} alt={post.title} />
          <h2>{post.title}</h2>
          <p>{post.content.substring(0, 100)}...</p>
          <div>
            작성자: {post.author} | 좋아요: {post.likes} | 댓글: {post.comments}
          </div>
        </div>
      ))}
    </main>
  );
};

export default PostList;
