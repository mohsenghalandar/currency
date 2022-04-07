import React from 'react';
import style from "./styles/coin.module.css"
import { BiBarChart,BiDetail } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Coin = (props) => {
    const uxx = 'www.google.com'
    const {data} = props ; 
    return (
        <div className={style.main}>
            <span className={style.rank}>
                <p className={style.rank_num}>{data.market_cap_rank}</p>
                <img className={style.icon} src={data.image} alt={data.symbol} />
            </span>
            <span style={{display:'inline-block',width:"20%"}}>
                <p className={style.name}>{data.name}</p>
                <p className={style.symbol}>{data.symbol}</p>
            </span>
            <p className={style.price}>{data.current_price}$</p>
            <p className={style.supply}>{data.total_supply}</p>
            <span className={style.max_min}>
                    <p className={style.max}>{data.high_24h}</p>
                    <p className={style.min}>{data.low_24h}</p>
                </span>
            <span className={style.chart}><Link to='/details'><BiBarChart/>link <BiDetail /></Link></span>
        </div>
    );
};

export default Coin;