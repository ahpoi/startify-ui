import * as React from "react";
import {Button, Horizontal} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";

export default {
    title: "Atoms/Button",
    component: Button,
};

export const button = () => (
    <StoriesDefaultThemeProvider>
        <Button variant={"solid"} colorScheme={"primary"} onClick={onClick}>
            Click me
        </Button>
    </StoriesDefaultThemeProvider>
);

export const variant = () => (
    <StoriesDefaultThemeProvider>
        <Horizontal>
            <Button variant={"solid"} onClick={onClick}>
                Solid
            </Button>
            <Button variant={"outlined"} onClick={onClick}>
                Outlined
            </Button>
            <Button variant={"outlined-filled"} onClick={onClick}>
                Outline Filled
            </Button>
            <Button variant={"ghost"} onClick={onClick}>
                Ghost
            </Button>
            <Button variant={"link"} onClick={onClick}>
                Link
            </Button>
        </Horizontal>
    </StoriesDefaultThemeProvider>
);

export const loading = () => (
    <StoriesDefaultThemeProvider>
        <Horizontal>
            <Button variant={"solid"} width={"200px"} isLoading onClick={onClick}>
                Primary
            </Button>
            <Button variant={"outlined"} width={"200px"} isLoading onClick={onClick}>
                Primary Outline
            </Button>
            <Button variant={"outlined-filled"} width={"200px"} isLoading onClick={onClick}>
                Secondary
            </Button>
            <Button variant={"ghost"} width={"200px"} isLoading onClick={onClick}>
                Secondary Outline
            </Button>
        </Horizontal>
    </StoriesDefaultThemeProvider>
);

export const sizeVariants = () => (
    <StoriesDefaultThemeProvider>
        <Horizontal verticalAlign={"center"}>
            <div>
                <Button size={"sm"} onClick={onClick}>
                    Small Button
                </Button>
            </div>
            <div>
                <Button size={"md"} onClick={onClick}>
                    Medium Button
                </Button>
            </div>
            <div>
                <Button size={"lg"} onClick={onClick}>
                    Large Button
                </Button>
            </div>
        </Horizontal>
    </StoriesDefaultThemeProvider>
);

export const sizeVariantsLoading = () => (
    <StoriesDefaultThemeProvider>
        <Horizontal verticalAlign={"center"}>
            <div>
                <Button size={"sm"} onClick={onClick} isLoading>
                    Small Button
                </Button>
            </div>
            <div>
                <Button size={"md"} onClick={onClick} isLoading>
                    Medium Button
                </Button>
            </div>
            <div>
                <Button size={"lg"} onClick={onClick} isLoading>
                    Large Button
                </Button>
            </div>
        </Horizontal>
    </StoriesDefaultThemeProvider>
);

export const disabled = () => (
    <StoriesDefaultThemeProvider>
        <Horizontal>
            <Button variant={"solid"} disabled onClick={onClick}>
                Disabled
            </Button>
            <Button variant={"outlined"} disabled onClick={onClick}>
                Disabled
            </Button>
            <Button variant={"outlined-filled"} disabled onClick={onClick}>
                Disabled
            </Button>
        </Horizontal>
    </StoriesDefaultThemeProvider>
);

export const others = () => (
    <StoriesDefaultThemeProvider>
        <Horizontal>
            <Button
                onClick={onClick}
                override={{
                    variant: {
                        color: "white",
                        colorOnHover: "white",
                        backgroundColor: "#3D96EF",
                        backgroundOnHoverColor: "#3592ef",
                        borderColor: "#3D96EF",
                        borderOnHoverColor: "#3D96EF",
                    },
                    size: {
                        fontSize: "14px",
                        fontWeight: 700,
                        padding: "12px 30px 12px",
                        borderRadius: "2px",
                    }
                }}
            >
                Custom Styled
            </Button>
        </Horizontal>
    </StoriesDefaultThemeProvider>
);

const onClick = () => {
    console.log("clicked");
};
