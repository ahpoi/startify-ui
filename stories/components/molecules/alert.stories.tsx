import * as React from "react";
import {Alert, Vertical} from "../../../src";
import {onClickComponent} from "../../utils/stories-container";

export default {
    title: "Molecules/Alert",
    component: Alert
};

export const alert = () => (
        <Vertical>
            <Alert colorScheme={"green"}>This is a success alert—check it out!</Alert>
        </Vertical>
);

export const variants = () => (

        <Vertical>
            <Alert colorScheme={"green"}>This is a success alert—check it out!</Alert>
            <Alert colorScheme={"blue"}>This is a info alert—check it out!</Alert>
            <Alert colorScheme={"yellow"}>This is a warning alert—check it out!</Alert>
            <Alert colorScheme={"red"}>This is a danger alert—check it out!</Alert>
        </Vertical>

);

export const close = () => (
        <Vertical>
            <Alert colorScheme={"green"} onClose={onClickComponent}>
                This is a success alert—check it out!
            </Alert>
            <Alert colorScheme={"blue"} onClose={onClickComponent}>
                This is a info alert—check it out!
            </Alert>
            <Alert colorScheme={"yellow"} onClose={onClickComponent}>
                This is a warning alert—check it out!
            </Alert>
            <Alert colorScheme={"red"} onClose={onClickComponent}>
                This is a danger alert—check it out!
            </Alert>
        </Vertical>
);
