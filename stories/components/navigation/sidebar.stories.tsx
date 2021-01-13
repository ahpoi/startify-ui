import * as React from "react";
import { StoriesDefaultThemeProvider, TestHeaderLogo } from "../../utils/stories-container";
import {
  HorizontalDivider,
  Sidebar,
  MenuItemLink,
  MenuItemContainer,
  SidebarNavigation,
  SidebarToggle, colors,
} from "../../../src";

export default {
  title: "Navigation/Sidebar",
  component: Sidebar,
};

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

const SecondaryLinks = [
  {
    href: "",
    text: "Sign up",
  },
  {
    href: "",
    text: "Login",
  },
];

const SidebarItemsLinks = () => (
  <>
    {Links.map((it) => (
      <MenuItemLink key={it.text} onClick={() => alert(it.text)}>
        {it.text}
      </MenuItemLink>
    ))}
  </>
);

const SidebarItemSecondaryLinks = () => (
  <>
    {SecondaryLinks.map((it) => (
      <MenuItemLink color={colors.secondary} key={it.text} onClick={() => alert(it.text)}>
        {it.text}
      </MenuItemLink>
    ))}
  </>
);

export const sidebar = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <StoriesDefaultThemeProvider>
      <div>
        <SidebarToggle onClick={() => setOpen(!isOpen)} />
        <Sidebar isOpen={isOpen} onStateChange={({isOpen}) => setOpen(isOpen)}>
          <SidebarNavigation>
            <MenuItemContainer>
              <TestHeaderLogo />
            </MenuItemContainer>
            <SidebarItemsLinks />
            <MenuItemContainer>
              <HorizontalDivider />
            </MenuItemContainer>
            <SidebarItemSecondaryLinks />
          </SidebarNavigation>
        </Sidebar>
      </div>
    </StoriesDefaultThemeProvider>
  );
};
