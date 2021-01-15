import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/ReduxStore";
import ReactDOM from 'react-dom';
import App from './App';

export let renderEntireThree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireThree();

store.subscribe(renderEntireThree);

reportWebVitals();
