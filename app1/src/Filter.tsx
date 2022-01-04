import * as React from 'react';
import {FilterProps} from "../shared/types/";

const Filter: React.FC<FilterProps> = ({projectName}) => {
    return (<div style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"blueviolet"
    }}>
        <h1>Filters - {projectName}</h1>
    </div>)
}

export default Filter;
