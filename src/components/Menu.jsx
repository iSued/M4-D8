import React from "react";
import dishes from "../data/menu.json";
import SingleDish from "./SingleDish.jsx";
import { Container, Alert } from "react-bootstrap";

const Menu = () => (
  <Container>
    {dishes === [] ? (
      <Alert variant="danger">Work In Progress</Alert>
    ) : (
      dishes.map((dish) => <SingleDish dish={dish} key={dish.id} />)
    )}
  </Container>
);
export default Menu;
