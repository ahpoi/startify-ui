import * as React from "react";
import {Badge, Horizontal, Vertical} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";

// @ts-ignore
export default {
    title: "Atoms/Badge",
    component: Badge,
};

export const badge = () => (
    <StoriesDefaultThemeProvider>
        <Horizontal>
            <Badge colorScheme={"primary"}>primary</Badge>
            <Badge colorScheme={"secondary"}>secondary</Badge>
            <Badge colorScheme={"green"}>success</Badge>
            <Badge colorScheme={"yellow"}>warning</Badge>
            <Badge colorScheme={"red"}>error</Badge>
        </Horizontal>
    </StoriesDefaultThemeProvider>
);

export const sizes = () => (
    <StoriesDefaultThemeProvider>
        <Horizontal verticalAlign={"center"}>
            <Badge size={"sm"}>Small</Badge>
            <Badge size={"md"}>Medium</Badge>
            <Badge size={"lg"}>Large</Badge>
        </Horizontal>
    </StoriesDefaultThemeProvider>
);

export const clickable = () => (
    <StoriesDefaultThemeProvider>
        <Vertical horizontalAlign={"left"}>
            <Badge colorScheme={"green"} onClick={onClick}>
                Success
            </Badge>
            <Badge colorScheme={"blue"} onClick={onClick}>
                Info
            </Badge>
            <Badge colorScheme={"yellow"} onClick={onClick}>
                Warning
            </Badge>
            <Badge colorScheme={"red"} onClick={onClick}>
                Error
            </Badge>
        </Vertical>
    </StoriesDefaultThemeProvider>
);

const onClick = () => {
    alert("Clicked")
};
