import React from "react";
import { AppBarUI } from "../components/AppBar.tsx";
import { Footer } from "../components/Footer.tsx";
import { MessageList } from "../components/Mesages.tsx";

export const MessageUi = () => {
  return (
    <>
      <AppBarUI></AppBarUI>
      <div className="container mt-5 mb-5">
        <MessageList></MessageList>
      </div>
      <Footer></Footer>
    </>
  );
};
