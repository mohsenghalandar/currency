import React from 'react';
import { FiChevronUp,FiChevronDown} from "react-icons/fi";
const Title = () => {
    return (
        <div>
            <button>Rank<FiChevronDown /></button>
            <button>name<FiChevronDown /></button>
            <button>price<FiChevronDown /></button>
            <button>total supply</button>
            <button>chnageing <FiChevronDown /></button>
            <button>max value</button>
            <button>min value</button>
        </div>
    );
};

export default Title;