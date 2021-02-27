import * as React from "react";
import {TestHeaderLogo} from "../../../utils/stories-container";
import {Sidebar, SidebarItemList, SidebarToggle,} from "../../../../src";
import {
  SidebarDivider,
  SidebarItem,
  SidebarItemContainer
} from "../../../../src/components/molecules/navigation/sidebar-item";

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

const PrimaryItemsLinks = () => (
  <>
    {Links.map((it) => (
      <SidebarItem key={it.text} onClick={() => alert(it.text)}>
        {it.text}
      </SidebarItem>
    ))}
  </>
);

const SecondaryItems = () => (
    <>
      {SecondaryLinks.map((it) => (
          <SidebarItem key={it.text} onClick={() => alert(it.text)} colorScheme={"secondary"}>
            {it.text}
          </SidebarItem>
      ))}
    </>
);

export const sidebar = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
      <div>
        <SidebarToggle onClick={() => setOpen(!isOpen)} />
        <Sidebar isOpen={isOpen} onStateChange={({isOpen}) => setOpen(isOpen)}>
          <SidebarItemList>
            <SidebarItemContainer>
              <TestHeaderLogo />
            </SidebarItemContainer>
            <PrimaryItemsLinks />
            <SidebarDivider/>
            <SecondaryItems />
          </SidebarItemList>
        </Sidebar>
      </div>
  );
};
