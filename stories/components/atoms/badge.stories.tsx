import * as React from "react";
import {Badge, Horizontal, Vertical} from "../../../src";
import {onClickComponent} from "../../utils/stories-container";

// @ts-ignore
export default {
    title: "Atoms/Badge",
    component: Badge
};

export const badge = () => (
    <Horizontal>
        <Badge colorScheme={"primary"}>Primary</Badge>
        <Badge colorScheme={"secondary"}>Secondary</Badge>
        <Badge colorScheme={"green"}>Success</Badge>
        <Badge colorScheme={"yellow"}>Warning</Badge>
        <Badge colorScheme={"red"}>Error</Badge>
    </Horizontal>
);

export const sizes = () => (
    <Horizontal verticalAlign={"center"}>
        <Badge size={"sm"}>Small</Badge>
        <Badge size={"md"}>Medium</Badge>
        <Badge size={"lg"}>Large</Badge>
    </Horizontal>
);

export const actionable = () => (
    <Vertical horizontalAlign={"left"}>
        <Badge colorScheme={"green"} onClick={onClickComponent}>
            Success
        </Badge>
        <Badge colorScheme={"blue"} onClick={onClickComponent}>
            Info
        </Badge>
        <Badge colorScheme={"yellow"} onClick={onClickComponent}>
            Warning
        </Badge>
        <Badge colorScheme={"red"} onClick={onClickComponent}>
            Error
        </Badge>
    </Vertical>
);