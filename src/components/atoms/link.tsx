import * as React from "react";

import styled, { useTheme } from "styled-components";
import { ColorScheme } from "../../theme/styles/colors";
import { SizeType } from "../others/types";
import { useColorScheme } from "../../theme/styles/hooks";

interface LinkProps {
  href: string;
  target?: string;
  onClick?: () => any;
  underline?: boolean;
  children: React.ReactNode;
  colorScheme?: ColorScheme;
  size?: SizeType;
}

export const Link = ({
  href,
  onClick,
  underline = true,
  children,
  colorScheme = "primary",
  size = "md",
  target = "_blank",
}: LinkProps) => {
  const forwardedProps = { ...useLinkBase(colorScheme), ...useSize(size) };
  return (
    <StyledLink href={href} target={target} underline={underline} onClick={onClick} {...forwardedProps}>
      {children}
    </StyledLink>
  );
};

const useLinkBase = (scheme: ColorScheme) => {
  const linkColorTheme = useTheme().components.link.base;
  return {
    color: useColorScheme(linkColorTheme.color, scheme),
    colorOnHover: useColorScheme(linkColorTheme.colorOnHover, scheme),
  };
};

const useSize = (size: SizeType) => {
  return useTheme().components.link.sizes[size];
};

type StyledLinkProps = {
  color: string;
  colorOnHover: string;
  fontSize: string;
  fontWeight: number | string;
  underline?: boolean;
};

const StyledLink = styled.a<StyledLinkProps>`
   background: none!important;
   display: inline-block;
   border: none;
   padding 0!important;
   outline: none;
   cursor: pointer;
   color: ${(props) => props.color};
   font-size: ${(props) => props.fontSize};
   font-weight: ${(props) => props.fontWeight};
   text-decoration: ${(props) => (props.underline ? "underline" : "none !important")};
   &:hover,
   &:focus,
   &:active {
     color: ${(props) => props.colorOnHover};
  } 
`;
