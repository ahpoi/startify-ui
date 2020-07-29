import {StoriesDefaultThemeProvider, TestHeaderLogo} from "../../utils/stories-container";
import * as React from "react";
import {CommonColors, DefaultAppColorTheme, DesktopHeader, NavigationLink} from "../../../src";

export default {
  title: "Navigation|Header",
  component: DesktopHeader
};

const LeftLinks = [{
  href: "",
  text: "How it works"
}, {
  href: "",
  text: "Pricing"
}];

const RightLinks = [{
  href: "",
  text: "Sign up"
}, {
  href: "",
  text: "Login"
}];

export const desktopHeader = () =>
    <StoriesDefaultThemeProvider>
      <DesktopHeader
          backgroundColor={CommonColors.greyLight40}
          logo={<TestHeaderLogo/>}
          leftLinks={LeftLinks.map(it =>
              <NavigationLink key={it.text} href={it.href}
                              onClick={() => alert(it.text)}>{it.text}
              </NavigationLink>)}
          rightLinks={RightLinks.map(it =>
              <NavigationLink key={it.text} href={it.href}
                              color={DefaultAppColorTheme.secondary}
                              onClick={() => alert(it.text)}>{it.text}
              </NavigationLink>)}
      />
    </StoriesDefaultThemeProvider>;

