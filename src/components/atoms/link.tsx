import * as React from "react";
import styled, {css, useTheme} from "styled-components";

interface LinkProps {
  text: string,
  href: string;
  target?: string
  onClick?: () => void;
  customStyle?: {
    color?: string;
    colorOnHover?: string;
    fontSize?: string;
    fontWeight?: number;
  },
}

export type LinkButtonProps = Omit<LinkProps, "target" | "href">

export const Link = ({ href, onClick, text, target = "_blank", customStyle }: LinkProps) => {
  const styledProps = { ...useDefaultStyle(), ...customStyle };
  return <StyledLink href={href} target={target} onClick={onClick} {...styledProps}>{text}</StyledLink>;
};

export const LinkButton = ({ onClick, text, customStyle }: LinkButtonProps) => {
  const styledProps = { ...useDefaultStyle(), ...customStyle };
  return <StyledLinkButton type={"button"} onClick={onClick} {...styledProps}>{text}</StyledLinkButton>;
};

const useDefaultStyle = (): StyledLinkProps => {
  const { color, typography } = useTheme();
  const { secondary, secondaryDark } = color;
  return { color: secondary, colorOnHover: secondaryDark, fontSize: typography.text.small, fontWeight: 400 };
};

interface StyledLinkProps {
  color: string;
  colorOnHover: string;
  fontSize: string;
  fontWeight: number;
}

export const StyledLinkBasedCss = css<StyledLinkProps>`
   background: none!important;
   display: inline-block;
   border: none;
   padding 0!important;
   outline: none;
   cursor: pointer;
   color: ${(props) => props.color};
   font-size: ${(props) => props.fontSize};
   font-weight: ${(props) => props.fontWeight};
   text-decoration: underline;
   &:hover,
   &:active {
     transition: background-color 100ms linear, box-shadow 300ms;
     color: ${(props) => props.colorOnHover};
  } 
`;

const StyledLink = styled.a<StyledLinkProps>`
   ${StyledLinkBasedCss}
`;

const StyledLinkButton = styled.button<StyledLinkProps>`
   ${StyledLinkBasedCss}
`;
