import {Horizontal, Panel, SkeletonPlaceholder, Stretch, Vertical} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";
import * as React from "react";

export default {
  title: "Skeleton Placeholder",
};

export const circlePlaceholder = () =>
    <StoriesDefaultThemeProvider>
      <SkeletonPlaceholder style={{ width: "50px", height: "50px", borderRadius: "50%" }}/>
    </StoriesDefaultThemeProvider>;

export const textPlaceholder = () =>
    <StoriesDefaultThemeProvider>
      <SkeletonPlaceholder style={{ width: "100px", height: "10px" }}/>
    </StoriesDefaultThemeProvider>;

export const panelPlaceholder = () =>
    <StoriesDefaultThemeProvider>
      <Panel>
        <Horizontal verticalAlign={"center"}>
          <SkeletonPlaceholder style={{ width: "50px", height: "50px", borderRadius: "50%" }}/>
          <Stretch>
            <Vertical spacing={8}>
              <SkeletonPlaceholder style={{ height: "6px" }}/>
              <SkeletonPlaceholder style={{ height: "6px" }}/>
              <SkeletonPlaceholder style={{ height: "6px" }}/>
            </Vertical>
          </Stretch>
        </Horizontal>
      </Panel>
    </StoriesDefaultThemeProvider>;
