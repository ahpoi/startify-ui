import * as React from "react";
import { Property } from "csstype";

import styled, { css, useTheme } from "styled-components";

interface LinkProps {
  href: string;
  target?: string;
  onClick?: () => any;
  underline?: boolean;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  customVariant?: LinkVariant;
  size?: "sm" | "md" | "lg";
}

export type LinkButtonProps = Omit<LinkProps, "target" | "href">;

export const Link = ({
  href,
  onClick,
  underline = false,
  children,
  variant = "secondary",
  customVariant,
  size = "md",
  target = "_blank",
}: LinkProps) => {
  const linkVariant: LinkVariant = customVariant ?? useStyleVariant()[variant];
  const styledProps = { ...linkVariant, ...useSizeVariant()[size] };
  return (
    <StyledLink href={href} target={target} underline={underline} onClick={onClick} {...styledProps}>
      {children}
    </StyledLink>
  );
};

export const LinkButton = ({
  onClick,
  children,
  underline = false,
  variant = "secondary",
  customVariant,
  size = "md",
}: LinkButtonProps) => {
  const linkVariant: LinkVariant = customVariant ?? useStyleVariant()[variant];
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

const useStyleVariant = () => {
  const { primary, secondary } = useTheme().colors;
  const { mid, dark } = useTheme().typography.color.body;
  return {
    text: {
      color: mid,
      colorOnHover: dark,
    },
    primary: {
      color: primary["500"],
      colorOnHover: primary["700"],
    },
    secondary: {
      color: secondary["500"],
      colorOnHover: secondary["700"],
    },
  };
};

const useSizeVariant = () => {
  const { typography } = useTheme();
  return {
    sm: {
      fontSize: typography.size.sm,
      fontWeight: "normal",
    },
    md: {
      fontSize: typography.size.md,
      fontWeight: "normal",
    },
    lg: {
      fontSize: typography.size.lg,
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

const StyledLinkBasedCss = css<StyledLinkProps>`
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
  ${StyledLinkBasedCss}
`;

const StyledLinkButton = styled.button<StyledLinkProps>`
  ${StyledLinkBasedCss}
`;
