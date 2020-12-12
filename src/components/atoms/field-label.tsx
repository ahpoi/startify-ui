import * as React from "react";
import styled from "styled-components";

interface FieldProps {
  id?: string;
  htmlFor?: string;
  star?: boolean;
  error?: boolean;
  children: React.ReactNode;
}

export const FieldLabel = (props: FieldProps) => {
  const star = props.star && <span style={{ color: "red", marginLeft: "1px", fontWeight: 200 }}>*</span>;
  return (
    <Label id={props.id} htmlFor={props.htmlFor} error={props.error}>
      {props.children} {star}
    </Label>
  );
};

export const FieldSet = (props: { id?: string; children: React.ReactNode }) => (
  <fieldset style={{ border: "none", padding: 0 }} {...props}>
    {props.children}
  </fieldset>
);

export const FieldLegend = (props: FieldProps) => {
  const star = props.star && <span style={{ color: "red", marginLeft: "1px", fontWeight: 200 }}>*</span>;
  return (
    <Legend id={props.id} htmlFor={props.htmlFor} error={props.error}>
      {props.children} {star}
    </Legend>
  );
};

export const FieldErrorMessage = styled.div.attrs({
  "aria-live": "assertive",
  "aria-atomic": "true",
})`
  font-size: ${({ theme }) => theme.typography.text.medium};
  font-weight: 400;
  color: ${({ theme }) => theme.color.error};
  line-height: 24px;
  transition: color 0.2s;
`;

export const Label = styled.label<{ error?: boolean }>`
  font-size: ${({ theme }) => theme.typography.text.medium};
  font-weight: 500;
  color: ${({ theme, error }) => (error ? theme.color.error : theme.color.textDark)};
  line-height: 30px;
` as React.FunctionComponent<
  React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> & FieldProps
>;

export const Legend = styled.legend<{ error?: boolean }>`
  font-size: ${({ theme }) => theme.typography.text.medium};
  font-weight: 500;
  color: ${({ theme, error }) => (error ? theme.color.error : theme.color.textDark)};
  line-height: 30px;
` as React.FunctionComponent<FieldProps>;
