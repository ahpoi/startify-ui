import * as React from "react";
import styled, {useTheme, ButtonVariantTheme} from "styled-components";

export interface ButtonProps {
  id?: string;
  variant?: "primary" | "primaryOutlined" | "primaryOutlinedFilled" | "secondary" | "secondaryOutlined" | "secondaryOutlinedFilled";
  type?: "submit" | "button";
  size?: "small" | "medium" | "large"
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => any;
  disabled?: boolean;
  width?: string;
  isLoading?: boolean;
}

export const Button = ({ id, children, variant = "primary", size = "medium", onClick, type = "submit", width = "auto", isLoading, disabled }: ButtonProps) => {
  const { variants, sizes } = useTheme().button;
  const variantTheme: ButtonVariantTheme = (variants[variant as never]);
  const sizeFontSize: string = (sizes[size as never]);
  const sizePadding: string = SizePadding[size];
  const styledBtnProps: StyledButtonProps = { ...variantTheme, fontSize: sizeFontSize, padding: sizePadding , isLoading: isLoading};
  return (!isLoading ?
      <StyledButton {...styledBtnProps} id={id} type={type} onClick={onClick} style={{ width }} disabled={disabled}>
        <div children={children}/>
      </StyledButton> : <StyledButton {...styledBtnProps} id={id} type={"button"} style={{ width }}>
        <div style={{ color: "transparent" }} children={children}/>
        <div style={{ position: "absolute", left: "50%", top: "52%", transform: "translate(-50%, -50%)" }}><Spinner/></div>
      </StyledButton>);
};

const SizePadding = {
  small: "6px 18px 6px",
  medium: "12px 30px 12px",
  large: "16px 32px 16px",
}

interface SizeProps {
  fontSize: string
  padding: string
}

type StyledButtonProps = ButtonVariantTheme & SizeProps & {isLoading?: boolean}

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  display: inline-block;
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
  height: auto;
  padding: ${(props) => props.padding};
  text-decoration: none;
  outline: none;
  border-radius: ${({ theme }) => theme.button.base.borderRadius};
  ${({ isLoading }) => isLoading &&`
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

const Spinner = styled.div`
  border-width: 1.5px;
  width: 12px;
  height: 12px;
  color: currentColor;
  display: inline-block;
  background: transparent;
  border-style: solid;
  border-top-color: currentColor;
  border-left-color: currentColor;
  border-right-color: currentColor;
  border-bottom-color: transparent;
  border-radius: 100%;
  animation: rotation 1.5s linear infinite;
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
