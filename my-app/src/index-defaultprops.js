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
    // const profile = {

    // }

    return <ProfileDetails profile={profile} />
}





export const ProfileDetails = props => {
    console.log('profile details ', props)
    return <div className="container">
        <h1>Profile Details</h1>
        <p>Id : {props.profile.id}</p>
        <p>Name : {props.profile.name}</p>
        <Address address={props.profile.address} />
        <Skills skills={props.profile.skills} />
    </div>
}
//default Props :
ProfileDetails.defaultProps = {
    id: 0,
    name: '',
    address: {
        city: ''
    },
    skills: ['skill1', 'skill2']

}
export const Address = props => {
    // console.log(props)
    return <address>
        City :  {props.address.city}
    </address>
}
Address.defaultProps = {
    address: {
        city: 'default City'
    }
}
export const Skills = props => {
    //map function 
    return <ul>
        {props.skills.map(skill => {
            return <li>{skill}</li>
        })}
    </ul>
}
Skills.defaultProps = {
    skills: ['skill1', 'skill2']
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

















