import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AppBar,
  Box,
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
    background: {
      default: "#111",
    },
    primary: {
      main: "#303030",
    },
    secondary: {
      main: "#C5AB63",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Karla",

    h6: {
      fontWeight: 600,
    },
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
            <Typography variant="h6">100 Cryptos</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Container maxWidth="md" align="center">
            <Box m={3}>
              <Typography color="textPrimary" variant="h5" gutterBottom>
                Crypto Rankings in the Last 24 Hours
              </Typography>
            </Box>

            <TextField
              id="search"
              variant="outlined"
              color="secondary"
              placeholder="Search here"
              onChange={handleSearch}
              required
            />
            {filteredCoins.map((coin) => {
              return (
                <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  price={coin.current_price}
                  rank={coin.market_cap_rank}
                  symbol={coin.symbol.toUpperCase()}
                  update={coin.last_updated}
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
