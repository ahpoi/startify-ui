import * as React from "react";
import {Button, Heading1, Heading4, HorizontalDivider, Modal, VerticalSpacer} from "../../../src";
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
             isVisible={isModalVisible}
             onSubmit={() => console.log("submitted")}
             onCancel={() => (setModalVisible(false))}
             cancelBtnTxt={"Exit"}
             message={"By existing there is no way to come back"}
             renderDivId={"root"}
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
             isVisible={isModalVisible}
             onSubmit={() => console.log("submitted")}
             onCancel={() => (setModalVisible(false))}
             cancelBtnTxt={"Exit"}
             renderDivId={"root"}
            >
        <HorizontalDivider/>
        <VerticalSpacer/>
        <Heading4>This is a children</Heading4>
        <Heading4>This is another children</Heading4>

      </Modal>
    </div>
  </StoriesDefaultThemeProvider>;
};
