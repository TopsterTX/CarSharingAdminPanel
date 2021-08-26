import React, { useEffect } from "react";
import { CarsItem } from "./CarsItem/CarsItem";
import { ContentContainer } from "./../UI/ContentContainer/ContentContainer";
import { Table } from "../UI/Table/Table";
import { Title } from "./../UI/Title/Title";
import { useSelector, useDispatch } from "react-redux";
import { getCarsOnPage } from "../../redux/actions/cars/cars";
import { getCategories } from "../../redux/actions/carCard/carCard";
import "./Cars.scss";

export default React.memo(function Cars() {
  const { carsOnPage, configureFilter, page } = useSelector(
    (state) => state.cars
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsOnPage(page));
    dispatch(getCategories());
  }, [page]);

  return (
    <section className="cars">
      <ContentContainer>
        <Title>Список автомобилей</Title>
        <Table configureFilter={configureFilter}>
          {carsOnPage
            ? carsOnPage.map((el) => {
                return <CarsItem key={el.id} car={el} />;
              })
            : null}
        </Table>
      </ContentContainer>
    </section>
  );
});
