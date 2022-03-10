import React from 'react';
import style from "./styles/coin.module.css"
import { BiBarChart } from "react-icons/bi";

const Coin = (props) => {
    const {data} = props ; 
    return (
        <div className={style.main}>
                <p className={style.rank}>{data.market_cap_rank}</p>
                <img className={style.icon} src={data.image} alt={data.symbol} />
                <p className={style.name}>{data.name}</p>
                <p className={style.symbol}>{data.symbol}</p>
                <p className={style.price}>{data.current_price}$</p>
                <p className={style.supply}>{data.total_supply}</p>
                <p className={style.change}>{data.price_change_24h}</p>
                <span className={style.max_min}>
                    <p className={style.max}>{data.high_24h}</p>
                    <p className={style.min}>{data.low_24h}</p>
                </span>
                <span className={style.chart}><BiBarChart /></span>
        </div>
    );
};

export default Coin;