import React from "react";
import { Route } from "react-router-dom";
import { Aside } from "./Aside/Aside";
import { Header } from "./Header/Header";
import {Footer} from './Footer/Footer'

export const Panel = () => {
  return (
    <main className="panel">
      <Header />
      <Aside />
      <Footer />
    </main>
  );
};
