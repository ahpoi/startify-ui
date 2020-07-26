import * as React from "react";
import {Button, Heading4, HorizontalDivider, Modal, VerticalSpacer} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";

// @ts-ignore
export default {
  title: "Presentation|Modal",
  component: Modal
};

export const simpleMessageModal = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  return <StoriesDefaultThemeProvider>
    <div>
      <Button onClick={() => setModalVisible(true)}>Show modal</Button>
      <Modal title={"Are you sure you want to exit?"}
             isOpen={isModalVisible}
             onSubmit={() => console.log("submitted")}
             onStateChange={({isOpen}) =>  setModalVisible(isOpen)}
             closeBtnTxt={"Exit"}
             hasCloseButton
             message={"By exiting there is no way to come back"}
      />
    </div>
  </StoriesDefaultThemeProvider>;
};

export const modalComplex = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  return <StoriesDefaultThemeProvider>
    <div>
      <Button onClick={() => setModalVisible(true)}>Show modal</Button>
      <Modal title={"Are you sure you want to exit?"}
             isOpen={isModalVisible}
             onSubmit={() => console.log("submitted")}
             onStateChange={({isOpen}) =>  setModalVisible(isOpen)}
             hasCloseIcon
             closeBtnTxt={"Exit"}
      >
        <HorizontalDivider/>
        <VerticalSpacer/>
        <Heading4>This is a children</Heading4>
        <Heading4>This is another children</Heading4>
      </Modal>
    </div>
  </StoriesDefaultThemeProvider>;
};
