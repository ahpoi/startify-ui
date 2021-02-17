import * as React from "react";
import styled, { css } from "styled-components";
import { addTooltipIfAny, Tooltip } from "../../atoms/tooltip";
import { useColorScheme } from "../../../theme/styles/hooks";

type FieldProps = {
  id?: string;
  htmlFor?: string;
  star?: boolean;
  tooltip?: React.ReactElement<typeof Tooltip>;
  children: React.ReactNode;
};

export const FieldLabel = (props: FieldProps) => {
  const star = props.star && <span style={{ color: "red", marginLeft: "1px", fontWeight: 200 }}>*</span>;
  return addTooltipIfAny(
    <Label id={props.id} htmlFor={props.htmlFor}>
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
    <Legend id={props.id} htmlFor={props.htmlFor}>
      {props.children} {star}
    </Legend>,
    props.tooltip
  );
};

export const FieldErrorMessage = styled.div.attrs({
  "aria-live": "assertive",
  "aria-atomic": "true",
})`
  font-size: ${({ theme }) => theme.components.fieldErrorMessage.base.fontSize};
  font-weight: ${({ theme }) => theme.components.fieldErrorMessage.base.fontWeight};
  color: ${({ theme }) => useColorScheme(theme.components.fieldErrorMessage.base.color)};
  line-height: ${({ theme }) => theme.components.fieldErrorMessage.base.lineHeight};
  transition: color 0.2s;
`;

const baseLabelCss = css`
  font-size: ${({ theme }) => theme.components.fieldLabel.base.fontSize};
  font-weight: ${({ theme }) => theme.components.fieldLabel.base.fontWeight};
  color: ${({ theme }) => theme.components.fieldLabel.base.color};
  line-height: ${({ theme }) => theme.components.fieldLabel.base.lineHeight};
  display: block;
`;

export const Label = styled.label`
  ${baseLabelCss}
` as React.FunctionComponent<
  React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> & FieldProps
>;

export const Legend = styled.legend`
  ${baseLabelCss}
` as React.FunctionComponent<FieldProps>;
