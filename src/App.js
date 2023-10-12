import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import TableCoins from './components/tablet_coins';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      );
      console.log(res.data);
      setCoins(res.data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []); // El segundo argumento del useEffect es un array vacío para que se ejecute solo una vez al montar el componente.

  return (
    <div className="container">
      <div className='row'>
      <input type='text' placeholder='search a coin' className='form-control bg-dark text-ligth border-0 mt-4 text-center font-style:white'
      onChange={e => console.log(e.target.value)}/>

      <TableCoins coins={coins} search={search} />

      </div>
    </div>
  );
}

export default App;

