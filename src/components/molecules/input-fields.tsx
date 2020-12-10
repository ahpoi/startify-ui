import * as React from "react";

import { FieldErrorMessage, FieldLabel, Input, Label, Select, TextArea, TextAreaProps } from "../..";

type Props = {
  label: string;
  star?: boolean;
  error?: string | null;
};

type TextInputFieldProps = Props &
  TextAreaProps &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const TextInputField = (props: TextInputFieldProps) => {
  const { label, star, error } = props;
  return (
    <div>
      <FieldLabel id={props.id} htmlFor={props.id} star={star} children={label} />
      {error && <FieldErrorMessage>{error}</FieldErrorMessage>}
      <Input {...props} />
    </div>
  );
};
type TextAreaFieldProps = Props &
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

export type FieldOption = {
  label: string;
  value: string;
};

export type SelectFieldProps = {
  options: FieldOption[];
  defaultOption?: FieldOption;
} & Props &
  React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

export const SelectField = (props: SelectFieldProps) => {
  const { label, star, error, options, defaultOption } = props;
  return (
    <div>
      <FieldLabel id={props.id} htmlFor={props.id} star={star} children={label} />
      {error && <FieldErrorMessage>{error}</FieldErrorMessage>}
      <Select error={error} {...props}>
        {defaultOption && <option value={defaultOption.value}>{defaultOption.label}</option>}
        {options.map((v) => (
          <option key={v.value} value={v.value}>
            {v.label}
          </option>
        ))}
      </Select>
    </div>
  );
};

type RadioGroupFieldProps = {
  options: FieldOption[];
  selectedValue?: string;
} & Props;

export const RadioGroupField = (
  props: RadioGroupFieldProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) => {
  const { label, star, error, options, selectedValue } = props;
  return (
    <div>
      <FieldLabel id={props.id} htmlFor={props.id} star={star} children={label} />
      {error && <FieldErrorMessage>{error}</FieldErrorMessage>}
      {options.map(({ label, value }) => (
        <Label id={props.id + "-" + value} key={props.id + "-" + value} style={{ fontWeight: 400, lineHeight: "24px" }}>
          <Input
            id={props.id + "-" + value}
            value={value}
            type={"radio"}
            checked={value === selectedValue}
            style={{ width: "auto", height: "auto", marginRight: "10px" }}
            {...props}
          />
          {label}
        </Label>
      ))}
    </div>
  );
};
