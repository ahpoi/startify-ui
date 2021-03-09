import { TestHeaderLogo} from "../../utils/stories-container";
import * as React from "react";
import {
    SidebarItem,
    SidebarItemList,
    NavigationItem,
    ResponsiveLayout,
    BaseWidthProps,
    BackgroundColorProps, Header, MaxWidth, calculateUnit, Horizontal, StretchSpacer, SidebarToggle, Sidebar,
} from "../../../src";

export default {
  title: "Examples/Header",
};

export const header = () => {
  const Links = [
    {
      href: "",
      text: "How it works",
    },
    {
      href: "",
      text: "Pricing",
    },
    {
      href: "",
      text: "Contact us",
    },
  ];

  const RightLinks = [
    {
      href: "",
      text: "Sign up",
    },
    {
      href: "",
      text: "Login",
    },
  ];

  const [isSidebarOpen, setIsSideBarOpen] = React.useState(false);
  return (
      <ResponsiveLayout
        renderMobile={() => (
          <MobileHeader
            logo={<TestHeaderLogo />}
            isSidebarOpen={isSidebarOpen}
            onSidebarStateChange={({ isOpen }) => setIsSideBarOpen(isOpen)}
            sidebarNavigation={
              <SidebarItemList>
                {Links.map((it) => (
                  <SidebarItem
                    key={it.text}
                    onClick={() => {
                      setIsSideBarOpen(false);
                      alert(it.text);
                    }}
                  >
                    {it.text}
                  </SidebarItem>
                ))}
              </SidebarItemList>
            }
          />
        )}
        renderDesktop={() => (
          <DesktopHeader
            logo={<TestHeaderLogo />}
            leftLinks={Links.map((it) => (
              <NavigationItem key={it.text} href={it.href} onClick={() => alert(it.text)} colorScheme={"green"}>
                {it.text}
              </NavigationItem>
            ))}
            rightLinks={RightLinks.map((it) => (
              <NavigationItem
                key={it.text}
                href={it.href}
                onClick={() => alert(it.text)}
                colorScheme={"blue"}
              >
                {it.text}
              </NavigationItem>
            ))}
          />
        )}
      />

  );
};

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