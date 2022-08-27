import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//property rethrow - spread operator.

const ProfileMaster = props => {
    // property rethrow
    // return <ProfileDetails
    //     id={props.id}
    //     name={props.name}
    //     status={props.status}
    //     city={props.city} />
    //with spread operator
    return <ProfileDetails  {...props} title="Profile Details" />
}

const ProfileDetails = props => {

    return <div>
        <h1>{props.title}</h1>
        <h1>id {props.id}</h1>
        <h1>Name {props.name}</h1>
        <h1>City {props.city}</h1>
        <h1>Status {props.status ? "available" : "Not Available"}</h1>
    </div>

}

const App = props => {
    return <div>
        <ProfileMaster id={1} name="subramanian" status={true} city="coimbatore" />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

















