import * as React from "react";
import styled, { css } from "styled-components";
import { baseColors } from "../../styles/colors";

const BaseInputCss = css<InputProps>`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.typography.color.body.dark};
  width: 100%;
  height: 40px;
  line-height: normal;
  border-radius: ${({ theme }) => theme.radius.xs};
  border: 1px solid
    ${({ error, disabled, theme }) => (error && !disabled ? theme.colors.red["500"] : baseColors.grey["300"])};
  background-color: ${baseColors.white["900"]};
  padding: 8px 10px;
  outline: none;
  &:disabled {
    cursor: not-allowed;
    background-color: ${baseColors.grey["200"]};
  }
  &:hover:enabled,
  &:focus:enabled {
    border-color: ${({ theme }) => theme.colors.secondary[500]};
  }
`;

export type InputProps = {
  error?: boolean | string | null;
  disabled?: boolean;
};

export const Input = styled.input<InputProps>`
  ${BaseInputCss}
` as React.FunctionComponent<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & InputProps
>;

export type TextAreaProps = {
  minHeight?: string;
} & InputProps;

export const TextArea = styled.textarea<TextAreaProps>`
  ${BaseInputCss}
  min-height: ${({ minHeight = "150px" }) => minHeight};
` as React.FunctionComponent<
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & TextAreaProps
>;

export const Select = styled.select<InputProps>`
  ${BaseInputCss};
  font-size: 14px;
  text-overflow: ellipsis;
` as React.FunctionComponent<
  React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & InputProps
>;
