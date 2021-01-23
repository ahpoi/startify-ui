import * as React from "react";
import { FieldErrorMessage, FieldLegend, FieldSet, Input, InputProps, Label } from "../../../index";
import { FieldProps } from "./field.types";
import styled from "styled-components";
import { Vertical } from "../../../../lib";

export const RadioFieldGroup = (
  props: {
    id?: string;
    children: React.ReactNode;
  } & FieldProps
) => (
  <FieldSet id={props.id}>
    <Vertical spacing={4}>
      <FieldLegend id={props.id} htmlFor={props.id} star={props.star} tooltip={props.tooltip} children={props.label} />
      <div>{props.children}</div>
      {props.error && <FieldErrorMessage>{props.error}</FieldErrorMessage>}
    </Vertical>
  </FieldSet>
);

export const RadioField = React.forwardRef(
  (
    props: { label: string } & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    ref: React.LegacyRef<HTMLInputElement>
  ) => (
    <RadioLabel id={props.id}>
      <RadioInput type={"radio"} {...props} ref={ref} />
      {props.label}
    </RadioLabel>
  )
);

const RadioInput = styled(Input)`
  width: auto;
  height: auto;
  margin-right: 10px;
  &:focus:enabled {
    outline: dotted thin;
  }
` as React.FunctionComponent<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & InputProps
>;

const RadioLabel = styled(Label)`
  font-weight: 400;
  line-height: 24px;

  display: flex;
  flex-direction: row;
  align-items: baseline;
`;
