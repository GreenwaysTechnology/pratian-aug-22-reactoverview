import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

export const Profile = props => {
    //object 
    const profile = {
        id: 1,
        name: 'Subramanian',
        address: {
            city: 'Coimbatore'
        },
        skills: ['Javascript', 'React', 'Microservices']
    }

    return <ProfileDetails profile={profile} />
}

export const ProfileDetails = props => {
    return <div className="container">
        <h1>Profile Details</h1>
        <p>Id : {props.profile.id}</p>
        <p>Name : {props.profile.name}</p>
        <Address address={props.profile.address} />
        <Skills skills={props.profile.skills} />
    </div>
}
export const Address = props => {
    console.log(props)
    return <address>
        City :  {props.address.city}
    </address>
}
export const Skills = props => {
    //map function 
    return <ul>
        {props.skills.map(skill => {
            return <li>{skill}</li>
        })}
    </ul>
}

const App = () => {
    return <Profile />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

















