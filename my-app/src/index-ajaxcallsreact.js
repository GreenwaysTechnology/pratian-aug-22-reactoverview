// life cycle hooks : mount -componentDidMount,update,unmount
//life cycles hooks inside functional component is given via "hooks" - useEffect(didMount and didUpdate)

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'

const API = {
    getAllTodos(url) {
        return fetch(url)
    }
}
export const Todos = props => {

    const [state, setState] = useState({
        error: null,
        isLoaded: false, //spiner status
        todos: [] // data
    })

    useEffect(() => {
        //we write all async code : ajax calls,timers,websockets
        //react has no opinion on what ajax lib we use : fetch,axios
        API.getAllTodos('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                return response.json()
            }).then(todos => {
                // console.log(todos)
                //setState()
                // setState(prevState => ({ ...prevState, todos: prevState.todos.concat(todos), isLoaded: true }))
                setTimeout(() => {
                    setState(prevState => ({ ...prevState, todos: prevState.todos.concat(todos), isLoaded: true }))
                }, 5000)

            })
            .catch(err => {
                setState(prevState => ({ ...prevState, isLoaded: true, error: err }))
            });

    }, [])

    const { error, isLoaded, todos } = state;
    if (error) {
        return <Error error={error} />
    } else if (!isLoaded) {
        return <Spinner />
    } else {
        return <TodoList todos={todos} />
    }

}
const TodoList = props => {
    const { todos } = props
    return <ul className="list-group">
        {todos.map((todo, index) => (
            <li key={index}>
                <span className="badge badge-pill badge-primary">
                    {todo.id}
                </span>
                <span>
                    {todo.title}
                </span>
            </li>
        ))}
    </ul>
}
const Error = props => {
    return <>
        <h2>{props.error}</h2>
    </>
}
const Spinner = props => {
    return <>
        <h2 style={{ backgroundColor: 'yellow' }}>Loading...</h2>
    </>
}



const App = () => {
    return <div className="container">

        <Todos />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


