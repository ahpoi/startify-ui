import { Property } from "csstype";
import * as React from "react";
import { HorizontalDivider } from "../atoms/divider";
import styled from "styled-components";
import { calculateUnit } from "../layout/gls/box";
import { Vertical } from "../layout/gls/gls";

const defaultPadding = "14px 24px";

type BaseMenuProps = {
  padding?: Property.Padding<any>;
};

type MenuItemButtonProps = {
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  padding?: Property.Padding<any>;
  children: React.ReactNode;
} & BaseMenuProps;

export const MenuItemButton = styled.button<MenuItemButtonProps>`
   display: block;
   background: transparent;
   border: none;
   outline: none;
   cursor: pointer;
   color: ${(props) => props?.color ?? props.theme.typography.color.body.mid};
   font-size: ${(props) => calculateUnit(props?.fontSize ?? props.theme.typography.size.body.md)};
   font-weight: ${(props) => props?.fontWeight ?? props.theme.typography.fontWeight.medium};
   padding ${(props) => props.padding ?? defaultPadding};
   text-decoration: none;
   text-align: left;
   &:hover,
   &:focus,
   &:active {
     background-color: ${(props) => props.theme.colors.grey["100"]} !important;
  } 
` as React.FunctionComponent<
  MenuItemButtonProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

export const MenuDivider = ({ padding = defaultPadding }: BaseMenuProps) => (
  <MenuItemContainer padding={padding}>
    <HorizontalDivider />
  </MenuItemContainer>
);

export const MenuItemContainer = ({
  padding = defaultPadding,
  children,
}: {
  padding?: Property.Padding<any>;
  children: React.ReactNode;
}) => <div style={{ padding: padding }}>{children}</div>;

export const MenuList = (props: { children: React.ReactNode }) => <Vertical spacing={0} children={props.children} />;
