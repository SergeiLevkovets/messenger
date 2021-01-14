import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DialogItem from "./componets/Dialogs/DialogItem/DialogItem";
import Message from "./componets/Dialogs/Message/Message";
import Post from "./componets/Profile/Post/Post";

let dialogs = [
    {id: 1, name: 'Sergei'},
    {id: 2, name: 'Dimych'},
    {id: 3, name: 'Andrei'},
    {id: 4, name: 'Sergei'},
]

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'Hi'},
    {id: 4, message: 'How are you?'},
]

let posts = [
    {id: 1, message: 'Hi. how are you?', likesCount: 15},
    {id: 2, message: 'It\'s my first post in this messenger', likesCount: 100}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
