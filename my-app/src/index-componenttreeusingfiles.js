import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//webpack syntax of import static assets-css,images,documents
// import './index.css';
import 'bootstrap/dist/css/bootstrap.css'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);