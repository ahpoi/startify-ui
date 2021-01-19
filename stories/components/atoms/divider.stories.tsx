import { HorizontalDivider, VerticalDivider } from "../../../src";
import * as React from "react";

export default {
  title: "Atoms/Divider",
  component: HorizontalDivider,
};

export const horizontalDivider = () => (
    <div style={{ padding: "24px" }}>
      <HorizontalDivider />
    </div>
);

export const verticalDivider = () => (
    <div style={{ padding: "24px", height: "200px" }}>
      <VerticalDivider />
    </div>
);
