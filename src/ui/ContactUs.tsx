import React from "react";
import { AppBarUI } from "../components/AppBar.tsx";
import { Footer } from "../components/Footer.tsx";
import ContactForm from "../components/Contact.tsx";

export const ContactUs = () => {
  return (
    <>
      <AppBarUI></AppBarUI>
      <div className="container mt-5 mb-5">
        <ContactForm></ContactForm>
      </div>
      <Footer></Footer>
    </>
  );
};
