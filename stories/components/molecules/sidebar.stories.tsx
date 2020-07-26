import * as React from "react";
import {Button} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";
import {Sidebar} from "../../../src/components/molecules/sidebar";

// @ts-ignore
export default {
  title: "Presentation|Sidebar",
  component: Sidebar
};

export const sidebar = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  return <StoriesDefaultThemeProvider>
    <div>
      <Button onClick={() => setModalVisible(true)}>Toggle sidebar</Button>
      <Sidebar isOpen={isModalVisible} onStateChange={() => setModalVisible(false)}>
        Hello
      </Sidebar>
    </div>
  </StoriesDefaultThemeProvider>;
};
