import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/ReduxStore";
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "./StoreContext";
import {BrowserRouter} from "react-router-dom";

export let renderEntireThree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireThree();

store.subscribe(renderEntireThree);

reportWebVitals();
