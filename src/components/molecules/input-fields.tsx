import * as React from "react";

import {FieldErrorMessage, FieldLabel, Input, TextArea, TextAreaProps} from "../..";

type Props = {
  label: string;
  star?: boolean;
  error?: string | null;
};

type TextInputFieldProps =
    Props
    & TextAreaProps
    & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const TextInputField = (props: TextInputFieldProps) => {
  const { label, star, error } = props;
  return (
      <div>
        <FieldLabel id={props.id} htmlFor={props.id} star={star} children={label}/>
        {error && <FieldErrorMessage>{error}</FieldErrorMessage>}
        <Input {...props} />
      </div>
  );
};
type TextAreaFieldProps =
    Props
    & TextAreaProps
    & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

export const TextAreaField = (props: TextAreaFieldProps) => {
  const { label, star, error } = props;
  return (
      <div>
        <FieldLabel id={props.id} htmlFor={props.id} star={star} children={label}/>
        {error && <FieldErrorMessage>{error}</FieldErrorMessage>}
        <TextArea {...props} />
      </div>
  );
};
