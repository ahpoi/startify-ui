import * as React from "react";
import styled, { useTheme } from "styled-components";
import { calculateUnit, CommonColors } from "../..";
import { Spinner } from "./spinner";
import { Property } from "csstype";
import { SizeType } from "../others/types";

type ButtonSizeType = Exclude<SizeType, "xs">;

export type ButtonVariantType =
  | "primary"
  | "primaryOutlined"
  | "primaryOutlinedFilled"
  | "secondary"
  | "secondaryOutlined"
  | "secondaryOutlinedFilled"
  | "text";

export interface ButtonProps {
  id?: string;
  variant?: ButtonVariantType;
  type?: "submit" | "button";
  size?: ButtonSizeType;
  customVariant?: ButtonVariant;
  customSize?: SizeVariant;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
  disabled?: boolean;
  width?: string;
  isLoading?: boolean;
}

export const Button = ({
  id,
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  width = "auto",
  customVariant,
  customSize,
  isLoading,
  disabled,
}: ButtonProps) => {
  const buttonVariant: ButtonVariant = customVariant ?? useButtonVariant()[variant];
  const sizeVariant = customSize ?? useButtonSizeVariant()[size];
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

const useButtonVariant = () => {
  const { primary, primaryDark, secondary, secondaryDark } = useTheme().color;
  const { mid, dark } = useTheme().typography.color.body;
  return {
    text: {
      color: mid,
      backgroundColor: CommonColors.greyLight40,
      borderColor: "transparent",
      colorOnHover: dark,
      backgroundOnHoverColor: CommonColors.greyLight70,
      borderOnHoverColor: CommonColors.greyLight70,
    },
    primary: {
      color: "white",
      backgroundColor: primary,
      borderColor: primary,
      colorOnHover: "white",
      borderOnHoverColor: primaryDark,
      backgroundOnHoverColor: primaryDark,
    },
    primaryOutlined: {
      color: primary,
      backgroundColor: "transparent",
      borderColor: primary,
      colorOnHover: primary,
      backgroundOnHoverColor: "transparent",
      borderOnHoverColor: primary,
    },
    primaryOutlinedFilled: {
      color: primary,
      backgroundColor: "transparent",
      borderColor: primary,
      colorOnHover: "white",
      backgroundOnHoverColor: primary,
      borderOnHoverColor: primary,
    },
    textPrimary: {
      color: primary,
      backgroundColor: "transparent",
      borderColor: "transparent",
      colorOnHover: primary,
      backgroundOnHoverColor: CommonColors.greyLight30,
      borderOnHoverColor: "transparent",
    },
    textPrimaryFilled: {
      color: primary,
      backgroundColor: "transparent",
      borderColor: "transparent",
      colorOnHover: "white",
      backgroundOnHoverColor: primary,
      borderOnHoverColor: "transparent",
    },
    secondary: {
      color: "white",
      backgroundColor: secondary,
      borderColor: secondary,
      colorOnHover: "white",
      backgroundOnHoverColor: secondaryDark,
      borderOnHoverColor: secondary,
    },
    secondaryOutlined: {
      color: secondary,
      backgroundColor: "transparent",
      borderColor: secondary,
      colorOnHover: secondary,
      backgroundOnHoverColor: "transparent",
      borderOnHoverColor: secondaryDark,
    },
    secondaryOutlinedFilled: {
      color: secondary,
      backgroundColor: "transparent",
      borderColor: secondary,
      colorOnHover: "white",
      backgroundOnHoverColor: secondary,
      borderOnHoverColor: secondary,
    },
    textSecondary: {
      color: secondary,
      backgroundColor: "transparent",
      borderColor: "transparent",
      colorOnHover: secondary,
      backgroundOnHoverColor: CommonColors.greyLight30,
      borderOnHoverColor: "transparent",
    },
    textSecondaryFilled: {
      color: secondary,
      backgroundColor: "transparent",
      borderColor: "transparent",
      colorOnHover: "white",
      backgroundOnHoverColor: secondary,
      borderOnHoverColor: "transparent",
    },
  };
};

interface SizeVariant {
  fontSize: Property.FontSize<any>;
  fontWeight: Property.FontWeight;
  padding: string;
  borderRadius: Property.BorderRadius<any>;
}

interface ButtonVariant {
  color: string;
  borderColor: string;
  backgroundColor: string;
  colorOnHover: string;
  borderOnHoverColor: string;
  backgroundOnHoverColor: string;
}

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
    background-color: #f5f5f5;
    border-color: #f5f5f5;
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
