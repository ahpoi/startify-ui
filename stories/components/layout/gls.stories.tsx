import { Horizontal, HorizontalSpacer, Responsive, Stretch, Vertical, VerticalSpacer } from "../../../src";

import * as React from "react";

export default {
  title: "Layout/GLS",
};

export const horizontal = () => (
    <Horizontal>
      <Stretch style={{ backgroundColor: "darkorange" }}>Hello</Stretch>
      <Stretch style={{ backgroundColor: "lightpink" }}>World</Stretch>
    </Horizontal>
);

export const vertical = () => (
    <Vertical>
      <div style={{ backgroundColor: "darkorange" }}>Hello</div>
      <div style={{ backgroundColor: "lightpink" }}>World</div>
    </Vertical>
);

export const responsive = () => (
    <Responsive vertical={{spacing: 50}}>
      <div style={{ backgroundColor: "darkorange" }}>Hello</div>
      <div style={{ backgroundColor: "lightpink" }}>World</div>
    </Responsive>
);

export const verticalSpacers = () => (
    <div>
      <Stretch style={{ backgroundColor: "darkorange" }}>Hello</Stretch>
      <VerticalSpacer />
      <Stretch style={{ backgroundColor: "lightpink" }}>World</Stretch>
    </div>
);

export const horizontalSpacers = () => (
    <div style={{ display: "flex" }}>
      <Stretch style={{ backgroundColor: "darkorange" }}>Hello</Stretch>
      <HorizontalSpacer />
      <Stretch style={{ backgroundColor: "lightpink" }}>World</Stretch>
    </div>
);
