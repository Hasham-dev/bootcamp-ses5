import React, { useContext } from 'react';
import CounterContext from './CounterContext';


const Child = (props) => {
    let counterValue = useContext(CounterContext);
    console.log(counterValue);
    return (
        <div>
            <h2>This is first Child Using CounterContext</h2>
            <h2>The Counter Context value is {counterValue[0]}</h2>

            <button onClick={()=>{counterValue[1](++counterValue[0])}}>Increment Context</button>
        </div>
    )
}

export default Child;