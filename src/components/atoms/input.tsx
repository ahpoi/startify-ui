import * as React from "react";
import styled, {useTheme} from "styled-components";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string,
  name?: string,
  label?: string
  star?: boolean
  isInvalid?: boolean;
  error?: string;
}

export const InputField = (props: InputProps) =>
    <Field id={props.id} label={props.label} star={props.star} error={props.error}>
      <Input {...props}/>
    </Field>;

const Input = (props: InputProps) => {
  const errorClassName = props.isInvalid ? useTheme().input.base.classNameError : "";
  return <StyledInput {...props} className={errorClassName}/>;
};

const Field = (props: { id?: string, label?: string, star?: boolean, children: React.ReactNode, error?: string }) => {
  const star = props.star && <span style={{ color: "red", marginLeft: "1px", fontWeight: 200 }}>*</span>;
  return <div>
    {props.label && <div style={{ marginBottom: "8px" }}>
        <StyledLabel htmlFor={props.id}>{props.label} {star}</StyledLabel>
    </div>}
    {props.children}
    {props.error &&
    <StyledErrorLabel id={props.id ? props.id + "-error" : ""} style={{ marginTop: "6px" }} aria-live="assertive"
                      aria-atomic="true">
      {props.error}
    </StyledErrorLabel>}
  </div>;
};

const StyledInput = styled.input<{ isInvalid?: boolean }>`
  font-size: ${({ theme }) => theme.input.fontSize};
  font-weight: ${({ theme }) => theme.input.fontWeight};
  color: ${({ theme }) => theme.input.color};
  width: 100%;
  height: 40;
  line-height: normal;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  border: 1px solid ${({ isInvalid, disabled, theme }) => (isInvalid && !disabled ? theme.input.borderColorError : theme.input.borderColor)};
  background-color: ${({ theme }) => theme.input.backgroundColor};
  padding: 8px 10px;
  outline: none;
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.input.backgroundColor};
  };
`;

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.input.label.fontSize};
  font-weight: ${({ theme }) => theme.input.label.fontWeight};
  color: ${({ theme }) => theme.input.label.color};
`;

const StyledErrorLabel = styled.div`
  font-size: ${({ theme }) => theme.input.label.fontSizeError};
  font-weight: ${({ theme }) => theme.input.label.fontWeightError};
  color: ${({ theme }) => theme.input.label.colorError};
`;

