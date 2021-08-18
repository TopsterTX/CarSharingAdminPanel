import React from "react";
import "./InfoBlock.scss";

export function InfoBlock(props) {
  return (
    <section className="info-block">
      <div className="info-block__picture">
        <img
          src={props.car}
          alt=""
          className="info-block__picture-image"
          width="240px"
          height="110px"
        />
        <h2 className="info-block__picture-label">{props.label}</h2>
        <h3 className="info-block__picture-sublabel">{props.subLabel}</h3>
        <div className="info-block__picture-review">
          <input type="file" name="" id="file" />
          <label
            htmlFor="file"
            value={props.valueFile}
            onChange={props.onChangeFile}
          >
            Обзор
          </label>
        </div>
      </div>
      <div className="info-block__progress">
        <div className="info-block__progress-wrapper">
          <h4 className="info-block__progress-title">Заполнено</h4>
          <span className="info-block__progress-percent">73%</span>
        </div>
        <progress
          value="73"
          max="100"
          className="info-block__progress-bar"
        ></progress>
      </div>
      <div className="info-block__description">
        <span className="info-block__description-label">Описание</span>
        <textarea
          className="info-block__description-text"
          value={props.valueDescription}
          onChange={props.onChangeDescription}
        />
      </div>
    </section>
  );
}
