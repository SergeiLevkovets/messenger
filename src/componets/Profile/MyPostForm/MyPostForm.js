import React from 'react';
import {Field, reduxForm} from "redux-form";

const MyPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'My post'} component={"textarea"}/></div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}



const My = (props) => {
    const onSubmit = (formData) => {

    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
