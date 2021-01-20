import * as React from "react";
import {TestHeaderLogo} from "../../../utils/stories-container";
import {colors, MenuList, Sidebar, SidebarToggle,} from "../../../../src";
import {MenuDivider, MenuItemContainer, MenuItemButton} from "../../../../src/components/molecules/menu";

export default {
  title: "Molecules/Sidebar",
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
      <MenuItemButton key={it.text} onClick={() => alert(it.text)}>
        {it.text}
      </MenuItemButton>
    ))}
  </>
);


export const sidebar = () => {
  const [isOpen, setOpen] = React.useState(false);
  const MenuItems = () => (
      <>
        {SecondaryLinks.map((it) => (
            <MenuItemButton color={colors.secondary["700"]} key={it.text} onClick={() => alert(it.text)}>
              {it.text}
            </MenuItemButton>
        ))}
      </>
  );
  return (
      <div>
        <SidebarToggle onClick={() => setOpen(!isOpen)} />
        <Sidebar isOpen={isOpen} onStateChange={({isOpen}) => setOpen(isOpen)}>
          <MenuList>
            <MenuItemContainer>
              <TestHeaderLogo />
            </MenuItemContainer>
            <SidebarItemsLinks />
            <MenuDivider/>
            <MenuItems />
          </MenuList>
        </Sidebar>
      </div>
  );
};
