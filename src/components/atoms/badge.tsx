import * as React from "react";
import styled, {useTheme, BadgeVariantTheme} from "styled-components";

interface BadgeProps {
  variant: "primary" | "secondary" | "success" | "info" | "warning" | "error"
  children: React.ReactNode
}

export const Badge = ({ children, variant }: BadgeProps) => {
  const theme: BadgeVariantTheme = useTheme().badge.variants[variant];
  return <StyledBadge {...theme}>
    {children}
  </StyledBadge>;
};

const StyledBadge = styled.div<BadgeVariantTheme>`
    text-align: center;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    display: inline-block;
    height: auto;
    text-decoration: none;
    white-space: nowrap;
    padding: 8px;
    border-radius: ${({ theme }) => theme.badge.base.borderRadius};
    letter-spacing: 0.1em;
    min-width: 80px;
    font-size: ${({ theme }) => theme.badge.base.fontSize};
    font-weight: ${({ theme }) => theme.badge.base.fontWeight};
    word-wrap: break-word;
    outline: none;
`;
