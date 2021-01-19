import { Horizontal, SkeletonPlaceholder, Stretch, Vertical } from "../../../src";

import * as React from "react";

export default {
  title: "Atoms/Skeleton Placeholder",
  component: SkeletonPlaceholder,
};

export const circlePlaceholder = () => (
    <SkeletonPlaceholder style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
);

export const textPlaceholder = () => (
    <SkeletonPlaceholder style={{ width: "100px", height: "10px" }} />
);

export const panelPlaceholder = () => (
      <Horizontal verticalAlign={"center"}>
        <SkeletonPlaceholder style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
        <Stretch>
          <Vertical spacing={8}>
            <SkeletonPlaceholder style={{ height: "6px" }} />
            <SkeletonPlaceholder style={{ height: "6px" }} />
            <SkeletonPlaceholder style={{ height: "6px" }} />
          </Vertical>
        </Stretch>
      </Horizontal>
);
