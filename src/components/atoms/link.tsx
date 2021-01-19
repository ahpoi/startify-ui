import * as React from "react";
import { Property } from "csstype";

import styled, { css, useTheme } from "styled-components";
import { ColorScheme } from "../../styles/colors";

interface LinkProps {
  href: string;
  target?: string;
  onClick?: () => any;
  underline?: boolean;
  children: React.ReactNode;
  colorScheme?: ColorScheme;
  size?: "sm" | "md" | "lg";
}

export const Link = ({
  href,
  onClick,
  underline = true,
  children,
  colorScheme = "secondary",
  size = "md",
  target = "_blank",
}: LinkProps) => {
  const linkVariant: LinkVariant = useColorScheme(colorScheme);
  const styledProps = { ...linkVariant, ...useSizeVariant()[size] };
  return (
    <StyledLink href={href} target={target} underline={underline} onClick={onClick} {...styledProps}>
      {children}
    </StyledLink>
  );
};

export type LinkButtonProps = Omit<LinkProps, "target" | "href">;

export const LinkButton = ({
  onClick,
  children,
  underline = false,
  colorScheme = "secondary",
  size = "md",
}: LinkButtonProps) => {
  const linkVariant: LinkVariant = useColorScheme(colorScheme);
  const styledProps = { ...linkVariant, ...useSizeVariant()[size] };
  return (
    <StyledLinkButton type={"button"} underline={underline} onClick={onClick} {...styledProps}>
      {children}
    </StyledLinkButton>
  );
};

type LinkVariant = {
  color: Property.Color;
  colorOnHover: Property.Color;
};

const useColorScheme = (scheme: ColorScheme) => {
  const color = useTheme().colors[scheme];
  return {
    color: color[500],
    colorOnHover: color[300],
  };
};

const useSizeVariant = () => {
  const { typography } = useTheme();
  return {
    sm: {
      fontSize: typography.size.body.sm,
      fontWeight: "normal",
    },
    md: {
      fontSize: typography.size.body.md,
      fontWeight: "normal",
    },
    lg: {
      fontSize: typography.size.body.lg,
      fontWeight: "normal",
    },
  };
};

interface StyledLinkProps {
  color: string;
  colorOnHover: string;
  fontSize: string;
  fontWeight: number | string;
  underline?: boolean;
}

const styledLinkBasedCss = css<StyledLinkProps>`
   background: none!important;
   display: inline-block;
   border: none;
   padding 0!important;
   outline: none;
   cursor: pointer;
   color: ${(props) => props.color};
   font-size: ${(props) => props.fontSize};
   font-weight: ${(props) => props.fontWeight};
   text-decoration: ${(props) => (props.underline ? "underline" : "none!important")};
   &:hover,
   &:focus,
   &:active {
     color: ${(props) => props.colorOnHover};
  } 
`;

const StyledLink = styled.a<StyledLinkProps>`
  ${styledLinkBasedCss}
`;

const StyledLinkButton = styled.button<StyledLinkProps>`
  ${styledLinkBasedCss}
`;
