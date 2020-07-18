import * as React from "react";
import {Badge} from "../../../src";
import {StoriesDefaultThemeProvider, StoriesVerticalContainer} from "../../utils/stories-container";

export default {
  title: "Presentation|Badge",
  component: Badge
};

export const badge = () =>
    <StoriesDefaultThemeProvider>
      <StoriesVerticalContainer>
        <div>
          <Badge variant={"success"}>
            SUCCESS
          </Badge>
        </div>
      </StoriesVerticalContainer>
    </StoriesDefaultThemeProvider>;

export const variants = () =>
    <StoriesDefaultThemeProvider>
      <StoriesVerticalContainer>
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
      </StoriesVerticalContainer>
    </StoriesDefaultThemeProvider>
