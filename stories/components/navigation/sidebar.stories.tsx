import * as React from "react";
import {StoriesDefaultThemeProvider, TestHeaderLogo} from "../../utils/stories-container";
import {
  DefaultAppColorTheme,
  HorizontalDivider,
  Sidebar,
  SidebarItemLink,
  SidebarItemContainer,
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

const SidebarItemsLinks = () => <>{Links.map(it =>
    <SidebarItemLink key={it.text}
                     onClick={() => alert(it.text)}>
      {it.text}
    </SidebarItemLink>)}
</>;

const SidebarItemSecondaryLinks = () => <>{SecondaryLinks.map(it =>
    <SidebarItemLink color={DefaultAppColorTheme.secondary} key={it.text}
                     onClick={() => alert(it.text)}>
      {it.text}
    </SidebarItemLink>)}
</>;

export const sidebar = () => {
  const [isOpen, setOpen] = React.useState(false);
  return <StoriesDefaultThemeProvider>
    <div>
      <SidebarToggle onClick={() => setOpen(true)}/>
      <Sidebar isOpen={isOpen} onStateChange={() => setOpen(false)}>
        <SidebarNavigation>
          <SidebarItemContainer>
            <TestHeaderLogo/>
          </SidebarItemContainer>
          <SidebarItemsLinks/>
          <SidebarItemContainer>
            <HorizontalDivider/>
          </SidebarItemContainer>
          <SidebarItemSecondaryLinks/>
        </SidebarNavigation>
      </Sidebar>
    </div>
  </StoriesDefaultThemeProvider>;
};
