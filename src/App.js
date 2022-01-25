import React, { useState, useEffect} from 'react';
import Particles from "react-particles-js";
import styled from "@emotion/styled";
import { useTheme } from "./ThemeContext";
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


import axios from 'axios';
import './App.css';
import Coin from './Coin';



const particlesOptions = {
    particles: {
      number: {
        value: 9,
        density: {
          enable: true,
          value_area: 300,  
            
        }
        
      },
      color: { value: "#ff0000" },
      
      
    
    }
    //  "interactivity": {
	  //       "events": {
	  //           "onhover": {
	  //               "enable": true,
	  //               "mode": "repulse"
	  //           }
	  //       }
	  //   }
}

// fix dark theme issue
const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
  h1 {
    color: ${props => props.theme.body};
  }
`;

function App() {
  const themeState = useTheme();


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

   <Wrapper>
      <div>
        <button onClick={() => themeState.toggle()}>
          {themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
   
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
          />
        );
      })}

        </Tab>
        <Tab eventKey="third" title="Aboutus">
          Hii, I am 3rd tab content
        </Tab>
      </Tabs>
    </div>
       
      {/* previous navigation buttons */}
      {/* <div className ="coin-tab-container">
        <button
          className= "coin-tabs"
          // onClick={onButtonSubmit} 
        >USD</button>
        <button
          className= "coin-tabs"
          // onClick={onButtonSubmit} 
        >History</button>
        <button
          className= "coin-tabs"
          // onClick={onButtonSubmit} 
        >Indexes</button>
      </div> */}

     
    </div>
    </div>   
    
    </div>
    </Wrapper>
  );
 };
export default App;
