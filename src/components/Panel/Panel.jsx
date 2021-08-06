import React from "react";
import { Route } from "react-router-dom";
import { Aside } from "./Aside/Aside";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { ContentRouter } from "./../ContentRouter/ContentRouter";

export const Panel = () => {
  return (
    <main className="panel">
      <Header />
      <ContentRouter />
      <Aside />
      <Footer />
    </main>
  );
};
