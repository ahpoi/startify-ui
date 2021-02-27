import * as React from "react";
import { HorizontalDivider } from "../../atoms/divider";
import styled from "styled-components";
import { Vertical } from "../../layout/gls/gls";
import { useColorScheme } from "../../../theme/styles/hooks";
import { ColorScheme } from "../../../theme/styles/colors";

type SidebarItemProps = {
  colorScheme?: ColorScheme;
  children: React.ReactNode;
};

export const SidebarItem = styled.button<SidebarItemProps>`
   display: block;
   background: ${({ theme }) => useColorScheme(theme.components.sidebarItem.base.backgroundColor)};
   border: none;
   outline: none;
   cursor: pointer;
   color: ${({ theme, colorScheme = "black" }) =>
     useColorScheme(theme.components.sidebarItem.base.color, theme.colors[colorScheme as never])};
   font-size: ${(props) => props.theme.components.sidebarItem.base.fontSize};
   font-weight: ${(props) => props.theme.components.sidebarItem.base.fontWeight};
   padding ${(props) => props.theme.components.sidebarItem.base.padding};
   text-decoration: none;
   text-align: ${(props) => props.theme.components.sidebarItem.base.textAlign};
   &:hover,
   &:focus,
   &:active {
     background-color: ${({ theme }) => useColorScheme(theme.components.sidebarItem.base.backgroundColorOnHover)};
  } 
` as React.FunctionComponent<
  SidebarItemProps & { as?: any } & React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
>;

export const SidebarDivider = () => (
  <SidebarItemContainer>
    <HorizontalDivider />
  </SidebarItemContainer>
);

export const SidebarItemContainer = styled.div`
   padding ${(props) => props.theme.components.sidebarItem.base.padding};
`;

export const SidebarItemList = (props: { children: React.ReactNode }) => (
  <Vertical spacing={0} children={props.children} />
);
