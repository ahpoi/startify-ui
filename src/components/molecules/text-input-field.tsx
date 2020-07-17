import {Field} from "../atoms/field";
import * as React from "react";
import {InputProps, TextInput} from "../..";

export type TextInputFieldProps = InputProps

export const TextInputField = (props: TextInputFieldProps) =>
    <Field id={props.id} label={props.label} star={props.star} error={props.error}>
      <TextInput {...props}/>
    </Field>;
