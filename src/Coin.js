import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Coin.css'
import ChartWidget from "./ChartWidget";
import "react-widgets/styles.css";


const Coin = () =>{
    const params = useParams()
    const [coin, setCoin] = useState({})
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(() =>{
         axios.get(url).then((res) => {
            setCoin(res.data)
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
      }, [])
    


    return(
        <div>
            <div className="coinContainer">
            
                <div className="coinContent">
                {/* <input type="button" value="Reload Page" onClick={window.location.reloa}></input> */}
                
                    <h1>{coin.name}</h1>

                    {/* <div>{coin.market_data.current_price.usd} </div>  */}
                    {coin.market_cap_rank? <h1>rank {coin.market_cap_rank}</h1> : null}
                    {coin.image ? <img src={coin.image.large} alt='' /> : null}
                    {/* {coin.market_data?.current_price ? <h1> current price ${coin.market_data.current_price.usd.toLocaleString()}</h1> : null} */}
                    {coin.market_data?.market_cap? <h1> market cap ${coin.market_data.market_cap.usd.toLocaleString()}</h1> : null}
                    {coin.market_data?.total_volume? <h1> total volume ${coin.market_data.total_volume.usd.toLocaleString()}</h1> : null}
                    {coin.market_data?.high_24h? <h1>high 24h ${coin.market_data.high_24h.usd.toLocaleString()}</h1> : null}
                    {coin.market_data?.low_24h? <h1>low 24h ${coin.market_data.low_24h.usd.toLocaleString()}</h1> : null}
                    {coin.block_time_in_minutes? <h1>Block time in minutes: {coin.block_time_in_minutes}
                    </h1> : null}
                    <div>
                        <h2>
                        {(coin.description ? coin.description.en : '')} 
                        </h2>
                        </div>
                    
                </div>
                <ChartWidget />
            </div>
        </div>
    )
}

export default Coin