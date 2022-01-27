import { AppBar, Container, Select, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const Header = () => {
  return (
      <AppBar color='transparent' position='static'>
          <Container>
              <Toolbar>
                  <Typography>
                      CryptoZone
                  </Typography>
                  <Select>

                  </Select>
              </Toolbar>
          </Container>

      </AppBar>
  )
};

export default Header;
