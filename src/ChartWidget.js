// import "react-widgets/styles.css";
import React from "react";
import { useParams } from "react-router-dom";

const ChartWidget = () => {
    const params = useParams()
    return (
        <div className="widget">
           
            
<coingecko-coin-price-chart-widget  coin-id={`${params.coinId}`} currency="usd" height="800" width="1300" locale="en" background-color="#ffffff"></coingecko-coin-price-chart-widget>
        </div>
    )
}

export default ChartWidget