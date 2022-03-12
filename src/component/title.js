import React from 'react';
import { FiChevronUp,FiChevronDown} from "react-icons/fi";
import dsc from './helpe_func/dsc';
import asc from './helpe_func/asc';
const Title = (props) => {
    const {filter,setFilter,dd,dispatch} = props ;
    const changeHandler =(event)=>{
        setFilter({...filter,per_page:event.target.value})
    }
    return (
        <div>
            <span>
                {
                    (filter.market_rank == "market_cap_desc")?
                    <button onClick={()=>setFilter({...filter,market_rank:"market_cap_asc"})}>Rank<FiChevronUp /></button>
                    :
                    <button onClick={()=>setFilter({...filter,market_rank:"market_cap_desc"})}>Rank<FiChevronDown /></button>
                }
            </span>
            <button>name</button>
            <span>
                {   ( dd.range_type == "uptodown") ?
                    <button onClick={()=>dispatch({type:"DownToUp",playload:dsc(dd.data)})}>price<FiChevronUp /></button>
                    :
                    <button onClick={()=>dispatch({type:"UpToDown",playload:asc(dd.data)})}>price<FiChevronDown /></button>
                }
            </span>
            
            <button>total supply</button>
            <button>max value</button>
            <button>min value</button>
            <select id="per_page" value={filter.per_page} onChange={(event)=> changeHandler(event)}>
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='75'>75</option>
                <option value='100'>100</option>
            </select>
        </div>
    );
};

export default Title;