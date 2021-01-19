import { IconClose } from "../others/icons";
import * as React from "react";
import styled from "styled-components";
import { CSSProperties } from "react";
import { SizeType } from "../others/types";

/**
 * Used internally for Modal, Alert, Tooltip..etc
 */
export const CloseButton = ({
  style,
  onClick,
  size,
  color,
}: {
  style?: CSSProperties;
  onClick?: () => any;
  color?: string;
  size?: SizeType;
}) => (
  <StyledButton style={style} onClick={onClick} aria-label="close" role={"close"} type={"button"}>
    <IconClose color={color} size={sizes[size ?? "sm"]} />
  </StyledButton>
);

const sizes: Record<SizeType, number> = {
  xs: 16,
  sm: 24,
  md: 32,
  lg: 40,
};

const StyledButton = styled.button`
  padding: 2px;
  border-radius: 2px;

  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:focus,
  &:hover,
  &:active {
    border-radius: ${({ theme }) => theme.radius.xs};
    background-color: ${({ theme }) => theme.colors.blackAlpha["100"]};
  }
` as React.FunctionComponent<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;
