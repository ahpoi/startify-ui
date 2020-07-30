import * as React from "react";
import {BackgroundColorProps, BaseWidthProps, calculateUnit, Header, Horizontal, MaxWidth, StretchSpacer} from "../..";
import styled from "styled-components";

/**
 * Links are passed as Component as we want to let the consumer provides their own style
 * Or also their own router library might wrap the components
 */
type DesktopHeaderProps = {
  logo: React.ReactNode,
  leftLinks?: React.ReactNode[]
  rightLinks?: React.ReactNode[]
  padding?: number
} & BaseWidthProps & BackgroundColorProps

export const DesktopHeader = (props: DesktopHeaderProps) => <Header backgroundColor={props.backgroundColor}>
  <MaxWidth maxWidth={props.maxWidth} centered
            style={{ paddingTop: calculateUnit(props.padding ?? 12), paddingBottom: calculateUnit(props.padding ?? 12) }}>
    <Horizontal verticalAlign={"center"}>
      <Horizontal verticalAlign={"center"} spacing={24}>
        {props.logo}
        {props.leftLinks?.length != null && props.leftLinks?.length > 0 &&
        <Horizontal spacing={12} verticalAlign={"center"}>
          {props.leftLinks?.map(it => it)}
        </Horizontal>
        }
      </Horizontal>
      {props.rightLinks?.length != null && props.rightLinks?.length > 0 &&
      <>
          <StretchSpacer/>
          <Horizontal spacing={12} verticalAlign={"center"}>
            {props.rightLinks?.map(it => it)}
          </Horizontal>
      </>}
    </Horizontal>
  </MaxWidth>
</Header>;

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

