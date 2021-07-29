import React, {useEffect, useState, useLayoutEffect} from 'react';
import axios from 'axios';
import Crypto from './components/Crypto';
import Header from './components/Header';
import CryptoMobile from './components/CryptoMobile';

function App() {

  const [crypto, setCrypto] = useState([])
  const [search, setSearch] = useState('')
  const [size, setSize] = useState([0,0])

  // get data from https://api.coingecko.com
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
         .then(res => {
           setCrypto(res.data)
         })
         .catch(error => console.log(error))
  }, [])

  // refresh when resize screen
  function useWindowSize(){
    useLayoutEffect(() => {
      function updateSize(){
        setSize([window.innerWidth, window.innerHeight])
      }
      window.addEventListener('resize', updateSize)
      updateSize()
      return () => window.removeEventListener('resize', updateSize)
    }, [])

    return size
  }

  useWindowSize() // its only addition, useless function

  const handleSearchChange = (e) => (
    setSearch(e.target.value)
  )

  const cryptoData = crypto.filter(data => 
    data.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="bg-gray-800 text-white overflow-hidden">
      <Header handleSearchChange={handleSearchChange} />
      <div className={window.innerWidth >= 640 ? "flex flex-col justify-center text-center mt-16 px-5" : 'hidden'}>
        <div className="grid grid-cols-6 text-xl font-semibold uppercase">
          <p>Name</p>
          <p>Symbol</p>
          <p>Price</p>
          <p>Volume</p>
          <p>Price change</p>
          <p>Market cap</p>
        </div>
        <hr className="mt-4" />
        {
          cryptoData.map(data => {
            return <Crypto 
              key={data.id}
              name={data.name}
              symbol={data.symbol}
              image={data.image}
              price={data.current_price}
              volume={data.total_volume}
              price_change={data.price_change_percentage_24h}
              marketcap={data.market_cap}
            />
          })
        }
      </div>
      {
          cryptoData.map(data => {
            return <CryptoMobile
            key={data.id}
            name={data.name}
            symbol={data.symbol}
            image={data.image}
            price={data.current_price}
            volume={data.total_volume}
            price_change={data.price_change_percentage_24h}
            marketcap={data.market_cap}
            />
          })
        }
      
    </div>
  );
}

export default App;
