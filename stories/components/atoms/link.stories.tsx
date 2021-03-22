import * as React from "react";
import {Link, Vertical} from "../../../src";

export default {
    title: "Atoms/Link",
    component: Link,
};

export const link = () => (
    <Vertical>
        <Link href={"/hello"}>Link</Link>
        <Link href={"/hello"} underline={false}>Link with no underline</Link>
    </Vertical>
);

export const linkSizes = () => (
    <Vertical>
        <Link href={"/hello"} size={"xs"}>Link XS</Link>
        <Link href={"/hello"} size={"sm"}>Link SM</Link>
        <Link href={"/hello"} size={"md"}>Link MD</Link>
        <Link href={"/hello"} size={"lg"}>Link LG</Link>
    </Vertical>
);

export const linkColorScheme= () => (
    <Vertical>
        <Link href={"/hello"} colorScheme={"red"}>Link Red</Link>
        <Link href={"/hello"} colorScheme={"blue"}>Link Blue</Link>
        <Link href={"/hello"} colorScheme={"yellow"}>Link Yellow</Link>
    </Vertical>
);