import './App.css';
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import Profile from "./componets/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import React from "react";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile'><Profile /></Route>
                <Route path='/dialogs'><DialogsContainer /></Route>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/users' ><UsersContainer /></Route>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
