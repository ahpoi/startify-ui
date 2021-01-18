import * as React from "react";
import { Badge, Horizontal, Vertical } from "../../../src";
import { StoriesDefaultThemeProvider } from "../../utils/stories-container";

// @ts-ignore
export default {
  title: "Atoms/Badge",
  component: Badge,
};

export const badge = () => (
  <StoriesDefaultThemeProvider>
    <div>
      <Badge variant={"success"}>success</Badge>
    </div>
  </StoriesDefaultThemeProvider>
);

export const variants = () => (
  <StoriesDefaultThemeProvider>
    <Vertical>
      <div>
        <Badge variant={"success"}>success</Badge>
      </div>
      <div>
        <Badge variant={"info"}>info</Badge>
      </div>
      <div>
        <Badge variant={"warning"}>warning</Badge>
      </div>
      <div>
        <Badge variant={"error"}>error</Badge>
      </div>
      <div>
        <Badge variant={"primary"} onClick={onClick}>
          Primary
        </Badge>
      </div>
      <div>
        <Badge variant={"secondary"} onClick={onClick}>
          Secondary
        </Badge>
      </div>
    </Vertical>
  </StoriesDefaultThemeProvider>
);

export const sizes = () => (
  <StoriesDefaultThemeProvider>
    <Horizontal>
      <div>
        <Badge variant={"success"} size={"sm"}>
          small
        </Badge>
      </div>
      <div>
        <Badge variant={"success"} size={"md"}>
          medium
        </Badge>
      </div>
      <div>
        <Badge variant={"success"} size={"lg"}>
          large
        </Badge>
      </div>
    </Horizontal>
  </StoriesDefaultThemeProvider>
);

export const clickable = () => (
  <StoriesDefaultThemeProvider>
    <Vertical>
      <div>
        <Badge variant={"success"} onClick={onClick}>
          Success
        </Badge>
      </div>
      <div>
        <Badge variant={"info"} onClick={onClick}>
          Info
        </Badge>
      </div>
      <div>
        <Badge variant={"warning"} onClick={onClick}>
          Warning
        </Badge>
      </div>
      <div>
        <Badge variant={"error"} onClick={onClick}>
          Error
        </Badge>
      </div>
    </Vertical>
  </StoriesDefaultThemeProvider>
);

const onClick = () => {
  console.log("clicked");
};
