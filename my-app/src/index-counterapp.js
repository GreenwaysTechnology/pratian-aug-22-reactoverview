import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'

/**
 * 
 *component = {state,stateMutation logic,userinterface}
  component = only ui => presentational component - presentational
  component = logic=>container components -parent 
   
 */

export const Counter = props => {

    //state declaration: using hooks
    const [counter, setCounter] = useState({ value: 0 })
    //listener
    const onIncrement = () => {
        setCounter(oldState => ({ ...oldState, value: oldState.value + 1 }))
    }
    return <CounterDisplay counter={counter} onIncrement={onIncrement} />
}

//presentational component
export const CounterDisplay = props => {
    return <div className="container">
        <h1>Counter App</h1>
        {/* state as prop : dynamic prop */}
        <h2>{props.counter.value}</h2>
        {/* function as prop */}
        <button onClick={props.onIncrement}>+</button>
    </div>
}


const App = () => {
    return <Counter />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
