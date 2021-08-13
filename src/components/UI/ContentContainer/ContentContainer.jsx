import React from "react";
import "./ContentContainer.scss";

export function ContentContainer({ children }) {
  return <div className="content__container">{children}</div>;
}
