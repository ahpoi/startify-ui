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
  StretchSpacer
} from "../..";

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

type MobileHeaderProps = {
  logo: React.ReactNode,
  padding?: number
  isSidebarOpen: boolean;
  onSideBarToggle: () => any;
  sidebarNavigation: React.ReactNode,
} & BaseWidthProps & BackgroundColorProps

export const MobileHeader = (props: MobileHeaderProps) => {
  return <Header backgroundColor={props.backgroundColor}>
    <MaxWidth centered
              style={{ paddingTop: calculateUnit(props.padding ?? 12), paddingBottom: calculateUnit(props.padding ?? 12) }}>
      <Horizontal verticalAlign={"center"}>
        {props.logo}
        <StretchSpacer/>
        <SidebarToggle onClick={props.onSideBarToggle}/>
      </Horizontal>
    </MaxWidth>
    <Sidebar isOpen={props.isSidebarOpen} onStateChange={() => props.onSideBarToggle()}>
      {props.sidebarNavigation}
    </Sidebar>
  </Header>;
};
