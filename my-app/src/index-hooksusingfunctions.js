import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'

class Counter__ extends React.Component {
    state = {
        counter: 0 //inital counter
    }
    onIncrement = () => {
        this.setState((oldState) => {
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

//functional component:
const Counter = props => {

    //state declaration: using hooks
    const [counter, setCounter] = useState({ value: 0 })

    //listener
    const onIncrement = () => {
        // setCounter((oldState) => {
        //     return { ...oldState, value: oldState.value + 1 }
        // })
        setCounter(oldState => ({ ...oldState, value: oldState.value + 1 }))
    }

    return <div className="container">
        <h1>Counter App</h1>
        <h2>{counter.value}</h2>
        <button onClick={onIncrement}>+</button>
        {/* inline listener */}
        <button onClick={() => {
            setCounter((oldState) => {
                return { ...oldState, value: oldState.value + 1 }
            })
        }}>+</button>

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
