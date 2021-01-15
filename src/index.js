import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, subscribe, updateNewPostText} from "./redux/State";
import ReactDOM from 'react-dom';
import App from './App';

export let renderEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireThree(state);

subscribe(renderEntireThree);

reportWebVitals();
