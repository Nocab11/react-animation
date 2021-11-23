import React, {useState, useEffect} from 'react';
import { Transition } from 'react-transition-group';

import './App.css';

function App() {

    const [loaderVisible, setLoaderVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaderVisible(true), 1000);
        setTimeout(() => setLoaderVisible(false), 5000);
    }, [])

    return (
        <div className="App">
            <button onClick={() => setLoaderVisible(!loaderVisible)}>{loaderVisible ? "hide" : "show"}</button>
            <div className="wrap">
                <Transition
                    in={loaderVisible}
                    timeout={500}
                    mountOnEnter
                    unmountOnExit
                    onEnter={() => console.log('onEnter')}
                    onEntering={() => console.log('onEntering')}
                    onEntered={() => console.log('onEntered')}
                    onExit={() => console.log('onExit')}
                    onExiting={() => console.log('onExiting')}
                    onExited={() => console.log('onExited')}
                >
                    {state => <div className={`circle ${state}`}></div>}
                </Transition>

            </div>

        </div>
    );
}

export default App;
