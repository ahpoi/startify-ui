import * as React from "react";
import styled, { css } from "styled-components";
import { Property } from "csstype";
import { calculateUnit } from "../layout/gls/box";
import { colors } from "../../theme/styles/colors";

type LinkProps = {
  children: React.ReactNode;
  color?: string;
  fontSize?: string;
  fontWeight?: number;
};

const cssBaseLink = css<LinkProps>`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none !important;
  color: ${(props) => props?.color ?? props.theme.typography.color.body.mid};
  font-size: ${(props) => calculateUnit(props?.fontSize ?? props.theme.typography.size.body.md)};
  font-weight: ${(props) => props?.fontWeight ?? props.theme.typography.fontWeight.medium};
`;

type AnchorPrimitiveType = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const NavigationLink = styled.a<LinkProps>`
   ${cssBaseLink}
   display: inline-block;
   padding 0;
   &:hover,
   &:focus,
   &:active {
     filter: brightness(50%);
  } 
` as React.FunctionComponent<LinkProps & AnchorPrimitiveType>;

type MenuItemProps = {
  padding?: Property.Padding<any>;
} & LinkProps;

export const NavigationMenuItemLink = styled.a<MenuItemProps>`
   ${cssBaseLink}
   display: block;
   padding ${(props) => props.padding ?? "14px 24px"};
   text-align: left;
   
   &:hover,
   &:focus,
   &:active {
     background-color: ${colors.grey["100"]} !important;
  } 
` as React.FunctionComponent<MenuItemProps & AnchorPrimitiveType>;

export const MenuItem = (props: {
  padding?: Property.Padding<any>;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <div style={{ padding: props.padding ?? "14px 24px" }} onClick={props.onClick}>
    {props.children}
  </div>
);
