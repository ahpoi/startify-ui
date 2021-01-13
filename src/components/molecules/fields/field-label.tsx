import * as React from "react";
import styled from "styled-components";
import { addTooltipIfAny, Tooltip } from "../../atoms/tooltip";

type FieldProps = {
  id?: string;
  htmlFor?: string;
  star?: boolean;
  error?: boolean;
  tooltip?: React.ReactElement<typeof Tooltip>;
  children: React.ReactNode;
};

export const FieldLabel = (props: FieldProps) => {
  const star = props.star && <span style={{ color: "red", marginLeft: "1px", fontWeight: 200 }}>*</span>;
  return addTooltipIfAny(
    <Label id={props.id} htmlFor={props.htmlFor} error={props.error}>
      {props.children} {star}
    </Label>,
    props.tooltip
  );
};

export const FieldSet = (props: { id?: string; children: React.ReactNode }) => (
  <fieldset style={{ border: "none", padding: 0 }} {...props}>
    {props.children}
  </fieldset>
);

export const FieldLegend = (props: FieldProps) => {
  const star = props.star && <span style={{ color: "red", marginLeft: "1px", fontWeight: 200 }}>*</span>;
  return addTooltipIfAny(
    <Legend id={props.id} htmlFor={props.htmlFor} error={props.error}>
      {props.children} {star}
    </Legend>,
    props.tooltip
  );
};

export const FieldErrorMessage = styled.div.attrs({
  "aria-live": "assertive",
  "aria-atomic": "true",
})`
  font-size: ${({ theme }) => theme.typography.size.md};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.red["500"]};
  line-height: 24px;
  transition: color 0.2s;
`;

export const Label = styled.label<{ error?: boolean }>`
  font-size: ${({ theme }) => theme.typography.size.md};
  font-weight: 500;
  color: ${({ theme, error }) => (error ? theme.colors.red["500"] : theme.typography.color.body.dark)};
  line-height: 30px;
` as React.FunctionComponent<
  React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> & FieldProps
>;

export const Legend = styled.legend<{ error?: boolean }>`
  font-size: ${({ theme }) => theme.typography.size.md};
  font-weight: 500;
  color: ${({ theme, error }) => (error ? theme.colors.red["500"] : theme.typography.color.body.dark)};
  line-height: 30px;
` as React.FunctionComponent<FieldProps>;
