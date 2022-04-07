import React, { useEffect, useState } from 'react';
import style from "./styles/details.module.css"
import spinner from "../resource/spinner.gif"
import info from '../services/moreinfo';
import chart from '../services/chart';
import { short } from './helpe_func/short'
import * as V from 'victory';
import { VictoryLine,VictoryChart,VictoryTheme } from 'victory';



const Details = () => {
    const [infor,setInfor] = useState({});
    const [chartdata,setChartdata] = useState([]);

    useEffect(()=>{
        const setter = async()=>{
            const dd = await(info());
            setInfor(dd.data);
            console.log(dd.data);
            const dd2 = await(chart());
            setChartdata(dd2);
        }
        setter();
    },[])
    return (
        <div id={style.main}>
            {
            !Object.keys(infor).length ? <img src={spinner} /> : 
            <span className={style.info}>
                <img src={infor.image.small}  title={infor.id} className={style.icon} />
                <p>{infor.market_cap_rank}</p>
                <p>{infor.name}</p>
                <p>{infor.market_data.current_price.usd
                }$</p>
                <p>+{infor.market_data.high_24h.usd}</p>
                <p>-{infor.market_data.low_24h.usd}</p>
                <p>{infor.market_data.price_change_24h}</p>
                <p>{short(infor.description.en)}</p>
                <a href={infor.links.homepage[0]}>official website</a>
            </span>
            }
            <span id='chart_container' className={style.chart_container}>
                <div>all button for chart</div>
                <div>
                <VictoryChart theme={VictoryTheme.material}>
                    <VictoryLine style={{data: { stroke: "#c43a31" },parent: { border: "1px solid #ccc"}}}
                                    data={[
                                            { x: 1, y: 2 },
                                            { x: 2, y: 3 },
                                            { x: 3, y: 5 },
                                            { x: 4, y: 4 },
                                            { x: 5, y: 7 }]}/>

                    </VictoryChart>
                </div>
            </span>
        </div>
    );
};

export default Details;