import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';

import './App.css';

function App() {

    const [loaderVisible, setLoaderVisible] = useState(false);



    return (
        <div className="App">
            <h1>CSSTRANSITION</h1>
            <button onClick={() => setLoaderVisible(!loaderVisible)}>{loaderVisible ? "hide" : "show"}</button>
            <div className="wrap">
                <CSSTransition
                    in={loaderVisible}
                    timeout={500}
                    mountOnEnter
                    unmountOnExit
                    classNames={{
                        enterActive: 'circle-show',
                        enterDone: 'circle-rotate',
                        exitActive: 'circle-hide',
                    }}
                >
                    <div className="circle"></div>
                </CSSTransition>
            </div>

        </div>
    );
}

export default App;
