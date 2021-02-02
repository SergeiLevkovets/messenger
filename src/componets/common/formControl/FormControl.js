import css from "./FormControl.module.css";
import React from "react";
import {Field} from "redux-form";

const FormControl = ({meta: {touched, error}, children}) => {

    const hasError = touched && error;

    return (
        <div className={css.formControl + " " + (hasError ? css.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )

}

export const Textarea = (props) => {
    const {input, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const CreateField = (placeholder, name, validators, component, props= {}, text = "") => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validators}
               {...props}/> {text}
    </div>
);