import css from "./FormControl.module.css";
import React from "react";

 const FormControl = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={css.formControl + " " + (hasError? css.error : "") }>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
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