import * as React from "react";
import styled, {useTheme, AlertVariantTheme} from "styled-components";

interface AlertProps {
  children: React.ReactNode,
  onClose?: () => any;
  variant: "success" | "info" | "light" | "warning" | "error"
}

export const Alert = ({ children, variant, onClose }: AlertProps) => {
  const theme: AlertVariantTheme = useTheme().alert.variants[variant];
  return onClose ?
      <StyledAlert {...theme}>
        <div style={{ display: "inline-block" }}>{children}</div>
        <CloseButton aria-label="close" type={"button"}>
          <CloseIcon color={theme.color}/>
        </CloseButton>
      </StyledAlert> : <StyledAlert {...theme}>
        {children}
      </StyledAlert>;
};

const StyledAlert = styled.div<AlertVariantTheme>`
    position: relative;
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

const CloseButton = styled.button`
   position: absolute;
   top: 9px;
   right: 10px;
   background: transparent;
   cursor: pointer;
   outline: none;
   border: none;
   padding: 0px;
`;

const CloseIcon = ({ color }: { color: string }) => (
    <svg width={20} height={20} viewBox="0 0 22 18">
      <path
          d="M11.894 10.834l4.773-4.773L15.607 5l-4.773 4.773L6.06 5 5 6.06l4.773 4.774L5 15.607l1.06 1.06 4.774-4.773 4.773 4.773 1.06-1.06-4.773-4.773z"
          fill={color}/>
    </svg>
);

StyledAlert.displayName = "Styled Alert";
