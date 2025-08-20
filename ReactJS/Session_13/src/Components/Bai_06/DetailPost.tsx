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
          <p><b>ID: {post.id}</b></p>
          <p><b>Title: {post.title}</b></p>
          <p><b>Content: {post.content}</b></p>
          <p><b>Author: {post.author}</b></p>
          <hr />
        </p>
      ))}
    </div>
  );
}