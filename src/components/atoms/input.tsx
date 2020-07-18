import * as React from "react";
import styled from "styled-components";
import {InputBaseColors} from "../styles/colors";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const TextInput = styled.input<InputProps>`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.textDark};
  width: 100%;
  height: 40;
  line-height: normal;
  border-radius: 4px;
  border: 1px solid ${({ error, disabled, theme }) => (error && !disabled ? theme.color.error : theme.color.textLight)};
  background-color: ${InputBaseColors.backgroundColor};
  padding: 8px 10px;
  outline: none;
  &:disabled {
    cursor: not-allowed;
    background-color:  ${InputBaseColors.backgroundColorDisabled};
  };
  &:hover:enabled,
  &:focus:enabled {
    border-color: ${({ theme }) => theme.color.secondary};
  }  
`;
