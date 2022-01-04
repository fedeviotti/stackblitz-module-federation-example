import * as React from 'react';

interface FilterProps {
    project: string;
}

const Filter: React.FC<FilterProps> = ({project}) => {
    return (<div style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"blueviolet"
    }}>
        <h1>Filters - {project}</h1>
    </div>)
}

export default Filter;
