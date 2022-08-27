import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'

//state: object
class Counter extends React.Component {

    //data : state 
    state = {
        counter: 0 //inital counter
    }
    //listener : arrow function 
    onIncrement = () => {
        //mutate the state
        //setState method
        this.setState((oldState) => {
            //immutable object
            // return {
            //     counter: oldState.counter + 1
            // }
            //return Object.assign({}, oldState, { counter: oldState.counter + 1 })
            return { ...oldState, counter: oldState.counter + 1 }
        })
    }

    render() {
        return <div className="container">
            <h1>Counter App</h1>
            <h2>{this.state.counter}</h2>
            <button onClick={this.onIncrement}>+</button>
        </div>
    }
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
