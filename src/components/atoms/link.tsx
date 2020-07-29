import * as React from "react";
import styled, {css, useTheme} from "styled-components";

interface LinkProps {
  href: string;
  target?: string
  onClick?: () => void;
  underline?: boolean;
  children: React.ReactNode
  customStyle?: {
    color?: string;
    fontSize?: string;
    fontWeight?: number;
  },
}

export type LinkButtonProps = Omit<LinkProps, "target" | "href">

export const Link = ({ href, onClick, underline = true, children, target = "_blank", customStyle }: LinkProps) => {
  const styledProps = { ...useDefaultStyle(), ...customStyle };
  return <StyledLink href={href} target={target} underline={underline}
                     onClick={onClick} {...styledProps}>{children}</StyledLink>;
};

export const LinkButton = ({ onClick, children, underline = true, customStyle }: LinkButtonProps) => {
  const styledProps = { ...useDefaultStyle(), ...customStyle };
  return <StyledLinkButton type={"button"} underline={underline}
                           onClick={onClick} {...styledProps}>{children}</StyledLinkButton>;
};

const useDefaultStyle = (): StyledLinkProps => {
  const { color, typography } = useTheme();
  const { secondary } = color;
  return { color: secondary, fontSize: typography.text.medium, fontWeight: 400 };
};

interface StyledLinkProps {
  color: string;
  fontSize: string;
  fontWeight: number;
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
   &:active {
     transition: background-color 100ms linear, box-shadow 300ms;
     filter: brightness(75%);
  } 
`;

const StyledLink = styled.a<StyledLinkProps>`
   ${StyledLinkBasedCss}
`;

const StyledLinkButton = styled.button<StyledLinkProps>`
   ${StyledLinkBasedCss}
`;
