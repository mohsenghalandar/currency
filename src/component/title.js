import React from 'react';
import { FiChevronUp,FiChevronDown} from "react-icons/fi";
import dsc from './helpe_func/dsc';
import asc from './helpe_func/asc';
import style from "./styles/title.module.css"

const Title = (props) => {
    const {filter,setFilter,dd,dispatch} = props ;
    const changeHandler =(event)=>{
        setFilter({...filter,per_page:event.target.value})
    }
    return (
        <div className={style.main}>
            <span className={style.rank}>
                {
                    (filter.market_rank == "market_cap_desc")?
                    <p style={{marginTop:'5px'}} onClick={()=>setFilter({...filter,market_rank:"market_cap_asc"})}>Rank<FiChevronUp style={{color:' rgb(0, 17, 51)'}} /></p>
                    :
                    <p style={{marginTop:'5px'}} onClick={()=>setFilter({...filter,market_rank:"market_cap_desc"})}>Rank<FiChevronDown /></p>
                }
            </span>
            <span className={style.name}>name</span>
            <span className={style.price}>
            
                {   ( dd.range_type == "uptodown") ?
                    <p style={{marginTop:'5px'}} onClick={()=>dispatch({type:"DownToUp",playload:dsc(dd.data)})}>price<FiChevronUp /></p>
                    :
                    <p style={{marginTop:'5px'}} onClick={()=>dispatch({type:"UpToDown",playload:asc(dd.data)})}>price<FiChevronDown /></p>
                }
            </span>
            
            <span className={style.total}>total supply</span>
            <span className={style.change}><p style={{marginTop:'1px'}}>max value</p><p style={{marginTop:'0px'}}>min value</p></span>
            <span className={style.per_page}>
                <select   id="per_page" value={filter.per_page} onChange={(event)=> changeHandler(event)}>
                    <option value='25'>25</option>
                    <option value='50'>50</option>
                    <option value='75'>75</option>
                    <option value='100'>100</option>
                </select>
            </span>
        </div>
    );
};

export default Title;