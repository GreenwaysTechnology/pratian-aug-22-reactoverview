//component as prop
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//composition can be done in two ways
//way-0
// const NavBar = props => {
//     return <nav>
//         <ul>
//             <li><a href="#">Admin</a></li>
//             <li><a href="#">ContactUs</a></li>
//             <li><a href="#">Profile</a></li>
//         </ul>
//     </nav>
// }
// const MenuBar = props => {
//     return <NavBar/>
// }
// const App = props => <div>
//     <MenuBar />
// </div>

//ways -1

const NavItems = props => <ul>
        <li><a href="#">Admin</a></li>
        <li><a href="#">ContactUs</a></li>
        <li><a href="#">Profile</a></li>
</ul>
const NavBar = props => {
    return <nav>
        {props.children}
    </nav>
}
const SearchBar = props => {
    return <section>
        <input type="search" />
    </section>
}
const MenuBar = props => {
    // return <NavBar/>
    return props.children

}
const App = props => <div>
    <MenuBar>
        <NavBar>
            <NavItems />
        </NavBar>
        <SearchBar />
    </MenuBar>
</div>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

















