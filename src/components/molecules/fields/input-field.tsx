import * as React from "react";

import { FieldErrorMessage, FieldLabel, Input, TextArea, TextAreaProps } from "../../../index";
import { FieldProps } from "./field.types";

type TextInputFieldProps = FieldProps &
  TextAreaProps &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const TextInputField = React.forwardRef((props: TextInputFieldProps, ref: React.LegacyRef<HTMLInputElement>) => {
  const { label, star, error } = props;
  return (
    <div>
      <FieldLabel id={props.id} htmlFor={props.id} star={star} children={label} />
      {error && <FieldErrorMessage>{error}</FieldErrorMessage>}
      <Input {...props} ref={ref} />
    </div>
  );
});

type TextAreaFieldProps = FieldProps &
  TextAreaProps &
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export const TextAreaField = (props: TextAreaFieldProps) => {
  const { label, star, error } = props;
  return (
    <div>
      <FieldLabel id={props.id} htmlFor={props.id} star={star} children={label} />
      {error && <FieldErrorMessage>{error}</FieldErrorMessage>}
      <TextArea {...props} />
    </div>
  );
};
