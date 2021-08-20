import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addImage } from "../../../redux/actions/carCard/carCard";
import "./InfoBlock.scss";

export function InfoBlock(props) {
  const dispatch = useDispatch();

  const image = useRef();
  const displayImage = (img) => {
    image.current.src = img.path;
    dispatch(addImage(img));
  };

  const changeHandler = (e) => {
    console.log(e.target.files);
    let file = e.target.files[0];

    if (file.type === "image/png" && "image/jpeg") {
      let blob = new Blob([file], { type: file.type });
      let reader = new FileReader();

      reader.readAsDataURL(blob);
      reader.onload = () => {
        let img = {
          path: reader.result,
          mimetype: blob.type,
          size: blob.size,
          originalname: file.name,
        };
        displayImage(img);
      };
    }
  };

  return (
    <section className="info-block">
      <div className="info-block__picture">
        <img
          src={props.car}
          alt=""
          className="info-block__picture-image"
          width="240px"
          height="110px"
          ref={image}
        />
        <h2 className="info-block__picture-label">{props.label}</h2>
        <h3 className="info-block__picture-sublabel">{props.subLabel}</h3>
        <div className="info-block__picture-review">
          <input
            type="file"
            name=""
            id="file"
            onChange={(e) => changeHandler(e)}
          />
          <label
            htmlFor="file"
            // value={props.valueFile}
            // onChange={props.onChangeFile}
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
