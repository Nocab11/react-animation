import React, {useState} from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './App.css';

function App() {

    const [text, setText] = useState('');

    const [todoList, setTodoList] = useState([
        {
            id: 1,
            text: 'Text one'
        },
        {
            id: 2,
            text: 'Text two'
        },
        {
            id: 3,
            text: 'Text three'
        }
    ])

    const addTodo = () => {
        setTodoList([...todoList, {id: Date.now(), text}])
    }

    return (
        <div className="App">
            <div>
                <input onChange={e => setText(e.target.value)} value={text} type="text"/>
                <button onClick={addTodo}>Добавить</button>
            </div>
            <TransitionGroup component='ul'>
                {todoList.map(({id, text}) =>
                    <CSSTransition key={id} timeout={500} classNames='todo'>
                        <li className="todo" >
                            {id} {text}
                            <button onClick={() => setTodoList([...todoList.filter(todo => todo.id !== id)])}>X</button>
                        </li>

                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
}

export default App;
