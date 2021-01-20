import './App.css';
import Navbar from "./componets/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import React from "react";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileConteiner";
import HeaderContainer from "./componets/Header/HeaderContainer";
import LoginPage from "./componets/Login/Login";

const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?'><ProfileContainer /></Route>
                <Route path='/dialogs'><DialogsContainer /></Route>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/users' ><UsersContainer /></Route>
                <Route path='/login' ><LoginPage/></Route>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
