import * as React from "react";
import styled, {useTheme} from "styled-components";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean;
}

export const Input = (props: InputProps) => {
  const errorClassName = props.isInvalid ? useTheme().input.base.classNameError : "";
  return <StyledInput {...props} className={errorClassName}/>;
};

const StyledInput = styled.input<{ isInvalid?: boolean }>`
  font-size: ${({ theme }) => theme.input.fontSize};
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
