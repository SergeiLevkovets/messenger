import './App.css';
import Navbar from "./componets/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import React from "react";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileConteiner";
import HeaderContainer from "./componets/Header/HeaderContainer";
import LoginContainer from "./componets/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/AppReducer";
import Preloader from "./componets/common/preloader/Preloader";
import store from "./redux/ReduxStore";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?'><ProfileContainer/></Route>
                    <Route path='/dialogs'><DialogsContainer/></Route>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/users'><UsersContainer/></Route>
                    <Route path='/loginName'><LoginContainer/></Route>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.appStore.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const MessengerApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MessengerApp


