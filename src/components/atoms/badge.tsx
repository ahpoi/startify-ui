import * as React from "react";
import styled from "styled-components";

interface BadgeProps {
  variant?: "success" | "info" | "warning" | "error"
  customStyle?: BadgeVariant
  children: React.ReactNode,
  width?: string
}

export const Badge = ({ children, customStyle, variant = "info", width = "auto" }: BadgeProps) => {
  const _variant: BadgeVariant = customStyle ?? BadgeVariants[variant as never];
  const styledBadgeProps: StyledBadgeProps = { ..._variant, width };
  return <StyledBadge {...styledBadgeProps} >
    {children}
  </StyledBadge>;
};

interface BadgeVariant {
  color: string;
  borderColor: string;
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

interface StyledBadgeProps extends BadgeVariant {
  width: string;
}

const StyledBadge = styled.div<StyledBadgeProps>`
    text-align: center;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    display: inline-block;
    height: auto;
    text-decoration: none;
    white-space: nowrap;
    padding: 8px;
    border-radius: ${({ theme }) => theme.border.radiusSmall}px;
    width: ${(props) => props.width};
    font-size: 80%;
    font-weight: 400;
    word-wrap: break-word;
    outline: none;
`;
