import * as React from "react";
import styled from "styled-components";

interface BadgeProps {
  variant?: "success" | "info" | "warning" | "error"
  size?: "small" | "medium" | "large"
  customStyle?: BadgeVariant
  children: React.ReactNode,
  onClick?: () => any;
  minWidth?: string
}

export const Badge = ({ children, customStyle, variant = "info", size = "medium", minWidth = "auto", onClick = undefined }: BadgeProps) => {
  const badgeVariant: BadgeVariant = customStyle ?? BadgeVariants[variant as never];
  const sizeVariant = SizeVariants[size];
  const styledBadgeProps: StyledBadgeProps = { ...badgeVariant, ...sizeVariant, minWidth, isClickable: onClick !== undefined };
  return <StyledBadge {...styledBadgeProps} onClick={onClick}>
    {children}
  </StyledBadge>;
};

interface BadgeVariant {
  color: string;
  backgroundColor: string;
}

const BadgeVariants = {
  success: {
    color: "#067A3D",
    backgroundColor: "#DFF0D8",
  },
  info: {
    color: "#0D72A8",
    backgroundColor: "#E6EFF5",
  },
  warning: {
    color: "#8A6D3B",
    backgroundColor: "#FCF8E2",
  },
  error: {
    color: "#BC111E",
    backgroundColor: "#F2DEDE",
  }
};

interface SizeVariant {
  fontSize: string
  padding: string
}

const SizeVariants = {
  small: {
    fontSize: "10px",
    padding: "6px",
  },
  medium: {
    fontSize: "12px",
    padding: "8px",
  },
  large: {
    fontSize: "14px",
    padding: "8px 10px 8px",
  }
};

type StyledBadgeProps = BadgeVariant & SizeVariant & { minWidth: string, isClickable: boolean }

const StyledBadge = styled.div<StyledBadgeProps>`
    display: inline-block;
    text-align: center;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    ${(props) => props.isClickable && `
    cursor: pointer;
    &:hover {
      filter: brightness(96%)
    } 
    `};
    height: auto;
    text-decoration: none;
    white-space: nowrap;
    padding: ${(props) => props.padding};
    border-radius: ${({ theme }) => theme.border.radiusSmall}px;
    min-width: ${(props) => props.minWidth};
    font-size: ${(props) => props.fontSize};
    font-weight: 400;
    word-wrap: break-word;
    outline: none;
`;
