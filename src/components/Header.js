import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';


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
  return (
      <AppBar color='transparent' position='static'>
          <Container>
              <Toolbar>
                  <Typography 
                  onclick={() => navigate("/")} 
                  className={classes.title}
                  >
                      CryptoZone
                  </Typography>
                  <Select variant='outlined'
                  style ={{
                      width: 100, 
                      height: 40,
                      marginLeft: 15,
                  }}
                  >
                    <MenuItem>USD</MenuItem>
                    <MenuItem>EUR</MenuItem>
                  </Select>
              </Toolbar>
          </Container>

      </AppBar>
  )
};

export default Header;
