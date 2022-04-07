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
        <tr>
            <th>
                {
                    (filter.market_rank == "market_cap_desc")?
                    <th onClick={()=>setFilter({...filter,market_rank:"market_cap_asc"})}>Rank<FiChevronUp /></th>
                    :
                    <th onClick={()=>setFilter({...filter,market_rank:"market_cap_desc"})}>Rank<FiChevronDown /></th>
                }
            </th>
            <th>name</th>
            <th>
                {   ( dd.range_type == "uptodown") ?
                    <th onClick={()=>dispatch({type:"DownToUp",playload:dsc(dd.data)})}>price<FiChevronUp /></th>
                    :
                    <th onClick={()=>dispatch({type:"UpToDown",playload:asc(dd.data)})}>price<FiChevronDown /></th>
                }
            </th>
            
            <th>total supply</th>
            <th>max value</th>
            <th>min value</th>
            <select id="per_page" value={filter.per_page} onChange={(event)=> changeHandler(event)}>
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='75'>75</option>
                <option value='100'>100</option>
            </select>
        </tr>
    );
};

export default Title;