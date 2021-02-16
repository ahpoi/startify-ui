import * as React from "react";
import styled, { useTheme } from "styled-components";
import { ColorScheme } from "../../theme/styles/colors";
import { BadgeSizeType, BadgeThemeBase, BadgeThemeSize } from "./badge.theme";
import { useColorScheme } from "../../theme/styles/hooks";

interface BadgeProps {
  children: React.ReactNode;
  colorScheme?: ColorScheme;
  size?: BadgeSizeType;
  onClick?: () => any;
  minWidth?: string;
}

export const Badge = ({
  children,
  colorScheme = "primary",
  size = "md",
  minWidth = "auto",
  onClick = undefined,
}: BadgeProps) => {
  const badgeBaseTheme = useBadgeBase(colorScheme);
  const badgeSize = useBadgeSize(size);
  const styledProps: StyledBadgeProps = {
    ...badgeBaseTheme,
    ...badgeSize,
    minWidth,
  };
  return (
    <StyledBadge {...styledProps} onClick={onClick}>
      {children}
    </StyledBadge>
  );
};

export const useBadgeBase = (scheme: ColorScheme): BadgeThemeBase => {
  const baseTheme = useTheme().components.badge.base;
  const colorSchemes = useTheme().colors[scheme as never];
  return {
    backgroundColor: useColorScheme(baseTheme.backgroundColor, colorSchemes),
    borderRadius: baseTheme.borderRadius,
    color: useColorScheme(baseTheme.color, colorSchemes),
    fontWeight: baseTheme.fontWeight,
  };
};
export const useBadgeSize = (size: BadgeSizeType) => {
  return useTheme().components.badge.sizes[size];
};

type StyledBadgeProps = BadgeThemeBase & BadgeThemeSize & { minWidth: string };

const StyledBadge = styled.div<StyledBadgeProps>`
  display: inline-block;
  text-align: center;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  ${(props) =>
    props.onClick &&
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
  border-radius: ${(props) => props.borderRadius};
  min-width: ${(props) => props.minWidth};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  word-wrap: break-word;
  outline: none;
`;
