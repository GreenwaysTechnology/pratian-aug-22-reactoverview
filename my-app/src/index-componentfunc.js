import React from "react";
import ReactDOM from 'react-dom/client';

//define component using functions
// function HelloWorld(){
//     return <h1>Hello React</h1>
// }
// const HelloWorld = () => {
//     return <h1>Hello React</h1>
// }
const HelloWorld = () => <h1>Hello React</h1>

//rendering the HelloWorld into browser 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HelloWorld />)
