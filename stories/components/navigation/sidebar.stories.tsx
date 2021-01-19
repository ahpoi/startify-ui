import * as React from "react";
import {  TestHeaderLogo } from "../../utils/stories-container";
import {
  HorizontalDivider,
  Sidebar,
  NavigationMenuItemLink,
  MenuItem,
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
      <NavigationMenuItemLink key={it.text} onClick={() => alert(it.text)}>
        {it.text}
      </NavigationMenuItemLink>
    ))}
  </>
);

const SidebarItemSecondaryLinks = () => (
  <>
    {SecondaryLinks.map((it) => (
      <NavigationMenuItemLink color={colors.secondary["700"]} key={it.text} onClick={() => alert(it.text)}>
        {it.text}
      </NavigationMenuItemLink>
    ))}
  </>
);

export const sidebar = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (

      <div>
        <SidebarToggle onClick={() => setOpen(!isOpen)} />
        <Sidebar isOpen={isOpen} onStateChange={({isOpen}) => setOpen(isOpen)}>
          <SidebarNavigation>
            <MenuItem>
              <TestHeaderLogo />
            </MenuItem>
            <SidebarItemsLinks />
            <MenuItem>
              <HorizontalDivider />
            </MenuItem>
            <SidebarItemSecondaryLinks />
          </SidebarNavigation>
        </Sidebar>
      </div>

  );
};
