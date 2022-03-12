import React, { useEffect, useState } from 'react';
import style from "./styles/nav.module.css"
import search from './helpe_func/search';

const Nav = (props) => {
    const {allCoin,dispatch,filter,setFilter} = props ;
    const [searchV,setSearchV] = useState('');
      const changehand = (event)=>{
        if( searchV === null)
        {
            setFilter({...filter,name:event.target.value})
        }
        else{
          setSearchV(event.target.value);
          const ddd = search(allCoin,event.target.value);
          dispatch({type:"SEARCH",playload:ddd})
        }

      }
    return (
        <div className={style.main}>
          <p className={style.logo}>crypyo analaysis</p>  
          <input className={style.search_box} value={searchV}  onChange={(event)=> {changehand(event)}} type='search' /> 
        </div>
    );
};

export default Nav;