import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import { combineReducers, createStore } from 'redux';
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
const incrementReducer = (state = { counter: 10 }, action) => {
    console.log('called')
    switch (action.type) {
        case 'counter/increment':
            //immutable logic 
            return { ...state, counter: state.counter + 1 }

        default:
            return state;
    }
}
const decrementReducer = (state = { counter: 10 }, action) => {
    console.log('called')
    switch (action.type) {
        case 'counter/decrement':
            //immutable logic 
            return { ...state, counter: state.counter - action.payload }

        default:
            return state;
    }
}
const rootReducer = combineReducers({
    increment: incrementReducer,
    decrement: decrementReducer
})
const store = createStore(rootReducer)

export const Increment = props => {

    //Get redux state :filter/ get data from the redux
    //state.reducerName.value
    const counter = useSelector(state => state.increment.counter)
    //Get dispatcher 
    const dispatch = useDispatch()

    const onIncrement = () => {
        dispatch({ type: 'counter/increment' })
    }
    //return <CounterDisplay counter={counter} onIncrement={onIncrement} />
    return <>
        <h1>Incrementer</h1>
        <h2>Counter {counter}</h2>
        <button onClick={onIncrement}>+</button>
    </>

}

export const Decrement = props => {

    //Get redux state :filter/ get data from the redux
    const counter = useSelector(state => state.decrement.counter)

    //Get dispatcher 
    const dispatch = useDispatch()

    const onDecrement = () => {
        dispatch({ type: 'counter/decrement', payload: 10 })
    }
    //return <CounterDisplay counter={counter} onIncrement={onIncrement} />
    return <>
        <h1>Decrement</h1>
        <h2>Counter {counter}</h2>
        <button onClick={onDecrement}>-</button>
    </>

}


const App = () => {
    return <Provider store={store}>
        <Increment />
        <Decrement />
    </Provider>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
