import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

class Profile extends React.Component {
    render() {
        return <ProfileDetails profile={{
            id: 1,
            name: 'Subramanian',
            address: {
                city: 'Coimbatore'
            },
            skills: ['Javascript', 'React', 'Microservices']
        }} />
    }
}
class ProfileDetails extends React.Component {

    render() {
        return <div className="container">
            < h1 > Profile Details</h1 >
            <p>Id : {this.props.profile.id}</p>
            <p>Name : {this.props.profile.name}</p>
        </div >
    }

}
//default Props
ProfileDetails.defaultProps = {
    profile: {
        id: 0,
        name: 'default'
    }
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

















