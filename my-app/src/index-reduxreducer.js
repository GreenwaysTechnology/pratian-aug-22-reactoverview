import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
/**
 * 
 * store : object to store app state and facilate the work flow between react and redux
 * reducer: function which is pure function, returns immutable object 
 * actions: objects which carries request payload
 * dispatchers: function which dispatch actions to redux store 
 */

//redux

//reducer has state mutation logic
const counterReducer = (state = { counter: 10 }, action) => {
    console.log('called')
    switch (action.type) {
        case 'counter/increment':
            //immutable logic 
            return { ...state, counter: state.counter+1 }

        default:
            return state;
    }
}

const store = createStore(counterReducer)


export const Counter = props => {

    //Get redux state :filter/ get data from the redux
    const counter = useSelector(state => state.counter)
    //Get dispatcher 
    const dispatch = useDispatch()

    const onIncrement = () => {
        dispatch({ type: 'counter/increment' })
    }
    //return <CounterDisplay counter={counter} onIncrement={onIncrement} />
    return <>
        <h1>React redux</h1>
        <h2>Counter {counter}</h2>
        <button onClick={onIncrement}>+</button>
    </>

}




const App = () => {
    return <Provider store={store}>
        <Counter />
    </Provider>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
