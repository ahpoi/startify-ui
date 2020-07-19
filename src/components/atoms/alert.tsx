import * as React from "react";
import styled from "styled-components";

interface AlertProps {
  variant?: "success" | "info" | "light" | "warning" | "error",
  customStyle?: AlertVariant
  children: React.ReactNode,
  onClose?: () => any;
}

export const Alert = ({ children, variant = "success", customStyle, onClose }: AlertProps) => {
  const styledProps: AlertVariant = customStyle ?? AlertVariants[variant as never];
  return onClose ?
      <StyledAlert {...styledProps}>
        <div style={{ display: "inline-block" }}>{children}</div>
        <CloseButton aria-label="close" type={"button"}>
          <CloseIcon color={styledProps.color}/>
        </CloseButton>
      </StyledAlert> : <StyledAlert {...styledProps}>
        {children}
      </StyledAlert>;
};

const StyledAlert = styled.div<AlertVariant>`
    position: relative;
    font-size: 14px;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    border-color: ${(props) => props.borderColor};
    padding: 12px;
    border-radius: ${({ theme }) => theme.border.radiusSmall}px;
    border-width: 1px;
    border-style: solid;
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

interface AlertVariant {
  color: string;
  borderColor: string;
  backgroundColor: string;
}

const AlertVariants = {
  success: {
    color: "#067A3D",
    backgroundColor: "#DFF0D8",
    borderColor: "#C3E6CB"
  },
  light: {
    color: "#818182",
    backgroundColor: "#fafafa",
    borderColor: "#FDFDFE"
  },
  info: {
    color: "#0D72A8",
    backgroundColor: "#E6EFF5",
    borderColor: "#BEE5EB"
  },
  warning: {
    color: "#8A6D3B",
    backgroundColor: "#FCF8E2",
    borderColor: "#FFEEBA"
  },
  error: {
    color: "#BC111E",
    backgroundColor: "#F2DEDE",
    borderColor: "#F5C6CB"
  }
};

const CloseIcon = ({ color }: { color: string }) => (
    <svg width={20} height={20} viewBox="0 0 22 18">
      <path
          d="M11.894 10.834l4.773-4.773L15.607 5l-4.773 4.773L6.06 5 5 6.06l4.773 4.774L5 15.607l1.06 1.06 4.774-4.773 4.773 4.773 1.06-1.06-4.773-4.773z"
          fill={color}/>
    </svg>
);

StyledAlert.displayName = "Styled Alert";
