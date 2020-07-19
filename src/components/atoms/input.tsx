import * as React from "react";
import styled, {css} from "styled-components";
import {InputBaseColors} from "../styles/colors";

interface BaseProps {
  id?: string;
  name?: string;
  onChange: (value: any) => any;
  className?: string;
  disabled?: boolean;
  value: string;
  error?: boolean;
  autoFocus?: boolean;
}

export interface TextInputProps extends BaseProps {
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  autoFocus?: boolean;
  className?: string;
  onFocus?: () => any;
  onBlur?: () => any;
  onKeyDown?: (e: React.SyntheticEvent<any>) => any;
}

export class TextInput extends React.Component<TextInputProps> {

  handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
    let value = (evt.target as HTMLInputElement).value;
    this.props.onChange(value);
  };

  render() {
    return <StyledTextInput
        id={this.props.id}
        disabled={this.props.disabled}
        name={this.props.name}
        className={this.props.className}
        placeholder={this.props.placeholder}
        value={this.props.value || ""}
        minLength={this.props.minLength}
        maxLength={this.props.maxLength}
        onChange={this.handleChange}
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
        onKeyDown={this.props.onKeyDown}
        autoFocus={this.props.autoFocus}
        error={this.props.error}
    />;
  }
}

export class TextAreaInput extends React.Component<TextInputProps> {

  render() {
    return <StyledTextAreaInput
        id={this.props.id}
        disabled={this.props.disabled}
        name={this.props.name}
        className={this.props.className}
        placeholder={this.props.placeholder}
        value={this.props.value || ""}
        minLength={this.props.minLength}
        maxLength={this.props.maxLength}
        onChange={this.handleChange}
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
        onKeyDown={this.onKeyDown}
        autoFocus={this.props.autoFocus}
        error={this.props.error}
    />;
  }

  handleChange = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    let value = (evt.target as HTMLTextAreaElement).value;
    this.props.onChange(value);
  };

  onKeyDown = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    let event: KeyboardEvent = evt as any; // treat evt as a native keyboard event.
    if (event.key === "Enter") {
      event.stopPropagation();
      event.preventDefault();
      const value = (evt.target as HTMLTextAreaElement).value + "\n";
      this.props.onChange(value);
    }
    this.props.onKeyDown && this.props.onKeyDown(evt);
  };

}

interface StyledInputProps {
  error?: boolean;
  disabled?: boolean
}

const BaseInputCss = css<StyledInputProps>`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.textDark};
  width: 100%;
  height: 40;
  line-height: normal;
  border-radius: ${({ theme }) => theme.border.radiusSmall}px;
  border: 1px solid ${({ error, disabled, theme }) => (error && !disabled ? theme.color.error : InputBaseColors.borderColor)};
  background-color: ${InputBaseColors.backgroundColor};
  padding: 8px 10px;
  outline: none;
  &:disabled {
    cursor: not-allowed;
    background-color: ${InputBaseColors.backgroundColorDisabled};
  };
  &:hover:enabled,
  &:focus:enabled {
    border-color: ${({ theme }) => theme.color.secondary};
  }  
`;

const StyledTextInput = styled.input<{ error?: boolean }>`
  ${BaseInputCss}
`;

export const StyledTextAreaInput = styled.textarea<{ error?: boolean, minHeight?: string }>`
  ${BaseInputCss}
  resize: none;
  min-height: ${({ minHeight = "150px" }) => minHeight};
`;
