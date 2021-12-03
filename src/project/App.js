import React, {useState} from 'react';
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import List from "./components/List";
import useDebounce from "./hooks/useDebounce";
import Request from "./components/Request";

function App() {
    const userName = useInput('')
    const password = useInput('')

    const [value, setValue] = useState();
    const debouncedSearch = useDebounce(search, 500)
    function search(query) {
        fetch(`https://jsonplaceholder.typicode.com/todos?query=`+query)
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
    }

    const handlerChange = (e) => {
        setValue(e.target.value)
        debouncedSearch(e.target.value)
    }

    return (
        <div className="App">
            <h1>Это Сашка вредная</h1>
            <div style={{ display: 'flex', borderRadius: '50%', background: 'red'}}>

            </div>
            <h2>Хук useInput</h2>
            <input {...userName} type="text" name="userName"/>
            <input {...password} type="text" name="password"/>
            <button onClick={() => console.log(userName.value, password.value)}>
                Click
            </button>
            <h2>Хук useHover</h2>
            <Hover />
            <h2>Хук useDebounce</h2>
            <div>
                <input type="text" value={value} onChange={handlerChange}/>
            </div>
            <h2>Хук useRequest</h2>
                <Request />
            <h2>Хук useScroll</h2>
            <div>
                <List />
            </div>
        </div>
    );
}

export default App;
