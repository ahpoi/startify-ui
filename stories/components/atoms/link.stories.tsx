import * as React from "react";
import { Link, Vertical } from "../../../src";
import { StoriesDefaultThemeProvider } from "../../utils/stories-container";

export default {
  title: "Atoms/Link",
  component: Link,
};

export const link = () => (
  <StoriesDefaultThemeProvider>
    <Vertical>
      <Link href={"/hello"}>Link</Link>
    </Vertical>
  </StoriesDefaultThemeProvider>
);

export const linkColorScheme = () => (
  <StoriesDefaultThemeProvider>
    <Vertical>
      <Link href={"/hello"} underline={false} colorScheme={"primary"}>
        Link
      </Link>
    </Vertical>
  </StoriesDefaultThemeProvider>
);