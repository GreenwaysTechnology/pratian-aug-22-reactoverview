//component tree 
/**
 * <div> -page 
 *    <header></header> - header
 *    <div> - main 
 *      <section></section>
 *      <section></section>
 *    </div>
 *   <footer></footer> - footer
 * </div>
 */
import React from "react";
import ReactDOM from 'react-dom/client';

const Header = () => <header>
    <h1>Company Header</h1>
</header>
const Footer = () => <footer>
    <h2>Footer</h2>
</footer>
const Main = () => <div>
    <section>
        <p>This is main</p>
    </section>
</div>

const Page = () => <div>
    <Header />
    <Main />
    <Footer />
</div>

const App = () => <Page />

//rendering the HelloWorld into browser 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>)
