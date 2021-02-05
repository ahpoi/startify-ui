import { FieldProps } from "./field.types";
import * as React from "react";
import { FieldErrorMessage, FieldLabel, Select } from "../../..";
import { FieldContentContainer } from "./base-fields";

export type FieldOption = {
  label: string;
  value: string;
};

export type SelectFieldProps = {
  options: FieldOption[];
  defaultOption?: FieldOption;
} & FieldProps &
  React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

export const SelectField = React.forwardRef((props: SelectFieldProps, ref: React.LegacyRef<HTMLSelectElement>) => {
  const { label, star, error, tooltip, options, defaultOption } = props;
  const getForwardProps = () => {
    const { label, star, tooltip, options, defaultOption, ...propsToForward } = props;
    return propsToForward;
  };
  return (
    <FieldContentContainer>
      <FieldLabel htmlFor={props.id} star={star} tooltip={tooltip} children={label} />
      <Select error={error} {...getForwardProps()} ref={ref}>
        {defaultOption && <option value={defaultOption.value}>{defaultOption.label}</option>}
        {options.map((v) => (
          <option key={v.value} value={v.value}>
            {v.label}
          </option>
        ))}
      </Select>
      {error && <FieldErrorMessage>{error}</FieldErrorMessage>}
    </FieldContentContainer>
  );
});
