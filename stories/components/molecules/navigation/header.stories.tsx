import {TestHeaderLogo} from "../../../utils/stories-container";
import * as React from "react";
import {DesktopHeader, SidebarItem, SidebarItemList, MobileHeader, NavigationItem, ResponsiveLayout,} from "../../../../src";

export default {
  title: "Molecules/Header",
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
