import * as React from "react";

import { FieldErrorMessage, FieldLabel, Input, TextArea, TextAreaProps } from "../../../index";
import { FieldProps } from "./field.types";
import { FieldContentContainer } from "./base-fields";

type TextInputFieldProps = FieldProps &
  TextAreaProps &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const TextInputField = React.forwardRef((props: TextInputFieldProps, ref: React.LegacyRef<HTMLInputElement>) => {
  const { label, star, tooltip, error } = props;
  const getForwardProps = () => {
    const { label, star, tooltip, ...propsToForward } = props;
    return propsToForward;
  };
  return (
    <FieldContentContainer>
      <FieldLabel htmlFor={props.id} star={star} tooltip={tooltip} children={label} />
      <Input {...getForwardProps()} ref={ref} />
      {error && <FieldErrorMessage>{error}</FieldErrorMessage>}
    </FieldContentContainer>
  );
});

type TextAreaFieldProps = FieldProps &
  TextAreaProps &
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export const TextAreaField = (props: TextAreaFieldProps) => {
  const { label, star, tooltip, error } = props;
  const getForwardProps = () => {
    const { label, star, tooltip, ...propsToForward } = props;
    return propsToForward;
  };
  return (
    <FieldContentContainer>
      <FieldLabel htmlFor={props.id} star={star} tooltip={tooltip} children={label} />
      <TextArea {...getForwardProps()} />
      {error && <FieldErrorMessage>{error}</FieldErrorMessage>}
    </FieldContentContainer>
  );
};
