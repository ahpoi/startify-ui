import * as React from "react";
import styled, { useTheme } from "styled-components";
import { calculateUnit, ColorScheme } from "../..";
import { Spinner } from "./spinner";
import { Property } from "csstype";
import { SizeType } from "../others/types";
import { baseColors } from "../../styles/colors";

type ButtonSizeType = Exclude<SizeType, "xs">;

export type ButtonVariantType = "solid" | "ghost" | "outlined" | "outlined-filled" | "link";

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
    variant?: ButtonVariant;
    size?: SizeVariant;
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
  const buttonVariant = override?.variant ?? useVariantColorScheme(variant, colorScheme);
  const sizeVariant = override?.size ?? useButtonSizeVariant()[size];
  const styledBtnProps: StyledButtonProps = { ...buttonVariant, ...sizeVariant, isLoading: isLoading };
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

export const useButtonSizeVariant = (): Record<ButtonSizeType, SizeVariant> => {
  const { xs: borderRadius } = useTheme().radius;
  const { medium } = useTheme().typography.fontWeight;
  return {
    sm: {
      fontSize: "12px",
      fontWeight: medium,
      padding: "8px 18px 8px",
      borderRadius: borderRadius,
    },
    md: {
      fontSize: "14px",
      fontWeight: medium,
      padding: "12px 30px 12px",
      borderRadius: borderRadius,
    },
    lg: {
      fontSize: "16px",
      fontWeight: medium,
      padding: "16px 32px 16px",
      borderRadius: borderRadius,
    },
  };
};

const useVariantColorScheme = (variant: ButtonVariantType, scheme: ColorScheme): ButtonVariant => {
  const color = useTheme().colors[scheme];
  const colorLight = color[300];
  const colorMid = color[500];
  const colorDark = color[700];
  switch (variant) {
    case "solid":
      return {
        color: "white",
        backgroundColor: colorMid,
        borderColor: colorMid,
        colorOnHover: "white",
        borderOnHoverColor: colorDark,
        backgroundOnHoverColor: colorDark,
      };
    case "outlined":
      return {
        color: colorMid,
        backgroundColor: "transparent",
        borderColor: colorMid,
        colorOnHover: colorMid,
        backgroundOnHoverColor: "transparent",
        borderOnHoverColor: colorMid,
      };
    case "outlined-filled":
      return {
        color: colorMid,
        backgroundColor: "transparent",
        borderColor: colorMid,
        colorOnHover: "white",
        backgroundOnHoverColor: colorMid,
        borderOnHoverColor: colorMid,
      };
    case "ghost": {
      return {
        color: colorMid,
        backgroundColor: "transparent",
        borderColor: "transparent",
        colorOnHover: "white",
        backgroundOnHoverColor: colorMid,
        borderOnHoverColor: "transparent",
      };
    }
    case "link": {
      return {
        color: colorMid,
        backgroundColor: "transparent",
        borderColor: "transparent",
        colorOnHover: colorLight,
        backgroundOnHoverColor: "transparent",
        borderOnHoverColor: "transparent",
      };
    }
  }
};

type SizeVariant = {
  fontSize: Property.FontSize<any>;
  fontWeight: Property.FontWeight;
  padding: Property.Padding;
  borderRadius: Property.BorderRadius<any>;
};

type ButtonVariant = {
  color: string;
  borderColor: string;
  backgroundColor: string;
  colorOnHover: string;
  borderOnHoverColor: string;
  backgroundOnHoverColor: string;
};

type StyledButtonProps = ButtonVariant &
  SizeVariant & { isLoading?: boolean; borderRadius: Property.BorderRadius<any> };

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
  border-radius: ${({ borderRadius }) => calculateUnit(borderRadius)};
  ${({ isLoading }) =>
    isLoading &&
    `
    cursor: not-allowed;
  `};
  &:disabled {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
    background-color: ${baseColors.grey["100"]};
    border-color: ${baseColors.grey["100"]};
  }
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.borderColor};

  transition: all 300ms ease 0s;

  &:hover:enabled,
  &:focus:enabled,
  &:active:enabled {
    color: ${(props) => props.colorOnHover};
    background-color: ${(props) => props.backgroundOnHoverColor};
    border-color: ${(props) => props.borderOnHoverColor};
    box-shadow: inset 0px 0px 0px 1px ${(props) => props.borderOnHoverColor};
  }
`;
