import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ContentContainer } from "./../UI/ContentContainer/ContentContainer";
import { Table } from "../UI/Table/Table";
import { Title } from "./../UI/Title/Title";
import { getCars } from "../../redux/actions/cars/cars";
import { CarsItem } from "./CarsItem/CarsItem";
import { v4 as uuidv4 } from "uuid";
import "./Cars.scss";

export default React.memo(function Cars() {
  const { cars, configureFilter, page } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

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
                return <CarsItem key={uuidv4()} car={el} />;
              })
            : null}
          
          
        </Table>
      </ContentContainer>
    </section>
  );
});
