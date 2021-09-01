import React, {memo} from "react";
import PropTypes from "prop-types";
import "./ButtonsContainer.scss";

const ButtonsContainerInner = ({ children = "" }) => {
  return (
    <section className="buttons">
      <ul className="buttons__container">{children}</ul>
    </section>
  );
};

ButtonsContainerInner.propTypes = {
  children: PropTypes.any.isRequired,
};

export const ButtonsContainer = memo(ButtonsContainerInner);
