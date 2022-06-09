import React from 'react'
import CryptoItem from './CryptoItem'
import { Link } from 'react-router-dom'
import Coin from './Coin'
import './Home.css'
import HeatMapWidget from './HeatMapWidget';

const Home = (props) => {
    // console.log(props)
    // const coins = props.coins.map(coin => {
    //     return <CryptoItem coins={coin} />
    // })
    // const filteredCoins = props.coins.filter(coin =>
    //     coin.id.toLowerCase().includes(props.search.toLowerCase())
    // );
    const mapCoins = props.filteredCoins.map(coin => {
        return (
            <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
                <CryptoItem coins={coin} />
            </Link>

        )
    })
    return (

        <div className='container'>
            <div className='leftSide'>
                {/* <HeatMapWidget /> */}
            </div>
            <div className='rightSide'>
                <div className='coin-search'>

                    <form>
                        <input
                            className='coinInput'
                            type='Search'
                            onChange={props.handleChange}
                            placeholder='Search here'
                        />
                    </form>
                </div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p className='price'>Price</p>
                    <p className='24h'>24h</p>
                    <p className='volume'>Volume</p>
                    <p className='mktCap'>Mkt Cap</p>
                    {/* {coins} */}
                </div>
                <div className='eachCoin'>
                {/* {filteredCoins.map(coin => {
                    return (
                        <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
                            <CryptoItem coins={coin} />
                        </Link>

                    )
                })} */}
                <div>
                    {mapCoins}
                </div>
                </div>

            </div>
        </div>
    )
}

export default Home