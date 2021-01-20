import * as React from "react";
import styled, { useTheme } from "styled-components";
import { SizeType } from "../others/types";
import { ColorScheme } from "../../theme/styles/colors";

type BadgeSizeType = Exclude<SizeType, "xs">;

interface BadgeProps {
  children: React.ReactNode;
  colorScheme?: ColorScheme;
  size?: BadgeSizeType;
  onClick?: () => any;
  minWidth?: string;
  override?: {
    colorScheme?: BadgeColorScheme;
  };
}

export const Badge = ({
  children,
  colorScheme = "primary",
  size = "md",
  minWidth = "auto",
  onClick = undefined,
  override,
}: BadgeProps) => {
  const badgeVariant: BadgeColorScheme = override?.colorScheme ?? useColorScheme(colorScheme);
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

const useColorScheme = (scheme: ColorScheme) => {
  const color = useTheme().colors[scheme as never];
  return {
    color: "white",
    backgroundColor: color[500],
  };
};

type BadgeColorScheme = {
  color: string;
  backgroundColor: string;
};

type SizeVariant = {
  fontSize: string;
  padding: string;
};

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

type StyledBadgeProps = BadgeColorScheme & SizeVariant & { minWidth: string; isClickable: boolean };

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
