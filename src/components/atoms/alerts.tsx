import * as React from "react";
import styled, {useTheme, AlertTheme} from "styled-components";

interface AlertProps {
  id?: string;
  children: React.ReactNode
  className?: string;
  variant: "success" | "info" | "light" | "warning" | "error"
}

export const Alert = ({ children, variant, className }: AlertProps) => {
  const theme: AlertTheme = useTheme().alert.variants[variant];
  return <StyledAlert className={`${className} ${variant}`} {...theme}>
    {children}
  </StyledAlert>;
};

const StyledAlert = styled.div<AlertTheme>`
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    border-color: ${(props) => props.borderColor};
    padding: 12px;
    border-radius: ${({ theme }) => theme.alert.base.borderRadius};
    border-width: 1px;
    border-style: solid;
    font-size: ${({ theme }) => theme.alert.base.fontSize};
    word-wrap: break-word;
`;

StyledAlert.displayName = "Styled Alert";
