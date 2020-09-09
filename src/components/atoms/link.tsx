import * as React from "react";
import * as CSS from "csstype";

import styled, {css, useTheme} from "styled-components";

interface LinkProps {
  href: string;
  target?: string
  onClick?: () => any;
  underline?: boolean;
  children: React.ReactNode
  variant?: "primary" | "secondary" | "text"
  customVariant?: LinkVariant,
  size?: "small" | "medium" | "large"
}

export type LinkButtonProps = Omit<LinkProps, "target" | "href">

export const Link = ({ href, onClick, underline = false, children, variant = "secondary", customVariant, size = "medium", target = "_blank" }: LinkProps) => {
  const linkVariant: LinkVariant = customVariant ?? useStyleVariant()[variant];
  const styledProps = { ...linkVariant, ...useSizeVariant()[size] };
  return <StyledLink href={href} target={target} underline={underline}
                     onClick={onClick} {...styledProps}>{children}</StyledLink>;
};

export const LinkButton = ({ onClick, children, underline = false, variant = "secondary", customVariant, size = "medium" }: LinkButtonProps) => {
  const linkVariant: LinkVariant = customVariant ?? useStyleVariant()[variant];
  const styledProps = { ...linkVariant, ...useSizeVariant()[size] };
  return <StyledLinkButton type={"button"} underline={underline}
                           onClick={onClick} {...styledProps}>{children}</StyledLinkButton>;
};

type LinkVariant = {
  color: CSS.ColorProperty
  colorOnHover: CSS.ColorProperty
}

const useStyleVariant = () => {
  const { primary, primaryDark, secondary, secondaryDark, textMid, textDark } = useTheme().color;
  return {
    text: {
      color: textMid,
      colorOnHover: textDark,
    },
    primary: {
      color: primary,
      colorOnHover: primaryDark,
    },
    secondary: {
      color: secondary,
      colorOnHover: secondaryDark,
    }
  };
};

const useSizeVariant = () => {
  const { typography } = useTheme();
  return {
    small: {
      fontSize: typography.text.small,
      fontWeight: "normal",
    },
    medium: {
      fontSize: typography.text.medium,
      fontWeight: "normal",
    },
    large: {
      fontSize: typography.text.large,
      fontWeight: "normal",
    }
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
   text-decoration: ${(props) => props.underline ? "underline" : "none!important"};
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
