import * as React from "react";
import {Badge, Horizontal, Vertical} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";

// @ts-ignore
export default {
  title: "Badge",
  component: Badge
};

export const badge = () =>
    <StoriesDefaultThemeProvider>
      <div>
        <Badge variant={"success"}>
          success
        </Badge>
      </div>
    </StoriesDefaultThemeProvider>;

export const variants = () =>
    <StoriesDefaultThemeProvider>
      <Vertical>
        <div>
          <Badge variant={"success"}>
            success
          </Badge>
        </div>
        <div>
          <Badge variant={"info"}>
            info
          </Badge>
        </div>
        <div>
          <Badge variant={"warning"}>
            warning
          </Badge>
        </div>
        <div>
          <Badge variant={"error"}>
            error
          </Badge>
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
    </StoriesDefaultThemeProvider>;

export const sizes = () =>
    <StoriesDefaultThemeProvider>
      <Horizontal>
        <div>
          <Badge variant={"success"} size={"small"}>
            small
          </Badge>
        </div>
        <div>
          <Badge variant={"success"} size={"medium"}>
            medium
          </Badge>
        </div>
        <div>
          <Badge variant={"success"} size={"large"}>
            large
          </Badge>
        </div>
      </Horizontal>
    </StoriesDefaultThemeProvider>;


export const clickable = () =>
    <StoriesDefaultThemeProvider>
      <Vertical>
        <div>
          <Badge variant={"success"} onClick={onClick}>
            success
          </Badge>
        </div>
        <div>
          <Badge variant={"info"} onClick={onClick}>
            info
          </Badge>
        </div>
        <div>
          <Badge variant={"warning"} onClick={onClick}>
            warning
          </Badge>
        </div>
        <div>
          <Badge variant={"error"} onClick={onClick}>
            error
          </Badge>
        </div>
      </Vertical>
    </StoriesDefaultThemeProvider>;


const onClick = () => {
  console.log("clicked");
};
