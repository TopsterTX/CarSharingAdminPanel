import React, { useState, memo, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import "./Pages.scss";

const PagesInner = ({ count = 0, onChangePage = () => {}, divisor = 0 }) => {
  const dispatch = useDispatch();
  const { carsOnPage } = useSelector((state) => state.cars);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [minPage, setMinPage] = useState(1);

  const pageHandler = (
    leftIndicator,
    curPage,
    rightIndicator,
    optional = page > 2
  ) => {
    return optional && page <= rightIndicator
      ? curPage
      : page <= 2
      ? leftIndicator
      : page > rightIndicator
      ? rightIndicator
      : null;
  };

  const middlePageRef = useRef();
  const leftPageRef = useRef();
  const rightPageRef = useRef();

  let leftPage = pageHandler(2, page - 1, maxPage - 3);
  let middlePage = pageHandler(3, page, maxPage - 2);
  let rightPage = pageHandler(4, page + 1, maxPage - 1);

  const leftArrowHandler = () => {
    if (page === 1) return;
    setPage((p) => page - 1);
  };

  const rightArrowHandler = () => {
    if (page === maxPage) return;
    setPage((p) => page + 1);
  };

  const buttonClickedHandler = (e) => {
    setPage((p) => Number(e.target.textContent));
  };

  useEffect(() => {
    dispatch(onChangePage(divisor, page - 1));
  }, [page]);

  useEffect(() => {
    setMaxPage((p) => Math.ceil(count / divisor));
  }, [count]);

  return (
    <section className="pages">
      <div className="pages__container">
        <button
          className="pages__arrow --left"
          onClick={() => leftArrowHandler()}
        >
          <span>^</span>
          <span>^</span>
        </button>
        <div className="pages__wrapper">
          <button
            className={`pages__button ${page === minPage ? "active" : null} `}
            onClick={(e) => buttonClickedHandler(e)}
          >
            <span>{minPage}</span>
          </button>
          <button className={`pages__button ${maxPage <= 6 ? "none" : null}`}>
            <span>...</span>
          </button>

          <button
            className={`pages__button ${page === 2 ? "active" : null} ${
              maxPage <= 6 ? "none" : null
            }`}
            onClick={(e) => buttonClickedHandler(e)}
            ref={leftPageRef}
          >
            <span>{leftPage}</span>
          </button>
          <button
            className={`pages__button ${
              page >= 3 && page <= maxPage - 2 ? "active" : null
            } ${maxPage <= 6 ? "none" : null}`}
            onClick={(e) => buttonClickedHandler(e)}
            ref={middlePageRef}
          >
            <span>{middlePage}</span>
          </button>
          <button
            className={`pages__button ${
              page === maxPage - 1 ? "active" : null
            } ${maxPage <= 6 ? "none" : null}`}
            onClick={(e) => buttonClickedHandler(e)}
            ref={rightPageRef}
          >
            <span>{rightPage}</span>
          </button>
          <button className={`pages__button`}>
            <span>...</span>
          </button>
          <button
            className={`pages__button ${page === maxPage ? "active" : null}`}
            onClick={(e) => buttonClickedHandler(e)}
          >
            <span>{maxPage}</span>
          </button>
        </div>
        <button
          className="pages__arrow --right"
          onClick={() => rightArrowHandler()}
        >
          <span>^</span>
          <span>^</span>
        </button>
      </div>
    </section>
  );
};

PagesInner.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  divisor: PropTypes.number,
};

export const Pages = memo(PagesInner);
