import React from "react";
import { Field } from "redux-form";
import classes from "./FormControl.module.css";

const FormControl = ({
  input,
  meta: { touched, error },
  children,
  ...props
}) => {
  const hasError = touched && error;
  return (
    <div className={classes.FormControl + "" + hasError ? classes.error : ""}>
      <div>{props.children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const TextArea = props => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = props => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ""
) => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      component={component}
      validate={validators}
      {...props}
    />
    {text}
  </div>
);
