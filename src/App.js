import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AppBar,
  Container,
  createTheme,
  CssBaseline,
  Toolbar,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Coin from "./components/Coin";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    // secondary: {
    //   main: green[500],
    // },
  },
  typography: {
    fontFamily: "Karla",
    fontWeightLight: 400,
    fontWeightRegular: 600,
    fontWeightMedium: 700,
    fontWeightBold: 800,
  },
  background: {
    default: "#303030",
  },
});

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative" color="primary">
          <Toolbar>
            <Typography variant="h6" fontWeight="fontWeightBold">
              100 Cryptos
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Container maxWidth="md" align="center">
            <Typography color="textPrimary" variant="h5" gutterBottom>
              Crypto Rankings in the Last 24 Hours
            </Typography>
            <TextField
              variant="filled"
              color="primary"
              placeholder="e.g. Bitcoin"
              onChange={handleSearch}
            />
            {filteredCoins.map((coin) => {
              return (
                <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  price={coin.current_price}
                  rank={coin.market_cap_rank}
                />
              );
            })}
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
};

export default App;
