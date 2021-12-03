import React from 'react';
import useRequest from "../hooks/useRequest";
import axios from "axios";

const Request = () => {

    const [todos, loading, error] = useRequest(fetchTodos);

    function fetchTodos() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos`)
    }

    if (loading) {
        return <h1>идет загрузка</h1>
    }
    if (error) {
        return <h1>Ошибка загрузки</h1>
    }

    return (
        <div>
            {todos && todos.map(todo =>
                <div key={todo.id} style={{padding: 30, border: '2px solid black'}}>
                    {todo.id}
                    <br/>
                    {todo.title}
                </div>
            )}

        </div>
    )
}

export default Request