/**
 * data and react:
 *  data can be primitives(numbers,strings,boolean),objects,arrays
 * data can be supplied in two ways
 *  -props pattern
 *  -state pattern 
 */
//props -property pattern
/**
 * data for the component is supplied from outside the component we call as props pattern.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// function Greeter(props) {
//     console.log(props)
//     return <h2>{props.message} {props.name}</h2>
// }
// const Greeter = props => <h2>{props.message} {props.name}</h2>
const Greeter = ({ message, name }) => <h2>{message} {name}</h2>

const App = () => {
    //return Greeter('Hello')
    //message= property
    return <Greeter message="Hello" name="Subramanian" />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

















