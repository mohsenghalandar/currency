import React, { useState } from 'react';
import { FiChevronsLeft,FiChevronsRight} from "react-icons/fi";
import style from './styles/downNav.module.css'

const DownNav = (props) => {
    const {filter,setFilter} = props ;
  

    const p_pager = () =>{
        if (filter.page < 10)
        {
            setFilter({...filter,page:filter.page + 1})
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0;
        }
    }
    const m_pager = () =>{
        if (filter.page > 1)
        {
            setFilter({...filter,page:filter.page - 1})
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0;
        }
    }
    return (
        <div className={style.main} >
            <span className={style.btn}><FiChevronsLeft className={style.ii} onClick={m_pager}  /></span>
            <span>
                <p className={style.page}>{filter.page}</p>
            </span>
            <span style={{marginLeft:'0%'}} className={style.btn}> <FiChevronsRight className={style.ii}  onClick={p_pager}  /></span>
        </div>
    );
};

export default DownNav;