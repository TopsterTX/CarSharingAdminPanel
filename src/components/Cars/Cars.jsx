import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ContentContainer } from "./../UI/ContentContainer/ContentContainer";
import { Table } from "../UI/Table/Table";
import { Title } from "./../UI/Title/Title";
import { getCars } from "../../redux/actions/cars/cars";
import { CarsItem } from "./CarsItem/CarsItem";
import "./Cars.scss";

export default React.memo(function Cars() {
  const { cars, configureFilter } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  let page = 1;


  useEffect(() => {
    dispatch(getCars(page));
  }, [page]);

  return (
    <section className="cars">
      <ContentContainer>
        <Title>Список автомобилей</Title>
        <Table configureFilter={configureFilter}>
          {cars
            ? cars.map((el) => {
                return <CarsItem key={el.id} />;
              })
            : null}
        </Table>
      </ContentContainer>
    </section>
  );
});
