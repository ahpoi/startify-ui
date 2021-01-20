import { Horizontal, Skeleton, Stretch, Vertical } from "../../../src";

import * as React from "react";

export default {
  title: "Atoms/Skeleton",
  component: Skeleton,
};

export const circlePlaceholder = () => (
    <Skeleton style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
);

export const textPlaceholder = () => (
    <Skeleton style={{ width: "100px", height: "10px" }} />
);

export const panelPlaceholder = () => (
      <Horizontal verticalAlign={"center"}>
        <Skeleton style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
        <Stretch>
          <Vertical spacing={8}>
            <Skeleton style={{ height: "6px" }} />
            <Skeleton style={{ height: "6px" }} />
            <Skeleton style={{ height: "6px" }} />
          </Vertical>
        </Stretch>
      </Horizontal>
);
