import * as React from "react";
import { Button, Modal, ModalError } from "../../../src";
import { StoriesDefaultThemeProvider } from "../../utils/stories-container";

// @ts-ignore
export default {
  title: "Molecules/Modal",
  component: Modal,
};

export const modal = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  return (
    <StoriesDefaultThemeProvider>
      <div>
        <Button onClick={() => setModalVisible(true)}>Show modal</Button>
        <Modal
          title={"Are you sure you want to exit?"}
          message={"By exiting there is no way to come back"}
          isOpen={isModalVisible}
          actions={{
            primary: {
              onSubmit: () => alert("hello"),
            },
            secondary: {
              onSubmit: () => setModalVisible(false),
            },
          }}
          onClose={() => setModalVisible(false)}
        />
      </div>
    </StoriesDefaultThemeProvider>
  );
};

export const errorModal = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  return (
    <StoriesDefaultThemeProvider>
      <div>
        <Button onClick={() => setModalVisible(true)}>Show modal</Button>
        <ModalError isOpen={isModalVisible} onClose={() => setModalVisible(false)} />
      </div>
    </StoriesDefaultThemeProvider>
  );
};

export const errorModalRetry = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  return (
    <StoriesDefaultThemeProvider>
      <div>
        <Button onClick={() => setModalVisible(true)}>Show modal</Button>
        <ModalError isOpen={isModalVisible} onRetry={() => 0} onClose={() => setModalVisible(false)} />
      </div>
    </StoriesDefaultThemeProvider>
  );
};
