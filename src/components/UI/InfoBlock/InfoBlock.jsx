import React, { useRef, useCallback, memo } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addImage } from "../../../redux/actions/carCard/carCard";
import "./InfoBlock.scss";

const InfoBlockInner = ({
  label = "",
  subLabel = "",
  valueDescription = "",
  onChangeDescription = () => {},
  path = "",
}) => {
  const dispatch = useDispatch();
  const image = useRef();

  const imageHandler = useCallback(
    (path) => {
      if (!path) {
        return "";
      } else if (path.indexOf("data:image") !== -1) {
        return path;
      } else {
        return `https://api-factory.simbirsoft1.com${path}`;
      }
    },
    [path]
  );

  const displayImage = useCallback(
    (img) => {
      image.current.src = img.path;
      dispatch(addImage(img));
    },
    [addImage]
  );

  const changeHandler = useCallback((e) => {
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
  }, []);

  const changeDescriptionHandler = useCallback(
    (val) => {
      return dispatch(onChangeDescription(val));
    },
    [valueDescription, onChangeDescription]
  );

  return (
    <section className="info-block">
      <div className="info-block__picture">
        <img
          src={imageHandler(path)}
          alt=""
          ref={image}
          className="info-block__picture-image"
        />
        <h2 className="info-block__picture-label">{label}</h2>
        <h3 className="info-block__picture-sublabel">{subLabel}</h3>
        <div className="info-block__picture-review">
          <input
            type="file"
            name=""
            id="file"
            onChange={(e) => changeHandler(e)}
          />
          <label htmlFor="file">Обзор</label>
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
          value={valueDescription}
          onChange={(e) => changeDescriptionHandler(e.target.value)}
        />
      </div>
    </section>
  );
};

InfoBlockInner.propTypes = {
  label: PropTypes.string.isRequired,
  sublabel: PropTypes.string,
  valueDescription: PropTypes.string.isRequired,
  onChangeDescription: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export const InfoBlock = memo(InfoBlockInner);
