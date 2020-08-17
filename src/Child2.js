import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer'
// import counterReducer from './CounterReducer';
const Child2 = ()=>{

    let [state, dispatch] = useReducer(CounterReducer,0)

    console.log(state);
    return(
        <div>
                <h3>Value of Reducer state is using CounterReducer: {state}</h3>
                <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    )
}

export default Child2;