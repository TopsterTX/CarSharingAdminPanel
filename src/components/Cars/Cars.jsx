import React, { useEffect } from "react";
import { AddButton } from "../UI/AddButton/AddButton";
import { getEditCar } from "../../redux/actions/carCard/carCard";
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
  const { categories } = useSelector((state) => state.carCard);
  const { emptyCar } = useSelector((state) => state.carCard);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!carsOnPage.length ) {
      dispatch(getCarsOnPage(page));
    }
    if (!categories.length ) {
      dispatch(getCategories());
    }
  }, [page]);

  return (
    <section className="cars">
      <ContentContainer>
        <Title>Список автомобилей</Title>
        <Table
          configureFilter={configureFilter}
          addonComponent={
            <AddButton
              onClick={() => dispatch(getEditCar(emptyCar))}
              to="/admin/panel/card_car"
            >
              Автомобиль
            </AddButton>
          }
        >
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
