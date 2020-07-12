import * as React from "react";
import styled, {useTheme, ButtonTheme} from "styled-components";

export interface ButtonProps {
  id?: string;
  type?: "submit" | "button";
  variant?: "primary" | "primaryOutlined" | "secondary" | "secondaryOutlined";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => any;
  disabled?: boolean;
  width?: string;
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = ({ id, children, variant = "primary", onClick, type = "submit", width = "auto", isLoading }: ButtonProps) => {
  const theme = (useTheme().button.variants[variant as never]) as ButtonTheme;
  return (!isLoading ? <StyledButton{...theme} id={id} type={type} onClick={onClick} style={{ width }}>
    <div children={children}/>
  </StyledButton> : <StyledButton{...theme} id={id} type={type} style={{ width }}>
    <div style={{ color: "transparent" }} children={children}/>
    <div style={{ position: "absolute", left: "calc(50% - 12px)", top: "20%" }}><Spinner/></div>
  </StyledButton>);
};

const StyledButton = styled.button<ButtonTheme>`
  position: relative;
  font-size: ${({ theme }) => theme.button.base.fontSize};
  cursor: pointer;
  height: auto;
  padding: 12px 30px 12px;
  border: none;
  text-decoration: none;
  outline: none;
  border-radius: ${({ theme }) => theme.button.base.borderRadius};
  &:disabled {
    cursor: not-allowed;
  };
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.borderColor};
  &:hover,
  &:focus,
  &:active {
    transition: background-color 100ms linear;
    background-color: ${(props) => props.backgroundOnHoverColor};
    border-color: ${(props) => props.borderOnHoverColor};
  }  
`;

/**
 * TODO move to Spinner Component
 */
export const Spinner = styled.div`
  border-width: 2px;
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
