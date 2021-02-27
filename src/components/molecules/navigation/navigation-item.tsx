import * as React from "react";
import styled from "styled-components";
import { ColorScheme } from "../../../theme/styles/colors";
import { useColorScheme } from "../../../theme/styles/hooks";

type NavProps = {
  colorScheme?: ColorScheme;
};

export const NavigationItem = styled.a<NavProps>`
   background: transparent;
   border: none;
   outline: none;
   cursor: pointer;
   text-decoration: none !important;
   color: ${({ theme, colorScheme = "secondary" }) =>
     useColorScheme(theme.components.navigationItem.base.color, theme.colors[colorScheme as never])};
   font-size: ${(props) => props.theme.components.navigationItem.base.fontSize};
   font-weight: ${(props) => props.theme.components.navigationItem.base.fontWeight};
   display: inline-block;
   padding 0;
   &:hover,
   &:focus,
   &:active {
     color: ${({ theme, colorScheme = "secondary" }) =>
       useColorScheme(theme.components.navigationItem.base.colorOnHover, theme.colors[colorScheme as never])};
  } 
` as React.FunctionComponent<
  NavProps & { as?: any } & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
>;
