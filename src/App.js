import axios from 'axios'
import './App.css';
import React, { useState, useEffect, useLocation } from 'react'
import { Routes, Route, Link,  } from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom';
import About from "./About"
import Home from './Home';
import Coin from './Coin'
import HeatMapWidget from './HeatMapWidget';



function App() {
  
  
  const [coins, setCoins] = useState([]);

  const [search, setSearch] = useState('');
  

 

const url= "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"

useEffect(() => {
 
  
  axios.get(url).then((res) => {
      setCoins(res.data)
      console.log(res.data)
      
  }).catch((error) => {
      console.log(error)
  })
}, [])

const handleChange = e => {
  // e.preventDefault()
  setSearch(e.target.value);
};
const filteredCoins = coins.filter(coin =>
  coin.id.includes(search)
);

  return (
    <div className="App">
      <div className='test'>

      <div className='navDiv'>
         <nav className='navBar'>
        <Link to="/">
          <h1 className="home">Home</h1>
        </Link>
        <Link to='/heatmap'>
        <h1 className='heatmap'>Heatmap</h1>
        </Link>
        <Link to="/about">
          <About />
        </Link>

      </nav>
      </div>
      <Routes>
       <Route path="/" element={<Home  coins={coins} search={search} handleChange={handleChange} filteredCoins ={filteredCoins}/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/coin/:coinId" element={<Coin />}/>
      <Route path='/heatmap' element={<HeatMapWidget/>}/>
      </Routes>
      
      </div>
    </div>
  );
}

export default App;
