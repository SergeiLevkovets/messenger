import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/newMessageForm/FormControl";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'email'} name={'email'} component={Input} validate={[required]}/></div>
            <div><Field placeholder={'Password'} name={'password'} component={Input} validate={[required]}/></div>
            <div><Field type={'checkbox'} name={"rememberMe"} component={Input}/></div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'loginForm'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (value) => {
        props.doLogin(value.email, value.password, value.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;