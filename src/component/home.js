import React, { useEffect, useState,useReducer } from 'react';
import api from "../services/api"
import Coin from './coin';
import Nav from './nav';
import Title from './title';
import DownNav from './downNav';
import spinner from "../resource/spinner.gif"
import search from './helpe_func/search';

const initialState ={
    isLoading:true,
    range_type:'uptodown',
    data:'',
    error:'',
}
const reducer = (state,action)=>{
    switch (action.type){
        case "Default" :
            return{
                isLoading:'false',
                data:action.playload,
                error:"",
                range_type:"uptodown"
            }
        case "UpToDown" :
            return {
                isLoading:false,
                data:action.playload,
                error:"",
                range_type:"uptodown",
            }
        case "DownToUp":
            return{
                isLoading:false,
                data:action.playload,
                error:'',
                range_type:"downtoup"
            }
        case "SEARCH":
        return{
            isLoading:false,
            data:action.playload,
            error:"",
        }
        default :return state;
    }
}
const Home = () => {
    const [dd,dispatch] = useReducer(reducer,initialState);
    
    const [allCoin,setAllCoin]=useState();
    const [filter,setFilter] = useState({
        page:1,
        market_rank:'market_cap_desc',
        per_page:25,
        name:"",
    });
useEffect(()=>{
    const setter=async()=>{
        const data = await(api(filter));
        setAllCoin(data);
        dispatch({type:"Default",playload:data})
    }
    setter();
},[filter])
    return (
        <div>
            <Nav dd={dd} allCoin={allCoin} filter={filter} setFilter={setFilter} dispatch={dispatch}/>
            <table>
                <Title filter={filter} setFilter={setFilter} dd={dd} dispatch={dispatch}/>
            </table>
            
            {
                !dd.data ? <img src={spinner} alt='loading' />
                : 
                    dd.data.map((item)=> <Coin key={item.id}  data={item} />)
            }
            
            <DownNav filter={filter} setFilter={setFilter} />
        </div>
    );
};

export default Home;