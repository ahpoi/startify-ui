import * as React from "react";
import styled, { useTheme } from "styled-components";
import { ButtonThemeBase, ButtonThemeSize, ButtonThemeVariant, ColorScheme } from "../..";
import { SpinnerCircular } from "./spinner";
import { useColorScheme } from "../../theme/styles/hooks";
import { ButtonSizeType, ButtonVariantType } from "./button.theme";

export type ButtonProps = {
  id?: string;
  variant?: ButtonVariantType;
  type?: "submit" | "button";
  size?: ButtonSizeType;
  colorScheme?: ColorScheme;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  disabled?: boolean;
  width?: string;
  isLoading?: boolean;
  override?: {
    base?: ButtonThemeBase;
    variant?: ButtonThemeVariant;
    size?: ButtonThemeSize;
  };
};

export const Button = ({
  id,
  children,
  colorScheme = "primary",
  variant = "solid",
  size = "md",
  onClick,
  type = "button",
  width = "auto",
  isLoading,
  disabled,
  override,
}: ButtonProps) => {
  const buttonBase = override?.base ?? useButtonBase();
  const buttonVariant = override?.variant ?? useButtonVariant(variant, colorScheme);
  const buttonSize = override?.size ?? useButtonSize(size);
  const styledBtnProps: StyledButtonProps = { ...buttonBase, ...buttonVariant, ...buttonSize, isLoading: isLoading };
  return !isLoading ? (
    <StyledButton {...styledBtnProps} id={id} type={type} onClick={onClick} style={{ width }} disabled={disabled}>
      <div children={children} />
    </StyledButton>
  ) : (
    <StyledButton {...styledBtnProps} id={id} type={"button"} style={{ width }}>
      <div style={{ color: "transparent" }} children={children} />
      <div style={{ position: "absolute", left: "50%", top: "52%", transform: "translate(-50%, -50%)" }}>
        <SpinnerCircular colorScheme={"currentColor" as any} size={"16px"} borderWidth={"2px"} />
      </div>
    </StyledButton>
  );
};

export const useButtonBase = () => {
  return useTheme().components.button.base;
};

export const useButtonVariant = (variant: ButtonVariantType, scheme: ColorScheme): ButtonThemeVariant => {
  const variants = useTheme().components.button.variants;
  const theme = variants[variant];
  return {
    color: useColorScheme(theme.color, scheme),
    colorOnHover: useColorScheme(theme.colorOnHover, scheme),
    colorOnFocus: useColorScheme(theme.colorOnFocus, scheme),
    colorOnActive: useColorScheme(theme.colorOnActive, scheme),
    backgroundColor: useColorScheme(theme.backgroundColor, scheme),
    backgroundColorOnHover: useColorScheme(theme.backgroundColorOnHover, scheme),
    backgroundColorOnFocus: useColorScheme(theme.backgroundColorOnFocus, scheme),
    backgroundColorOnActive: useColorScheme(theme.backgroundColorOnActive, scheme),
    borderColor: useColorScheme(theme.borderColor, scheme),
    borderColorOnHover: useColorScheme(theme.borderColorOnHover, scheme),
    borderColorOnFocus: useColorScheme(theme.borderColorOnFocus, scheme),
    borderColorOnActive: useColorScheme(theme.borderColorOnActive, scheme),
    textDecorationOnHover: theme.textDecorationOnHover,
    textDecorationOnFocus: theme.textDecorationOnFocus,
    textDecorationOnActive: theme.textDecorationOnActive,
  };
};

export const useButtonSize = (size: ButtonSizeType) => {
  return useTheme().components.button.sizes[size];
};

type StyledButtonProps = {
  isLoading?: boolean;
} & ButtonThemeBase &
  ButtonThemeVariant &
  ButtonThemeSize;

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  display: inline-block;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  cursor: pointer;
  height: auto;
  padding: ${(props) => props.padding};
  text-decoration: none;
  outline: none;
  line-height: 1em;
  border-radius: ${(props) => props.borderRadius};
  ${({ isLoading }) =>
    isLoading &&
    `
    cursor: not-allowed;
  `};
  &:disabled {
    cursor: not-allowed;
    color: ${(props) => useColorScheme(props.theme.components.button.base.colorDisabled)};
    background-color: ${(props) => useColorScheme(props.theme.components.button.base.backgroundColorDisabled)};
    border-color: ${(props) => useColorScheme(props.theme.components.button.base.borderColorDisabled)};
  }
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.borderColor};

  transition: all 300ms ease 0s;

  &:focus:enabled {
    color: ${(props) => props.colorOnFocus};
    background-color: ${(props) => props.backgroundColorOnFocus};
    border-color: ${(props) => props.borderColorOnFocus};
    box-shadow: inset 0px 0px 0px 1px ${(props) => props.borderColorOnFocus};
    ${(props) => props.textDecorationOnFocus && `text-decoration: ${props.textDecorationOnFocus}`};
  }

  &:hover:enabled {
    color: ${(props) => props.colorOnHover};
    background-color: ${(props) => props.backgroundColorOnHover};
    border-color: ${(props) => props.borderColorOnHover};
    box-shadow: inset 0px 0px 0px 1px ${(props) => props.borderColorOnHover};
    ${(props) => props.textDecorationOnHover && `text-decoration: ${props.textDecorationOnHover}`};
  }

  &:active:enabled {
    color: ${(props) => props.colorOnActive};
    background-color: ${(props) => props.backgroundColorOnActive};
    border-color: ${(props) => props.borderColorOnActive};
    box-shadow: inset 0px 0px 0px 1px ${(props) => props.borderColorOnActive};
    ${(props) => props.textDecorationOnActive && `text-decoration: ${props.textDecorationOnActive}`};
  }
`;
