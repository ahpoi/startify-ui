import * as React from "react";
import {Heading1, Heading2, Heading3, Heading4, Heading5, Paragraph, Vertical} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";

export default {
  title: "Atoms/Typography/Headings",
  component: Heading1
};

export const headings = () => (
    <StoriesDefaultThemeProvider>
      <Vertical>
        <Heading1>Heading 1</Heading1>
        <Heading2>Heading 2</Heading2>
        <Heading3>Heading 3</Heading3>
        <Heading4>Heading 4</Heading4>
        <Heading5>Heading 5</Heading5>
      </Vertical>
    </StoriesDefaultThemeProvider>
);

export const custom = () => (
    <StoriesDefaultThemeProvider>
      <Vertical>
        <Heading1 fontFamily={"sans-serif"} fontWeight={900} color={"#008DA6"} textAlign={"center"}
                  fontSize={{ web: "100px", mobile: "50px" }}>
          Heading 1
        </Heading1>
        <Heading2 fontFamily={"sans-serif"} fontWeight={900} color={"#008DA6"} textAlign={"center"}
                  fontSize={{ web: "90px", mobile: "40px" }}>
          Heading 2
        </Heading2>
        <Heading3 fontFamily={"sans-serif"} fontWeight={900} color={"#008DA6"} textAlign={"center"}
                  fontSize={{ web: "80px", mobile: "30px" }}>
          Heading 3
        </Heading3>
        <Heading4 fontFamily={"sans-serif"} fontWeight={900} color={"#008DA6"} textAlign={"center"}
                  fontSize={{ web: "70px", mobile: "20px" }}>
          Heading 4
        </Heading4>
        <Heading5 fontFamily={"sans-serif"} fontWeight={900} color={"#008DA6"} textAlign={"center"}
                  fontSize={{ web: "60px", mobile: "10px" }}>
          Heading 5
        </Heading5>
      </Vertical>
    </StoriesDefaultThemeProvider>
);
