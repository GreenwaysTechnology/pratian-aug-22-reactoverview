import React from "react";
import ReactDOM from 'react-dom/client';


class HelloWorld extends React.Component {

    render() {
        return <h1>Hello React!!</h1>
    }
}

//rendering the HelloWorld into browser 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HelloWorld />)
