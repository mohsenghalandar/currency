import React from 'react';
import { FiChevronsLeft,FiChevronsRight} from "react-icons/fi";

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
        <div>
            <FiChevronsLeft onClick={m_pager} />
                {filter.page}
            <FiChevronsRight onClick={p_pager}  />
        </div>
    );
};

export default DownNav;