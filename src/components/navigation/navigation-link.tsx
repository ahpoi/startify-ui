import * as React from "react";
import styled, {css} from "styled-components";
import {calculateUnit} from "../..";
import * as CSS from "csstype";

type LinkProps = {
  children: React.ReactNode
  color?: string;
  fontSize?: string;
  fontWeight?: number;
}

const cssBaseLink = css<LinkProps>`
   background: transparent;
   border: none;
   outline: none;
   cursor: pointer;
   text-decoration: none!important;
   color: ${(props) => props?.color ?? props.theme.color.textMid};
   font-size: ${(props) => calculateUnit(props?.fontSize ?? props.theme.typography.text.medium)};
   font-weight: ${(props) => props?.fontWeight ?? props.theme.typography.fontWeight.medium};
`;

type AnchorPrimitiveType = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

export const NavigationLink = styled.a<LinkProps>`
   ${cssBaseLink}
   display: inline-block;
   padding 0;
   &:hover,
   &:active {
     transition: background-color 100ms linear, box-shadow 300ms;
     filter: brightness(50%);
  } 
` as React.FunctionComponent<LinkProps & AnchorPrimitiveType>;

type SideBarItemProps = {
  padding?: CSS.PaddingProperty<any>
} & LinkProps

export const SidebarItemLink = styled.a<SideBarItemProps>`
   ${cssBaseLink}
   display: block;
   padding ${props => props.padding ?? "14px 24px"};
   text-align: left;
   &:hover,
   &:active {
     transition: background-color 100ms linear, box-shadow 300ms;
     filter: brightness(75%);
  } 
` as React.FunctionComponent<SideBarItemProps & AnchorPrimitiveType>;

export const SidebarItemContainer = (props: { padding?: CSS.PaddingProperty<any>, children: React.ReactNode, onClick?: () => void }) =>
    <div style={{ padding: props.padding ?? "14px 24px" }} onClick={props.onClick}>
      {props.children}
    </div>;
