import * as React from "react";
import {Text,Sidebar, SidebarToggle,} from "../../../../src";

export default {
  title: "Molecules/Sidebar",
  component: Sidebar,
};


export const sidebar = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
      <div>
        <SidebarToggle onClick={() => setOpen(!isOpen)} />
        <Sidebar isOpen={isOpen} onStateChange={({isOpen}) => setOpen(isOpen)}>
         <Text>Title</Text>
        </Sidebar>
      </div>
  );
};
