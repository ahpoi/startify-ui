import * as React from "react";
import styled, {useTheme, ButtonTheme} from "styled-components";

export interface ButtonProps {
  id?: string;
  type?: "submit" | "button";
  variant?: "primary" | "primaryOutlined" | "primaryOutlinedFilled" | "secondary" | "secondaryOutlined" | "secondaryOutlinedFilled";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => any;
  disabled?: boolean;
  width?: string;
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = ({ id, children, variant = "primary", onClick, type = "submit", width = "auto", isLoading , disabled}: ButtonProps) => {
  const theme = (useTheme().button.variants[variant as never]) as ButtonTheme;
  return (!isLoading ? <StyledButton {...theme} id={id} type={type} onClick={onClick} style={{ width }} disabled={disabled}>
    <div children={children}/>
  </StyledButton> : <StyledButton {...theme} id={id} type={type} style={{ width }}>
    <div style={{ color: "transparent" }} children={children}/>
    <div style={{ position: "absolute", left: "calc(50% - 12px)", top: "20%" }}><Spinner/></div>
  </StyledButton>);
};

type StyledButtonProps = ButtonTheme
const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  font-size: ${({ theme }) => theme.button.base.fontSize};
  cursor: pointer;
  height: auto;
  padding: 12px 30px 12px;
  text-decoration: none;
  outline: none;
  border-radius: ${({ theme }) => theme.button.base.borderRadius};
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
  &:focus:enabled,
  &:active:enabled {
    transition: background-color 100ms linear, box-shadow 300ms;
    color: ${(props) => props.colorOnHover};
    background-color: ${(props) => props.backgroundOnHoverColor};
    border-color: ${(props) => props.borderOnHoverColor};
    box-shadow:inset 0px 0px 0px 1px ${(props) => props.borderOnHoverColor};
  }  
`;

export const Spinner = styled.div`
  border-width: 1.5px;
  width: 20px;
  height: 20px;
  color: currentColor;
  display: inline-block;
  background: transparent;
  border-style: solid;
  border-top-color: currentColor;
  border-left-color: currentColor;
  border-right-color: currentColor;
  border-bottom-color: transparent;
  border-radius: 100%;
  animation: rotation .75s linear infinite;
  
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
