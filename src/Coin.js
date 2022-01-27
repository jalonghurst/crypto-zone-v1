import React from 'react';
import './Coin.css'; 


const Coin = ({name, image, symbol, price, volume, priceChange, marketcap, high24h, low24h}) => {
    return (
        <div className='coin-container'>
          
          <div className='coin-row'>
            <div className='coin'>
                <img src={image} alt='crypto'/>
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className ='coin-data'>      
                <p className= 'coin-price'>${price}</p>
                <p className= 'coin-volume'>${volume.toLocaleString()}</p>
                {priceChange < 0 ? (
                  <p className= 'coin-percent red'>{priceChange.toFixed(2)}%</p>
                ) : (
                  <p className= 'coin-percent green'>{priceChange.toFixed(2)}%</p>  
                )}
                  <p className= 'coin-marketcap'>
                    Mkt Cap: ${marketcap.toLocaleString()}
                  </p>
                  <p className= 'coin-price'>
                    ${high24h.toLocaleString()}
                  </p>
                  <p className= 'coin-price'>
                    ${low24h.toLocaleString()}
                  </p>
            
            </div>             
          </div> 
        </div>
    );
};

export default Coin
