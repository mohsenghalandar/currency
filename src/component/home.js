import React, { useEffect, useState } from 'react';
import api from "../services/api"
import Coin from './coin';
import Nav from './nav';
import Title from './title';
import DownNav from './downNav';

const Home = () => {
    const [allCoin,setAllCoin]=useState();
    const [filter,setFilter] = useState({
        page:1,
    });
useEffect(()=>{
    const setter=async()=>{
        const data = await(api());
        setAllCoin(data);
    }
    setter();
},[])
    return (
        <div>
            <Nav />
            <Title />
            {
                allCoin &&
                    allCoin.map((item)=> <Coin key={item.id} data={item} />)
            }
            <DownNav filter={filter} setFilter={setFilter} />
        </div>
    );
};

export default Home;