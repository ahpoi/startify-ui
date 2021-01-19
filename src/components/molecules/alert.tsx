import * as React from "react";
import styled, { useTheme } from "styled-components";
import { ColorScheme } from "../../theme/styles/colors";
import { CloseButton } from "../internal/close-button";

interface AlertProps {
  children: React.ReactNode;
  colorScheme?: ColorScheme;
  onClose?: () => any;
  override?: {
    colorScheme?: AlertColorScheme;
  };
}

export const Alert = ({ children, colorScheme = "primary", onClose, override }: AlertProps) => {
  const styledProps: AlertColorScheme = override?.colorScheme ?? useColorScheme(colorScheme);
  return onClose ? (
    <StyledAlert {...styledProps} role={"alert"}>
      <div style={{ display: "inline-block" }}>{children}</div>
      <CloseButton
        size={"sm"}
        style={{
          position: "absolute",
          top: "6px",
          right: "10px",
        }}
        onClick={onClose}
      />
    </StyledAlert>
  ) : (
    <StyledAlert role={"alert"} {...styledProps}>
      {children}
    </StyledAlert>
  );
};

const StyledAlert = styled.div<AlertColorScheme>`
  position: relative;
  font-size: 14px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border-color: ${(props) => props.borderColor};
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 24px;
  border-radius: ${({ theme }) => theme.radius.xs};
  border-width: 1px;
  border-style: solid;
  word-wrap: break-word;
`;

type AlertColorScheme = {
  color: string;
  borderColor: string;
  backgroundColor: string;
};

const useColorScheme = (scheme: ColorScheme) => {
  const color = useTheme().colors[scheme];
  return {
    color: color["700"],
    backgroundColor: color["100"],
    borderColor: color["300"],
  };
};

StyledAlert.displayName = "Styled Alert";
