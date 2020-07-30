import * as React from "react";
import {StoriesDefaultThemeProvider, TestHeaderLogo} from "../../utils/stories-container";
import {
  DefaultAppColorTheme,
  HorizontalDivider,
  NavigationLink,
  Sidebar,
  SidebarNavigation,
  SidebarToggle
} from "../../../src";

export default {
  title: "Navigation|Sidebar",
  component: Sidebar
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

const SecondaryLinks = [{
  href: "",
  text: "Sign up"
}, {
  href: "",
  text: "Login"
}];

const NavPrimaryLinks = () => <>{Links.map(it =>
    <NavigationLink style={{ padding: "14px 24px" }} key={it.text}
                    onClick={() => alert(it.text)}>
      {it.text}
    </NavigationLink>)}
</>;

const NavSecondaryLinks = () => <>{SecondaryLinks.map(it =>
    <NavigationLink style={{ padding: "14px 24px" }} color={DefaultAppColorTheme.secondary} key={it.text}
                    onClick={() => alert(it.text)}>
      {it.text}
    </NavigationLink>)}
</>;

const NavDivider = () => <div style={{ padding: "14px 24px" }}>
  <HorizontalDivider/>
</div>;

const NavHeader = () => <div style={{ padding: "14px 24px" }}>
  <TestHeaderLogo/>
</div>;

export const sidebar = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  return <StoriesDefaultThemeProvider>
    <div>
      <SidebarToggle onClick={() => setModalVisible(true)}/>
      <Sidebar isOpen={isModalVisible} onStateChange={() => setModalVisible(false)}>
        <SidebarNavigation>
          <NavHeader/>
          <HorizontalDivider/>
          <NavPrimaryLinks/>
          <NavDivider/>
          <NavSecondaryLinks/>
        </SidebarNavigation>
      </Sidebar>
    </div>
  </StoriesDefaultThemeProvider>;
};
