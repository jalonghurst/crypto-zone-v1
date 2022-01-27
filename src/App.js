import React, { useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Particles from "react-particles-js";
// import styled from "@emotion/styled";
// import { useTheme } from "./ThemeContext";
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Header from './components/Header';
import axios from 'axios';
import Coin from './Coin';
import { makeStyles } from '@material-ui/core';
import { particlesJS } from 'tsparticles';
// import CoinPage from './components/CoinPage';

const particlesOptions = {
    particles: {
      number: {
        value: 9,
        density: {
          enable: true,
          value_area: 200,              
        }
      },
      color: { value: "#ff0000" },
    }
}

function App() {
  // Material UI useStyles set up
const useStyles = makeStyles(() => ({
  App: {
    background: particlesJS,
    colour: "white",
    minHeight: "100vh"

  }
}));
  const classes = useStyles();


  const [coins, setCoins] = useState([])
  const [search,setSearch] =useState('')

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);       
    }).catch(error => console.log(error))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

 const filteredCoins = coins.filter(coin =>
  coin.name.toLowerCase().includes(search.toLowerCase())
  )
  

 return (
 <BrowserRouter>
      <div className = {classes.App}>
        <Header/>
        {/* Homepage Route
        <Route path='/' component={Coin} exact />
        <Route path='/coins/:id' component={CoinPage}/> */}

<div>
    <div className='coin-app'>
    <div className='app'><Particles className='particles'
        params={particlesOptions}/>
        </div>


        {/* Tabs Navigation Bar */}

        <div style={{ display: 'block', width: 700, padding: 30, }}>
      <Tabs defaultActiveKey="second">
        <Tab eventKey="first" title="Market">
           
        </Tab>
        <Tab eventKey="second" title="Search Coins">
        {/* Coin search */}
         
      
        <br></br>
      <div className ="coin-search">
        <h3 className ="coin-text">Search a currency</h3>
        <form>
          <input type="text" placeholder="Search"
          className="coin-input" onChange={handleChange}/>
        </form>

        <div className='coin-row'>
            <div className='coin'>
                <h1>Coin</h1>
                <p className='coin-symbol'>symbol</p>
            </div>
            <div className ='coin-data'>      
                <p className= 'coin-price'> Price</p>
                <p className= 'coin-volume'>Volume</p>
    
                  <p className= 'coin-percent red'>%Ch.24h</p>  
                
                  <p className= 'coin-marketcap'>
                    Mkt Cap:
                  </p>
                  <p className= 'coin-price'>
                    24h High
                  </p>
                  <p className= 'coin-price'>
                    24h Low:
                 </p>
            
            </div>             
          </div>

      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          high24h={coin.high_24h}
          low24h={coin.low_24h}
          />
        );
      })}

        </Tab>
        <Tab eventKey="third" title="Aboutus">
          Hii, I am 3rd tab content
        </Tab>
      </Tabs>
    </div>     
    </div>
    </div>   
    </div>
    </BrowserRouter>
 
  );
 };
 
export default App;
