import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Monserrat",
        fontWeight: "bold",
        cursor: "pointer",

    },
}))


const Header = () => { 
    const classes = useStyles();
    // useHistory changed in v6 of react router to useNavigate
    const navigate = useNavigate();

    const { currency, setCurrency} = CryptoState();

    console.log(currency);

    const darkTheme = createTheme ({
        palette: {
          primary: {
             main: "#fff",
          },
          type: "dark",
         
        },
    });

  return (
      <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static'>
          <Container>
              <Toolbar>
                  <Typography 
                  onclick={() => navigate("/")} 
                  className={classes.title}
                  variant='h6'
                  >CryptoZone
                  </Typography>
                  <Select variant='outlined'
                  style ={{
                      width: 100, 
                      height: 40,
                      marginRight: 15,
                  }}
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  >
                    <MenuItem value="USD">USD</MenuItem>
                    <MenuItem value="EUR">EUR</MenuItem>
                  </Select>
              </Toolbar>
          </Container>

      </AppBar>
      </ThemeProvider>
  )
};

export default Header;
