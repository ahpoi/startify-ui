import * as React from "react";
import styled, { useTheme } from "styled-components";
import { calculateUnit } from "../..";
import { Spinner } from "./spinner";
import { Property } from "csstype";
import { SizeType } from "../others/types";

type ButtonSizeType = Exclude<SizeType, "xs">;

export type ButtonVariantType =
  | "text"
  | "primary"
  | "primaryOutlined"
  | "primaryOutlinedFilled"
  | "secondary"
  | "secondaryOutlined"
  | "secondaryOutlinedFilled"
  | "linkPrimary"
  | "linkSecondary";

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
  const { primary, secondary, grey } = useTheme().colors;
  const { mid, dark } = useTheme().typography.color.body;
  return {
    text: {
      color: mid,
      backgroundColor: grey["100"],
      borderColor: "transparent",
      colorOnHover: dark,
      backgroundOnHoverColor: grey["200"],
      borderOnHoverColor: grey["200"],
    },
    primary: {
      color: "white",
      backgroundColor: primary["500"],
      borderColor: primary["500"],
      colorOnHover: "white",
      borderOnHoverColor: primary["700"],
      backgroundOnHoverColor: primary["700"],
    },
    primaryOutlined: {
      color: primary["500"],
      backgroundColor: "transparent",
      borderColor: primary["500"],
      colorOnHover: primary["500"],
      backgroundOnHoverColor: "transparent",
      borderOnHoverColor: primary["500"],
    },
    primaryOutlinedFilled: {
      color: primary["500"],
      backgroundColor: "transparent",
      borderColor: primary["500"],
      colorOnHover: "white",
      backgroundOnHoverColor: primary["500"],
      borderOnHoverColor: primary["500"],
    },
    secondary: {
      color: "white",
      backgroundColor: secondary["500"],
      borderColor: secondary["500"],
      colorOnHover: "white",
      backgroundOnHoverColor: secondary["700"],
      borderOnHoverColor: secondary["500"],
    },
    secondaryOutlined: {
      color: secondary["500"],
      backgroundColor: "transparent",
      borderColor: secondary["500"],
      colorOnHover: secondary["500"],
      backgroundOnHoverColor: "transparent",
      borderOnHoverColor: secondary["700"],
    },
    secondaryOutlinedFilled: {
      color: secondary["500"],
      backgroundColor: "transparent",
      borderColor: secondary["500"],
      colorOnHover: "white",
      backgroundOnHoverColor: secondary["500"],
      borderOnHoverColor: secondary["500"],
    },
    linkPrimary: {
      color: primary["500"],
      backgroundColor: "transparent",
      borderColor: "transparent",
      colorOnHover: primary["700"],
      backgroundOnHoverColor: "transparent",
      borderOnHoverColor: "transparent",
    },
    linkSecondary: {
      color: secondary["500"],
      backgroundColor: "transparent",
      borderColor: "transparent",
      colorOnHover: secondary["700"],
      backgroundOnHoverColor: "transparent",
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
    background-color: ${(props) => props.theme.colors.grey["100"]};
    border-color: ${(props) => props.theme.colors.grey["100"]};
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
