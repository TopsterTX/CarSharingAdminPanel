import React from "react";
import { Pages } from "./../Pages/Pages";
import Filter from "../Filter/Filter";
import "./Table.scss";

export function Table({ children, configureFilter }) {
  return (
    <div className="block">
      <Filter {...configureFilter} />
      <div className="block__main">{children}</div>
      <Pages />
    </div>
  );
}
