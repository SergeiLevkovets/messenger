import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/State";
import ReactDOM from 'react-dom';
import App from './App';

export let renderEntireThree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
            {/*<App state={store.getState()} addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>*/}
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireThree();

store.subscribe(renderEntireThree);

reportWebVitals();
