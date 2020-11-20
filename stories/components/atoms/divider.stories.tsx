import {HorizontalDivider, VerticalDivider} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";
import * as React from "react";

export default {
  title: "Atoms/Divider",
  component: HorizontalDivider
};

export const horizontalDivider = () =>
    <StoriesDefaultThemeProvider>
      <div style={{ padding: "24px" }}>
        <HorizontalDivider/>
      </div>
    </StoriesDefaultThemeProvider>;

export const verticalDivider = () =>
    <StoriesDefaultThemeProvider>
      <div style={{ padding: "24px", height: "200px" }}>
        <VerticalDivider/>
      </div>
    </StoriesDefaultThemeProvider>;
