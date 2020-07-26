import { Horizontal, HorizontalSpacer, Responsive, Stretch, Vertical, VerticalSpacer} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";
import * as React from "react";

export default {
  title: "Layout|GLS",
};

export const horizontal = () =>
    <StoriesDefaultThemeProvider>
      <Horizontal>
        <Stretch style={{ backgroundColor: "darkorange" }}>Hello</Stretch>
        <Stretch style={{ backgroundColor: "lightpink" }}>World</Stretch>
      </Horizontal>
    </StoriesDefaultThemeProvider>;

export const vertical = () =>
    <StoriesDefaultThemeProvider>
      <Vertical>
        <div style={{ backgroundColor: "darkorange" }}>Hello</div>
        <div style={{ backgroundColor: "lightpink" }}>World</div>
      </Vertical>
    </StoriesDefaultThemeProvider>;

export const responsive = () =>
    <StoriesDefaultThemeProvider>
      <Responsive>
        <div style={{ backgroundColor: "darkorange" }}>Hello</div>
        <div style={{ backgroundColor: "lightpink" }}>World</div>
      </Responsive>
    </StoriesDefaultThemeProvider>;

export const verticalSpacers = () =>
    <StoriesDefaultThemeProvider>
      <div>
        <Stretch style={{ backgroundColor: "darkorange" }}>Hello</Stretch>
        <VerticalSpacer/>
        <Stretch style={{ backgroundColor: "lightpink" }}>World</Stretch>
      </div>
    </StoriesDefaultThemeProvider>;

export const horizontalSpacers = () =>
    <StoriesDefaultThemeProvider>
      <div style={{ display: "flex" }}>
        <Stretch style={{ backgroundColor: "darkorange" }}>Hello</Stretch>
        <HorizontalSpacer/>
        <Stretch style={{ backgroundColor: "lightpink" }}>World</Stretch>
      </div>
    </StoriesDefaultThemeProvider>;
