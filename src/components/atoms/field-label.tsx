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
  return <Label id={props.id} htmlFor={props.htmlFor} error={props.error}>{props.children} {star}</Label>;
};

export const FieldErrorMessage = styled.div`
  font-size: ${({ theme }) => (theme.typography.text.medium)};
  font-weight: 400;
  color: ${({ theme }) => theme.color.error};
  line-height: 24px;
  transition: color .2s;
`;

const Label = styled.label<{ error?: boolean }>`
  font-size: ${({ theme }) => (theme.typography.text.medium)};
  font-weight: 400;
  color: ${({ theme, error }) => (error ? theme.color.error : theme.color.textDark)};
  line-height: 24px;
`;