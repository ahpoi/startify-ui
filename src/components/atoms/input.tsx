import * as React from "react";
import styled, {useTheme} from "styled-components";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string,
  name?: string,
  label?: string
  star?: boolean
  error?: string | null;
}

export const TextInput = (props: InputProps) => {
  const errorClassName = props.error ? useTheme().input.base.classNameError : "";
  return <StyledInput {...props} className={errorClassName}/>;
};

const StyledInput = styled.input<{ error?: any }>`
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.input.fontSize};
  font-weight: ${({ theme }) => theme.input.fontWeight};
  color: ${({ theme }) => theme.input.color};
  width: 100%;
  height: 40;
  line-height: normal;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  border: 1px solid ${({ error, disabled, theme }) => (error && !disabled ? theme.input.borderColorError : theme.input.borderColor)};
  background-color: ${({ theme }) => theme.input.backgroundColor};
  padding: 8px 10px;
  outline: none;
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.input.backgroundColorDisabled};
  };
  &:hover:enabled,
  &:focus:enabled {
    border-color: ${({ theme }) => theme.input.borderColorOnHover};
  }  
`;
