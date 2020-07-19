import {HorizontalDivider} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";
import * as React from "react";

export default {
  title: "Presentation|Divider",
  component: HorizontalDivider
};

export const horizontalDivider = () =>
    <StoriesDefaultThemeProvider>
      <div style={{ padding: "24px" }}>
        <HorizontalDivider/>
      </div>
    </StoriesDefaultThemeProvider>;

