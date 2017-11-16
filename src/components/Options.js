import React from 'react';
import Option from './Option';

const Options = (props)=>{
    return(
        <div>
        {props.options.length===0 && <p>Enter some options to store</p>}
        <button onClick={props.handelRemoveAll}>Remove All</button>
        {
            props.options.map((option)=> <Option key={option} optionText={option} handelRemoveOption={props.handelRemoveOption}/>)
        }
        </div>
    );
};

export default Options;