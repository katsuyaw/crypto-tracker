import React from "react";
import { Box, Container, Paper, Typography } from "@material-ui/core";

const Coin = ({ name, image, price, rank, symbol, update }) => {
  return (
    <>
      <Box variant="sm" m={3}>
        <Paper elevation={5}>
          <Box p={8} bgcolor="primary.main">
            <Typography variant="h2" underline>
              #{rank}
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              my={2}
            >
              <Typography variant="h4">{name}</Typography>
              <Typography variant="h4">({symbol})</Typography>
            </Box>
            <Box my={5}>
              <img src={image} alt="crypto" />
            </Box>
            <Box my={3}>
              <Typography variant="h6">${price}</Typography>
            </Box>
            <Typography variant="h7">{update}</Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Coin;
