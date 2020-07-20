import * as React from "react";
import {Badge, Horizontal, Vertical} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";

// @ts-ignore
export default {
  title: "Presentation|Badge",
  component: Badge
};

export const badge = () =>
    <StoriesDefaultThemeProvider>
      <div>
        <Badge variant={"success"}>
          SUCCESS
        </Badge>
      </div>
    </StoriesDefaultThemeProvider>;

export const variants = () =>
    <StoriesDefaultThemeProvider>
      <Vertical>
        <div>
          <Badge variant={"success"}>
            SUCCESS
          </Badge>
        </div>
        <div>
          <Badge variant={"info"}>
            INFO
          </Badge>
        </div>
        <div>
          <Badge variant={"warning"}>
            WARNING
          </Badge>
        </div>
        <div>
          <Badge variant={"error"}>
            ERROR
          </Badge>
        </div>
      </Vertical>
    </StoriesDefaultThemeProvider>;

export const sizes = () =>
    <StoriesDefaultThemeProvider>
      <Horizontal>
        <div>
          <Badge variant={"success"} size={"small"}>
            SMALL
          </Badge>
        </div>
        <div>
          <Badge variant={"success"} size={"medium"}>
            MEDIUM
          </Badge>
        </div>
        <div>
          <Badge variant={"success"} size={"large"}>
            LARGE
          </Badge>
        </div>
      </Horizontal>
    </StoriesDefaultThemeProvider>;


export const clickable = () =>
    <StoriesDefaultThemeProvider>
      <Vertical>
        <div>
          <Badge variant={"success"} onClick={onClick}>
            SUCCESS
          </Badge>
        </div>
        <div>
          <Badge variant={"info"} onClick={onClick}>
            INFO
          </Badge>
        </div>
        <div>
          <Badge variant={"warning"} onClick={onClick}>
            WARNING
          </Badge>
        </div>
        <div>
          <Badge variant={"error"} onClick={onClick}>
            ERROR
          </Badge>
        </div>
      </Vertical>
    </StoriesDefaultThemeProvider>;


export const others = () =>
    <StoriesDefaultThemeProvider>
      <Horizontal>
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
      </Horizontal>
    </StoriesDefaultThemeProvider>;

const onClick = () => {
  console.log("clicked");
};
