import * as React from "react";
import {Button, Heading4, HorizontalDivider, Modal, ModalError, VerticalSpacer} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";

// @ts-ignore
export default {
  title: "Presentation|Modal",
  component: Modal
};

export const modalSimpleMessage = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  return <StoriesDefaultThemeProvider>
    <div>
      <Button onClick={() => setModalVisible(true)}>Show modal</Button>
      <Modal title={"Are you sure you want to exit?"}
             isOpen={isModalVisible}
             actions={{
               primary: {
                 onSubmit: () => console.log("hello"),
               },
               secondary: {
                 onSubmit: () => setModalVisible(false)
               }
             }}
             onClose={() => setModalVisible(false)}
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
             actions={{
               primary: {
                 onSubmit: () => console.log("hello"),
               },
               secondary: {
                 onSubmit: () => setModalVisible(false)
               }
             }}
             onClose={() => setModalVisible(false)}
      >
        <HorizontalDivider/>
        <VerticalSpacer/>
        <Heading4>This is a children</Heading4>
        <Heading4>This is another children</Heading4>
      </Modal>
    </div>
  </StoriesDefaultThemeProvider>;
};

export const modalError = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  return <StoriesDefaultThemeProvider>
    <div>
      <Button onClick={() => setModalVisible(true)}>Show modal</Button>
      <ModalError
          isOpen={isModalVisible}
          onClose={() => setModalVisible(false)}
      />
    </div>
  </StoriesDefaultThemeProvider>;
};

export const modalErrorTryAgain = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  return <StoriesDefaultThemeProvider>
    <div>
      <Button onClick={() => setModalVisible(true)}>Show modal</Button>
      <ModalError
          isOpen={isModalVisible}
          onRetry={() => (0)}
          onClose={() => setModalVisible(false)}
      />
    </div>
  </StoriesDefaultThemeProvider>;
};
