import * as React from "react";
import styled from "styled-components";
import {calculateUnit} from "../..";

interface LinkProps {
  children: React.ReactNode
  color?: string;
  fontSize?: string;
  fontWeight?: number;
}

export const NavigationLink = styled.a<LinkProps>`
   background: none!important;
   display: inline-block;
   border: none;
   padding 0;
   outline: none;
   cursor: pointer;
   color: ${(props) => props?.color ?? props.theme.color.textMid};
   font-size: ${(props) => calculateUnit(props?.fontSize ?? props.theme.typography.text.medium)};
   font-weight: ${(props) => props?.fontWeight ?? props.theme.typography.fontWeight.medium};
   text-decoration: none!important;
   &:hover,
   &:active {
     transition: background-color 100ms linear, box-shadow 300ms;
     filter: brightness(75%);
  } 
` as React.FunctionComponent<LinkProps & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>;

