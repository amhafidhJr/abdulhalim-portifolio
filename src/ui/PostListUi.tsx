import React from "react";
import { AppBarUI } from "../components/AppBar.tsx";
import { Footer } from "../components/Footer.tsx";
import { PostList } from "../components/PostList.tsx";

export const PostListUi = () => {
  return (
    <>
      <AppBarUI></AppBarUI>
      <div className="container mt-5 mb-5">
        <PostList></PostList>
      </div>
      <Footer></Footer>
    </>
  );
};
