import { TestHeaderLogo, TestLogo} from "../../utils/stories-container";
import * as React from "react";
import {
  DesktopHeader,
  HeaderUserMenu,
  MobileHeader,
  HeaderLink,
  ResponsiveLayout,
  Vertical,
  MenuItemButton,
  MenuList,
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
      <ResponsiveLayout
        renderMobile={() => (
          <MobileHeader
            logo={<TestHeaderLogo />}
            isSidebarOpen={isSidebarOpen}
            onSidebarStateChange={({ isOpen }) => setIsSideBarOpen(isOpen)}
            sidebarNavigation={
              <MenuList>
                {Links.map((it) => (
                  <MenuItemButton
                    key={it.text}
                    onClick={() => {
                      setIsSideBarOpen(false);
                      alert(it.text);
                    }}
                  >
                    {it.text}
                  </MenuItemButton>
                ))}
              </MenuList>
            }
          />
        )}
        renderDesktop={() => (
          <DesktopHeader
            logo={<TestHeaderLogo />}
            leftLinks={Links.map((it) => (
              <HeaderLink key={it.text} href={it.href} onClick={() => alert(it.text)}>
                {it.text}
              </HeaderLink>
            ))}
            rightLinks={RightLinks.map((it) => (
              <HeaderLink
                key={it.text}
                href={it.href}
                onClick={() => alert(it.text)}
              >
                {it.text}
              </HeaderLink>
            ))}
          />
        )}
      />

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

  return <DesktopHeader
        logo={<TestLogo/>}
        leftLinks={HeaderLinks.map((it) => (
            <HeaderLink key={it.text} href={it.href} onClick={() => alert(it.text)}>
              {it.text}
            </HeaderLink>
        ))}
        rightLinks={[
          <HeaderUserMenu key={1}>
            <Vertical spacing={2}>
              {MenuLinks.map((it) => (
                  <MenuItemButton key={it.text} onClick={() => alert(it.text)}>
                    {it.text}
                  </MenuItemButton>
              ))}
            </Vertical>
          </HeaderUserMenu>
        ]}
    />
}