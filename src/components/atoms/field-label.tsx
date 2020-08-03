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
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.error};
`;

const StyledLabel = styled.label<{ error?: boolean }>`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme, error }) => (error ? theme.color.error : theme.color.textDark)};
`;
