import * as React from "react";
import {
  BackgroundColorProps,
  BaseWidthProps,
  calculateUnit,
  Header,
  Horizontal,
  MaxWidth,
  Sidebar,
  SidebarToggle,
  StretchSpacer,
} from "../../../index";
import styled from "styled-components";

/**
 * Links are passed as Component as we want to let the consumer provides their own style
 * Or also their own router library might wrap the components
 */
type DesktopHeaderProps = {
  logo: React.ReactNode;
  leftLinks?: React.ReactNode[];
  rightLinks?: React.ReactNode[];
  divider?: string;
  padding?: number;
} & BaseWidthProps &
  BackgroundColorProps;

export const DesktopHeader = (props: DesktopHeaderProps) => (
  <Header style={{ backgroundColor: props.backgroundColor }} divider={props.divider}>
    <MaxWidth
      maxWidth={props.maxWidth}
      centered
      style={{ paddingTop: calculateUnit(props.padding ?? 12), paddingBottom: calculateUnit(props.padding ?? 12) }}
    >
      <Horizontal verticalAlign={"center"}>
        <Horizontal verticalAlign={"center"} spacing={24}>
          {props.logo}
          {props.leftLinks?.length != null && props.leftLinks?.length > 0 && (
            <Horizontal spacing={14} verticalAlign={"center"}>
              {props.leftLinks?.map((it) => it)}
            </Horizontal>
          )}
        </Horizontal>
        {props.rightLinks?.length != null && props.rightLinks?.length > 0 && (
          <>
            <StretchSpacer />
            <Horizontal spacing={14} verticalAlign={"center"}>
              {props.rightLinks?.map((it) => it)}
            </Horizontal>
          </>
        )}
      </Horizontal>
    </MaxWidth>
  </Header>
);

type MobileHeaderProps = {
  logo: React.ReactNode;
  padding?: number;
  divider?: string;
  isSidebarOpen: boolean;
  onSidebarStateChange: (state: { isOpen: boolean }) => void;
  sidebarNavigation: React.ReactNode;
} & BaseWidthProps &
  BackgroundColorProps;

export const MobileHeader = (props: MobileHeaderProps) => (
  <Header style={{ backgroundColor: props.backgroundColor }} divider={props.divider}>
    <MaxWidth
      centered
      style={{ paddingTop: calculateUnit(props.padding ?? 12), paddingBottom: calculateUnit(props.padding ?? 12) }}
    >
      <Horizontal verticalAlign={"center"}>
        {props.logo}
        <StretchSpacer />
        <SidebarToggle onClick={() => props.onSidebarStateChange({ isOpen: true })} />
      </Horizontal>
    </MaxWidth>
    <Sidebar isOpen={props.isSidebarOpen} onStateChange={props.onSidebarStateChange}>
      {props.sidebarNavigation}
    </Sidebar>
  </Header>
);

type LinkProps = {
  children: React.ReactNode;
  color?: string;
  fontSize?: string;
  fontWeight?: number;
};

export const HeaderLink = styled.a<LinkProps>`
   background: transparent;
   border: none;
   outline: none;
   cursor: pointer;
   text-decoration: none !important;
   color: ${(props) => props?.color ?? props.theme.typography.color.body.mid};
   font-size: ${(props) => calculateUnit(props?.fontSize ?? props.theme.typography.size.body.md)};
   font-weight: ${(props) => props?.fontWeight ?? props.theme.typography.fontWeight.medium};
   display: inline-block;
   padding 0;
   &:hover,
   &:focus,
   &:active {
     filter: brightness(50%);
  } 
` as React.FunctionComponent<
  LinkProps & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
>;