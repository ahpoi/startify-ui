import * as React from "react";
import {Button, Horizontal} from "../../../src";


export default {
    title: "Atoms/Button",
    component: Button,
};

export const button = () => (
    <div>
        <Button variant={"solid"} colorScheme={"green"} onClick={onClick}>
            Click me
        </Button>
    </div>
);

export const variant = () => (
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
);

export const loading = () => (
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
);

export const sizeVariants = () => (
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

);

export const sizeVariantsLoading = () => (
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
);

export const disabled = () => (
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
);

const onClick = () => {
    console.log("clicked");
};
