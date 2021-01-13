import {StoriesDefaultThemeProvider, TestHeaderLogo, TestLogo} from "../../utils/stories-container";
import * as React from "react";
import {
  colors,
  DesktopHeader,
  HeaderUserMenu,
  MenuItemLink,
  MobileHeader,
  NavigationLink,
  ResponsiveLayout,
  SidebarNavigation,
  Vertical,
} from "../../../src";

export default {
  title: "Navigation/Header",
  component: DesktopHeader,
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
    <StoriesDefaultThemeProvider>
      <ResponsiveLayout
        renderMobile={() => (
          <MobileHeader
            logo={<TestHeaderLogo />}
            isSidebarOpen={isSidebarOpen}
            onSidebarStateChange={({ isOpen }) => setIsSideBarOpen(isOpen)}
            sidebarNavigation={
              <SidebarNavigation>
                {Links.map((it) => (
                  <MenuItemLink
                    key={it.text}
                    onClick={() => {
                      setIsSideBarOpen(false);
                      alert(it.text);
                    }}
                  >
                    {it.text}
                  </MenuItemLink>
                ))}
              </SidebarNavigation>
            }
          />
        )}
        renderDesktop={() => (
          <DesktopHeader
            logo={<TestHeaderLogo />}
            leftLinks={Links.map((it) => (
              <NavigationLink key={it.text} href={it.href} onClick={() => alert(it.text)}>
                {it.text}
              </NavigationLink>
            ))}
            rightLinks={RightLinks.map((it) => (
              <NavigationLink
                key={it.text}
                href={it.href}
                onClick={() => alert(it.text)}
              >
                {it.text}
              </NavigationLink>
            ))}
          />
        )}
      />
    </StoriesDefaultThemeProvider>
  );
};


export const headerUserMenu = () => {
  const HeaderLinks = [
    {
      href: "",
      text: "Orders",
    },
    {
      href: "",
      text: "Customers",
    },
    {
      href: "",
      text: "Products",
    },
  ];
  const MenuLinks = [
    {
      href: "",
      text: "Messages",
    },
    {
      href: "",
      text: "Trip",
    },
    {
      href: "",
      text: "Sign out",
    },
  ];

  return <StoriesDefaultThemeProvider>
    <DesktopHeader
        logo={<TestLogo/>}
        leftLinks={HeaderLinks.map((it) => (
            <NavigationLink key={it.text} href={it.href} onClick={() => alert(it.text)}>
              {it.text}
            </NavigationLink>
        ))}
        rightLinks={[
          <HeaderUserMenu key={1}>
            <Vertical spacing={2}>
              {MenuLinks.map((it) => (
                  <MenuItemLink key={it.text} href={it.href} onClick={() => alert(it.text)}>
                    {it.text}
                  </MenuItemLink>
              ))}
            </Vertical>
          </HeaderUserMenu>
        ]}
    />
  </StoriesDefaultThemeProvider>
}