import React from "react";
import "./ButtonsContainer.scss";

export const ButtonsContainer = ({ children }) => {
  return (
    <section className="buttons">
      <ul className="buttons__container">{children}</ul>
    </section>
  );
};
