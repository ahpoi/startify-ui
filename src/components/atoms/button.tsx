import * as React from "react";
import styled, { useTheme } from "styled-components";
import { ButtonThemeBase, ButtonThemeSize, ButtonThemeVariant, ColorScheme } from "../..";
import { Spinner } from "./spinner";
import { colors } from "../../theme/styles/colors";
import { useColorScheme } from "../../theme/styles/hooks";
import { ButtonSizeType, ButtonVariantType } from "./button.theme";

export type ButtonProps = {
  id?: string;
  variant?: ButtonVariantType;
  type?: "submit" | "button";
  size?: ButtonSizeType;
  colorScheme?: ColorScheme;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
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
        <Spinner color={"currentColor"} size={16} borderWidth={"2px"} />
      </div>
    </StyledButton>
  );
};

export const useButtonBase = () => {
  return useTheme().components.button.base;
};

export const useButtonVariant = (variant: ButtonVariantType, scheme: ColorScheme) => {
  const variants = useTheme().components.button.variants;
  const colorSchemes = useTheme().colors[scheme as never];
  const theme = variants[variant];
  return {
    color: useColorScheme(theme.color, colorSchemes),
    backgroundColor: useColorScheme(theme.backgroundColor, colorSchemes),
    borderColor: useColorScheme(theme.borderColor, colorSchemes),
    onHover: {
      color: useColorScheme(theme.onHover.color, colorSchemes),
      backgroundColor: useColorScheme(theme.onHover.backgroundColor, colorSchemes),
      borderColor: useColorScheme(theme.onHover.borderColor, colorSchemes),
    },
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
    color: rgba(0, 0, 0, 0.25);
    background-color: ${colors.grey["100"]};
    border-color: ${colors.grey["100"]};
  }
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.borderColor};

  transition: all 300ms ease 0s;

  &:hover:enabled,
  &:focus:enabled,
  &:active:enabled {
    color: ${(props) => props.onHover.color};
    background-color: ${(props) => props.onHover.backgroundColor};
    border-color: ${(props) => props.onHover.borderColor};
    box-shadow: inset 0px 0px 0px 1px ${(props) => props.onHover.borderColor};
  }
`;
