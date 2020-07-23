import * as React from "react";
import styled, {useTheme} from "styled-components";
import {calculateUnit, CommonColors} from "../..";
import {Spinner} from "./spinner";
import * as CSS from "csstype";

export interface ButtonProps {
  id?: string;
  variant?:
      | "primary" | "primaryOutlined" | "primaryOutlinedFilled" | "textPrimary" | "textPrimaryFilled"
      | "secondary" | "secondaryOutlined" | "secondaryOutlinedFilled" | "textSecondary" | "textSecondaryFilled"
      | "text"
  type?: "submit" | "button";
  size?: "small" | "medium" | "large"
  customVariant?: ButtonVariant;
  customSize?: SizeVariant;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
  disabled?: boolean;
  width?: string;
  isLoading?: boolean;
}

export const Button = ({ id, children, variant = "primary", size = "medium", onClick, type = "button", width = "auto", customVariant, customSize, isLoading, disabled }: ButtonProps) => {
  const buttonVariant: ButtonVariant = customVariant ?? useButtonVariant()[variant];
  const sizeVariant = customSize ?? ButtonSizeVariants[size];
  const styledBtnProps: StyledButtonProps = { ...buttonVariant, ...sizeVariant, isLoading: isLoading };
  return (!isLoading ?
      <StyledButton {...styledBtnProps} id={id} type={type} onClick={onClick} style={{ width }} disabled={disabled}>
        <div children={children}/>
      </StyledButton> : <StyledButton  {...styledBtnProps} id={id} type={"button"} style={{ width }}>
        <div style={{ color: "transparent" }} children={children}/>
        <div style={{ position: "absolute", left: "50%", top: "52%", transform: "translate(-50%, -50%)" }}>
          <Spinner color={"currentColor"} size={16} borderWidth={"2px"}/>
        </div>
      </StyledButton>);
};

export const ButtonSizeVariants = {
  small: {
    fontSize: "12px",
    fontWeight: 400,
    padding: "8px 18px 8px",
  },
  medium: {
    fontSize: "14px",
    fontWeight: 400,
    padding: "12px 30px 12px",
  },
  large: {
    fontSize: "16px",
    fontWeight: 400,
    padding: "16px 32px 16px",
  }
};

const useButtonVariant = () => {
  const { primary, primaryDark, secondary, secondaryDark, textMid, textDark } = useTheme().color;
  const { radiusSmall } = useTheme().border;
  return {
    text: {
      color: textMid,
      backgroundColor: "transparent",
      borderColor: "transparent",
      colorOnHover: textDark,
      backgroundOnHoverColor: CommonColors.greyLight30,
      borderOnHoverColor: "transparent",
      borderRadius: radiusSmall
    },
    primary: {
      color: "white",
      backgroundColor: primary,
      borderColor: primary,
      colorOnHover: "white",
      borderOnHoverColor: primaryDark,
      backgroundOnHoverColor: primaryDark,
      borderRadius: radiusSmall
    },
    primaryOutlined: {
      color: primary,
      backgroundColor: "transparent",
      borderColor: primary,
      colorOnHover: primary,
      backgroundOnHoverColor: "transparent",
      borderOnHoverColor: primary,
      borderRadius: radiusSmall
    },
    primaryOutlinedFilled: {
      color: primary,
      backgroundColor: "transparent",
      borderColor: primary,
      colorOnHover: "white",
      backgroundOnHoverColor: primary,
      borderOnHoverColor: primary,
      borderRadius: radiusSmall
    },
    textPrimary: {
      color: primary,
      backgroundColor: "transparent",
      borderColor: "transparent",
      colorOnHover: primary,
      backgroundOnHoverColor: CommonColors.greyLight30,
      borderOnHoverColor: "transparent",
      borderRadius: radiusSmall
    },
    textPrimaryFilled: {
      color: primary,
      backgroundColor: "transparent",
      borderColor: "transparent",
      colorOnHover: "white",
      backgroundOnHoverColor: primary,
      borderOnHoverColor: "transparent",
      borderRadius: radiusSmall
    },
    secondary: {
      color: "white",
      backgroundColor: secondary,
      borderColor: secondary,
      colorOnHover: "white",
      backgroundOnHoverColor: secondaryDark,
      borderOnHoverColor: secondary,
      borderRadius: radiusSmall
    },
    secondaryOutlined: {
      color: secondary,
      backgroundColor: "transparent",
      borderColor: secondary,
      colorOnHover: secondary,
      backgroundOnHoverColor: "transparent",
      borderOnHoverColor: secondaryDark,
      borderRadius: radiusSmall
    },
    secondaryOutlinedFilled: {
      color: secondary,
      backgroundColor: "transparent",
      borderColor: secondary,
      colorOnHover: "white",
      backgroundOnHoverColor: secondary,
      borderOnHoverColor: secondary,
      borderRadius: radiusSmall
    },
    textSecondary: {
      color: secondary,
      backgroundColor: "transparent",
      borderColor: "transparent",
      colorOnHover: secondary,
      backgroundOnHoverColor: CommonColors.greyLight30,
      borderOnHoverColor: "transparent",
      borderRadius: radiusSmall
    },
    textSecondaryFilled: {
      color: secondary,
      backgroundColor: "transparent",
      borderColor: "transparent",
      colorOnHover: "white",
      backgroundOnHoverColor: secondary,
      borderOnHoverColor: "transparent",
      borderRadius: radiusSmall
    }
  };
};

interface SizeVariant {
  fontSize: CSS.FontSizeProperty<any>;
  fontWeight: CSS.FontWeightProperty;
  padding: string
}

interface ButtonVariant {
  color: string;
  borderColor: string;
  backgroundColor: string;
  colorOnHover: string;
  borderOnHoverColor: string;
  backgroundOnHoverColor: string;
  borderRadius: CSS.BorderRadiusProperty<any>
}

type StyledButtonProps =
    ButtonVariant
    & SizeVariant
    & { isLoading?: boolean, borderRadius: CSS.BorderRadiusProperty<any> }

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
  ${({ isLoading }) => isLoading && `
    cursor: not-allowed;
  `};
  &:disabled {
    cursor: not-allowed;
    color: rgba(0,0,0,.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
  };
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.borderColor};
  &:hover:enabled,
  &:active:enabled {
    transition: background-color 100ms linear, box-shadow 300ms;
    color: ${(props) => props.colorOnHover};
    background-color: ${(props) => props.backgroundOnHoverColor};
    border-color: ${(props) => props.borderOnHoverColor};
    box-shadow:inset 0px 0px 0px 1px ${(props) => props.borderOnHoverColor};
  }  
`;
