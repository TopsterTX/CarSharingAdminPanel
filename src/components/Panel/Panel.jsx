import React, { memo } from "react";
import { Aside } from "./Aside/Aside";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { ContentRouter } from "./../ContentRouter/ContentRouter";

export const PanelInner = () => {
  return (
    <main className="panel">
      <Header />
      <ContentRouter />
      <Aside />
      <Footer />
    </main>
  );
};

export const Panel = memo(PanelInner);
