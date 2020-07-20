import * as React from "react";
import {Badge, Horizontal, Vertical} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";

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



