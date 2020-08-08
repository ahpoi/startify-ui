import {StoriesDefaultThemeProvider, TestHeaderLogo} from "../../utils/stories-container";
import * as React from "react";
import {
  CommonColors,
  DefaultAppColorTheme,
  DesktopHeader,
  MobileHeader,
  NavigationLink, ResponsiveLayout,
  SidebarItemLink,
  SidebarNavigation
} from "../../../src";

export default {
  title: "Navigation|Header",
  component: DesktopHeader
};

const Links = [{
  href: "",
  text: "How it works"
}, {
  href: "",
  text: "Pricing"
}, {
  href: "",
  text: "Contact us"
}];

const RightLinks = [{
  href: "",
  text: "Sign up"
}, {
  href: "",
  text: "Login"
}];

export const header = () => {
  const [isSidebarOpen, setIsSideBarOpen] = React.useState(false);
  return <StoriesDefaultThemeProvider>
    <ResponsiveLayout
        renderMobile={() =>
            <MobileHeader
                backgroundColor={CommonColors.greyLight40}
                logo={<TestHeaderLogo/>}
                isSidebarOpen={isSidebarOpen}
                onSidebarStateChange={({ isOpen }) => setIsSideBarOpen(isOpen)}
                sidebarNavigation={
                  <SidebarNavigation>
                    {Links.map(it =>
                        <SidebarItemLink key={it.text}
                                         onClick={() => {
                                           setIsSideBarOpen(false);
                                           alert(it.text);
                                         }}>
                          {it.text}
                        </SidebarItemLink>)}
                  </SidebarNavigation>}
            />
        }
        renderDesktop={() =>
            <DesktopHeader
                backgroundColor={CommonColors.greyLight40}
                logo={<TestHeaderLogo/>}
                leftLinks={Links.map(it =>
                    <NavigationLink key={it.text} href={it.href}
                                    onClick={() => alert(it.text)}>{it.text}
                    </NavigationLink>)}
                rightLinks={RightLinks.map(it =>
                    <NavigationLink key={it.text} href={it.href}
                                    color={DefaultAppColorTheme.secondary}
                                    onClick={() => alert(it.text)}>{it.text}
                    </NavigationLink>)}
            />
        }
    />
  </StoriesDefaultThemeProvider>;

};
