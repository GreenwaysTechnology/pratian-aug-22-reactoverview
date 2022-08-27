import React from "react";
import ReactDOM from 'react-dom/client';

//define component using variable
const HelloWorld = <h1>Hello React!</h1>

//rendering the HelloWorld into browser 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(HelloWorld)
