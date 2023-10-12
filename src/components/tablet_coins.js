import React from 'react';
import CoinRow from './coinRow'; 

const titles= ['#','Moneda','precio en USD','cambio de precio', 'movimiento en 24h','precio mas alto']

const TableCoins = ({ coins, search }) => {
  const filteredcoins = coins.filter((coin)=>
    coin.name.toLowerCase().includes(search.toLowerCase()) |
    coin.symbol.toLowerCase().includes(search.toLowerCase()) 
    );
  
  
    return (
    
    
    <table className='table table-hover table-dark table-bordered'>
      <thead>
        <tr>
         {
            titles.map((title, index)=>(
                <td key={index}>{title}</td>
            ))
         } 
        </tr>
      </thead>
      <tbody>
        {filteredcoins.map((coin, index) => (
          <CoinRow coin={coin} key={index} index={index + 1} /> 
        ))}
      </tbody>
    </table>
  );
}

export default TableCoins;
