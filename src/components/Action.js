import React from 'react';

const Action = (props)=>{
    return(
    <button disabled={!props.hasOptions} onClick={props.randomPick}>What should I do?</button>
    );
};

export default Action;
