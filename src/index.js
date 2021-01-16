import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/ReduxStore";
import ReactDOM from 'react-dom';
import App from './App';
import StoreContext from "./StoreContext";
import {BrowserRouter} from "react-router-dom";

export let renderEntireThree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireThree();

store.subscribe(renderEntireThree);

reportWebVitals();
