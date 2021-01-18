import * as React from "react";
import styled, { useTheme } from "styled-components";
import { SizeType } from "../others/types";

type BadgeSizeType = Exclude<SizeType, "xs">;

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "info" | "warning" | "error";
  size?: BadgeSizeType;
  onClick?: () => any;
  minWidth?: string;
  override?: {
    variant?: BadgeVariant;
  };
}

export const Badge = ({
  children,
  variant = "info",
  size = "md",
  minWidth = "auto",
  onClick = undefined,
  override,
}: BadgeProps) => {
  const badgeVariant: BadgeVariant = override?.variant ?? useBadgeVariant()[variant as never];
  const sizeVariant = SizeVariants[size];
  const styledBadgeProps: StyledBadgeProps = {
    ...badgeVariant,
    ...sizeVariant,
    minWidth,
    isClickable: onClick !== undefined,
  };
  return (
    <StyledBadge {...styledBadgeProps} onClick={onClick}>
      {children}
    </StyledBadge>
  );
};

interface BadgeVariant {
  color: string;
  backgroundColor: string;
}

const useBadgeVariant = () => {
  const { primary, secondary } = useTheme().colors;
  return {
    primary: {
      color: "white",
      backgroundColor: primary,
    },
    secondary: {
      color: "white",
      backgroundColor: secondary,
    },
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
    },
  };
};

interface SizeVariant {
  fontSize: string;
  padding: string;
}

const SizeVariants: Record<BadgeSizeType, SizeVariant> = {
  sm: {
    fontSize: "10px",
    padding: "6px",
  },
  md: {
    fontSize: "12px",
    padding: "8px",
  },
  lg: {
    fontSize: "14px",
    padding: "8px 10px 8px",
  },
};

type StyledBadgeProps = BadgeVariant & SizeVariant & { minWidth: string; isClickable: boolean };

const StyledBadge = styled.div<StyledBadgeProps>`
  display: inline-block;
  text-align: center;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  ${(props) =>
    props.isClickable &&
    `
      cursor: pointer;
      &:focus,
      &:hover {
        filter: brightness(95%)
      } 
    `};
  height: auto;
  text-decoration: none;
  white-space: nowrap;
  padding: ${(props) => props.padding};
  border-radius: ${({ theme }) => theme.radius.xs};
  min-width: ${(props) => props.minWidth};
  font-size: ${(props) => props.fontSize};
  font-weight: 400;
  word-wrap: break-word;
  outline: none;
`;
