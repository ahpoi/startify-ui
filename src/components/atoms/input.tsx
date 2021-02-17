import * as React from "react";
import styled, { css } from "styled-components";
import { useColorScheme } from "../../theme/styles/hooks";

const BaseInputCss = css<InputProps>`
  font-size: ${({ theme }) => theme.components.input.base.fontSize};
  font-weight: ${({ theme }) => theme.components.input.base.fontWeight};
  color: ${({ theme }) => useColorScheme(theme.components.input.base.color)};
  width: 100%;
  height: ${({ theme }) => theme.components.input.base.height};
  line-height: ${({ theme }) => theme.components.input.base.lineHeight};
  border-radius: ${({ theme }) => theme.components.input.base.borderRadius};
  border-width: ${({ theme }) => theme.components.input.base.borderWidth};
  border-style: solid;
  border-color: ${(props) =>
    props.error && !props.disabled
      ? useColorScheme(props.theme.components.input.base.borderColorError)
      : useColorScheme(props.theme.components.input.base.borderColor)};
  background-color: ${({ theme }) => useColorScheme(theme.components.input.base.backgroundColor)};
  padding: ${({ theme }) => theme.components.input.base.padding};
  outline: none;
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.components.input.base.backgroundColorDisabled};
  }
  &:hover:enabled,
  &:focus:enabled {
    border-width: ${({ theme }) => theme.components.input.base.borderWidthOnHover};
    border-color: ${({ theme }) => useColorScheme(theme.components.input.base.borderColorOnHover)};
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
  text-overflow: ellipsis;
` as React.FunctionComponent<
  React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & InputProps
>;
