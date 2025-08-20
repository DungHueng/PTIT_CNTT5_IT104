import React from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface Props {
  posts: Post[];
}

export default function DetailPost(props: Props) {
  return (
    <div>
      <h2>Danh Sách Bài Viết</h2>
      {props.posts.map((post) => (
        <p key={post.id}>
          <p>ID: {post.id}</p>
          <p>Title: {post.title}</p>
          <p>Content: {post.content}</p>
          <p>Author: {post.author}</p>
          <hr />
        </p>
      ))}
    </div>
  );
}