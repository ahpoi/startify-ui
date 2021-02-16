import * as React from "react";
import styled, { useTheme } from "styled-components";
import { ColorScheme } from "../../theme/styles/colors";
import { CloseButton } from "../internal/close-button";
import { AlertTheme } from "./alert.theme";
import { useColorScheme } from "../../theme/styles/hooks";

interface AlertProps {
  children: React.ReactNode;
  colorScheme?: ColorScheme;
  onClose?: () => any;
}

export const Alert = ({ children, colorScheme = "primary", onClose }: AlertProps) => {
  const styledProps = useAlertTheme(colorScheme);
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

export const useAlertTheme = (scheme: ColorScheme): AlertTheme => {
  const alertTheme = useTheme().components.alert;
  const colorSchemes = useTheme().colors[scheme as never];
  return {
    base: {
      backgroundColor: useColorScheme(alertTheme.base.backgroundColor, colorSchemes),
      color: useColorScheme(alertTheme.base.color, colorSchemes),
      fontSize: alertTheme.base.fontSize,
    },
    border: {
      color: useColorScheme(alertTheme.border.color, colorSchemes),
      radius: alertTheme.border.radius,
      width: alertTheme.border.width,
    },
  };
};

const StyledAlert = styled.div<AlertTheme>`
  position: relative;
  font-size: ${(props) => props.base.fontSize};
  color: ${(props) => props.color};
  background-color: ${(props) => props.base.backgroundColor};
  border-color: ${(props) => props.border.color};
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 24px;
  border-radius: ${(props) => props.border.radius};
  border-width: ${(props) => props.border.width};
  border-style: solid;
  word-wrap: break-word;
`;

StyledAlert.displayName = "Styled Alert";
