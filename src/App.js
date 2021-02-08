import React from "react";
import './App.css';
import store from "./redux/ReduxStore";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/AppReducer";
import Preloader from "./componets/common/preloader/Preloader";
import Settings from "./componets/Settings/Settings";
import Music from "./componets/Music/Music";
import News from "./componets/News/News";
import Navbar from "./componets/Navbar/Navbar";
import HeaderContainer from "./componets/Header/HeaderContainer";
import {withSuspense} from "./hoc/WithSuspense";

const DialogsContainer = React.lazy(() => import("./componets/Dialogs/DialogsContainer"))
const UsersContainer = React.lazy(() => import("./componets/Users/UsersContainer"))
const ProfileContainer = React.lazy(() => import("./componets/Profile/ProfileConteiner"))
const LoginContainer = React.lazy(() => import("./componets/Login/LoginContainer"))

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        /*if (!this.props.initialized) {
            return <Preloader/>
        }*/

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/initialValues/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/dialogs'render={withSuspense(DialogsContainer)}/>
                    <Route path='/users'render={withSuspense(UsersContainer)}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/loginName'render={withSuspense(LoginContainer)}/>
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
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MessengerApp


