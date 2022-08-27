import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//fragements are invisible container element.
//fragments are used to avoid uncessary root element.
// const Greeter = props => {
//     return <div>
//         <p>Name : {props.name}</p>
//         <p>Message : {props.message}</p>
//     </div>
// }
// const Greeter = props => {
//     return <React.Fragment>
//         <p>Name : {props.name}</p>
//         <p>Message : {props.message}</p>
//     </React.Fragment>
// }
// const Greeter = props => {
//     return <Fragment>
//         <p>Name : {props.name}</p>
//         <p>Message : {props.message}</p>
//     </Fragment>
// }
const Greeter = props => {
    return <>
        <p>Name : {props.name}</p>
        <p>Message : {props.message}</p>
    </>
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

















