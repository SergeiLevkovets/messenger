import React from 'react';
import {Field, reduxForm} from "redux-form";
import {CreateField, Input} from "../common/formControl/FormControl";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import css from "./login.module.css"

const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            {CreateField('Email', 'email', [required], Input)}
            {CreateField('Password', 'password', [required], Input, {type: 'password'})}
            {CreateField(null, 'rememberMe', [], Input, {type: 'checkbox'}, "Remember me")}
            {error && <div className={css.formSummaryError}>{error}</div>}
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