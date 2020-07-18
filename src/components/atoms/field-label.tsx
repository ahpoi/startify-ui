import * as React from "react";
import styled from "styled-components";

interface FieldLabelProps {
  id?: string,
  htmlFor?: string,
  star?: boolean,
  error?: boolean;
  children: React.ReactNode
}

export const FieldLabel = (props: FieldLabelProps) => {
  const star = props.star && <span style={{ color: "red", marginLeft: "1px", fontWeight: 200 }}>*</span>;
  return <StyledLabel id={props.id} htmlFor={props.htmlFor} error={props.error}>{props.children} {star}</StyledLabel>;
};

export const FieldErrorMessage = styled.div`
  font-size: ${({ theme }) => theme.input.label.fontSizeError};
  font-weight: ${({ theme }) => theme.input.label.fontWeightError};
  color: ${({ theme }) => theme.input.label.colorError};
`;

const StyledLabel = styled.label<{ error?: boolean }>`
  font-size: ${({ theme }) => theme.input.label.fontSize};
  font-weight: ${({ theme }) => theme.input.label.fontWeight};
  color: ${({ theme, error }) => (error ? theme.input.label.colorError : theme.input.label.color)};
`;
