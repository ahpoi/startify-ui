import * as React from "react";
import styled from "styled-components";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const TextInput = styled.input<InputProps>`
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
