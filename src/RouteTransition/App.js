import React from 'react';
import {  CSSTransition } from 'react-transition-group';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import './App.css';

function App() {

    const routes = [
        { path: '/', Component: Main },
        { path: '/about', Component: About }
    ]

    return (
        <BrowserRouter>
            <div className="App">
                <Link to="/" />
                <Link to="/about" />
            </div>
            {routes.map(({path, Component}) =>
                <Routes key={path}>
                    <Route path={path}>
                        {({match}) =>
                            <CSSTransition>
                                <Component />
                            </CSSTransition>
                        }
                    </Route>
                </Routes>

            )}
        </BrowserRouter>

    );
}

export default App;
