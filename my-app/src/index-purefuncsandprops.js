import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Greeter = props => {
   //what if i modify the input props 
   //props are read only.
    //props.name = 'foo'

    return <h1>{props.message} {props.name}</h1>
}
const App = () => {
    return <Greeter message="Hello" name="Subramanian" />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

















