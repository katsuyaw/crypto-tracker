import { Container, Typography } from "@material-ui/core";
import React from "react";

const Coin = ({ name, image, price }) => {
  return (
    <>
      <Container variant="sm" p={2}>
        <Typography variant="h6">{name}</Typography>
        <img src={image} alt="crypto" />
        <Typography variant="h6">${price}</Typography>
      </Container>
    </>
  );
};

export default Coin;
