import * as React from "react";
import {Badge, Vertical} from "../../../src";
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
