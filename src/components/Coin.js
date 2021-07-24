import React from "react";
import { Box, Container, Paper, Typography } from "@material-ui/core";

const Coin = ({ name, image, price, rank }) => {
  return (
    <>
      <Box variant="sm" m={2}>
        <Paper elevation={5}>
          <Typography variant="h2" underline>
            #{rank}
          </Typography>
          <Typography variant="h6">{name}</Typography>
          <img src={image} alt="crypto" />
          <Typography variant="h6">${price}</Typography>
        </Paper>
      </Box>
    </>
  );
};

export default Coin;
