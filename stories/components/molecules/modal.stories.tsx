import * as React from "react";
import {
    Button,
    CloseButton,
    Modal,
    ModalBody,
    ModalHeader,
    ModalTitle,
    Text,
    Horizontal,
    Vertical
} from "../../../src";

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
                isOpen={isModalVisible}
                onClose={() => setModalVisible(false)}
            >
                <ModalHeader>
                    <ModalTitle>{"Are you sure you want to exit?"}</ModalTitle>
                    <CloseButton onClick={() => setModalVisible(false)}/>
                </ModalHeader>
                <ModalBody>
                    <Vertical spacing={12}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo erat, sagittis in lorem at,
                            pellentesque feugiat tortor. In euismod semper tortor, non placerat ante porta vitae. Proin
                            congue quam sed dui tempor, nec bibendum dolor ultricies. Nam ut neque tincidunt, feugiat lacus
                            eu, lobortis libero. Quisque quis nulla ut dui facilisis eleifend. Orci varius natoque penatibus
                            et magnis dis parturient montes, nascetur ridiculus mus. Donec aliquet non diam quis interdum.
                            Aliquam erat volutpat.
                        </Text>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo erat, sagittis in lorem at,
                            pellentesque feugiat tortor. In euismod semper tortor, non placerat ante porta vitae. Proin
                            congue quam sed dui tempor, nec bibendum dolor ultricies. Nam ut neque tincidunt, feugiat lacus
                            eu, lobortis libero. Quisque quis nulla ut dui facilisis eleifend. Orci varius natoque penatibus
                            et magnis dis parturient montes, nascetur ridiculus mus. Donec aliquet non diam quis interdum.
                            Aliquam erat volutpat.
                        </Text>
                    </Vertical>
                </ModalBody>
                <Horizontal horizontalAlign={"right"} spacing={12}>
                    <Button variant={"outlined-filled"}>Cancel</Button>
                    <Button>Submit</Button>
                </Horizontal>
            </Modal>
        </div>
    );
};


