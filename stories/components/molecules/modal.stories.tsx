import * as React from "react";
import {Text, Button, Modal, ModalError} from "../../../src";

// @ts-ignore
export default {
    title: "Molecules/Modal",
    component: Modal,
};

export const modal = () => {
    const [isModalVisible, setModalVisible] = React.useState(false);
    return (
        <div>
            <Button onClick={() => setModalVisible(true)}>Show modal</Button>
            <Modal
                title={"Are you sure you want to exit?"}
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
            >
                <Text>
                    By exiting there is no way to come back
                </Text>
            </Modal>
        </div>
    );
};

export const errorModal = () => {
    const [isModalVisible, setModalVisible] = React.useState(false);
    return (
        <div>
            <Button onClick={() => setModalVisible(true)}>Show modal</Button>
            <ModalError isOpen={isModalVisible} onClose={() => setModalVisible(false)}/>
        </div>
    );
};

export const errorModalRetry = () => {
    const [isModalVisible, setModalVisible] = React.useState(false);
    return (
        <div>
            <Button onClick={() => setModalVisible(true)}>Show modal</Button>
            <ModalError isOpen={isModalVisible} onRetry={() => 0} onClose={() => setModalVisible(false)}/>
        </div>
    );
};
