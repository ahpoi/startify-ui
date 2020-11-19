import * as React from "react";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5, ListItem,
  Paragraph,
  ParagraphHeading,
  SmallText,
  Text, Vertical
} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";

export default {
  title: "Typography",
  component: Heading1
};

export const typography = () => (
    <StoriesDefaultThemeProvider>
      <Vertical>
        <Heading1>Heading 1</Heading1>
        <Heading2>Heading 2</Heading2>
        <Heading3>Heading 3</Heading3>
        <Heading4>Heading 4</Heading4>
        <Heading5>Heading 5</Heading5>
        <ParagraphHeading>Paragraph Heading</ParagraphHeading>
        <Paragraph>Paragraph</Paragraph>
        <Text>Text</Text>
        <SmallText>Small Text</SmallText>
        <div>
          <Text>List:</Text>
          <ul>
            <ListItem>List item one</ListItem>
            <ListItem>List item two</ListItem>
          </ul>
        </div>
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
        <Paragraph color={"#008DA6"} textAlign={"center"}
                   size={"small"}>
          Paragraph Small
        </Paragraph>
        <Paragraph  color={"#008DA6"} textAlign={"center"}
                   size={"medium"}>
          Paragraph medium
        </Paragraph>
        <Paragraph color={"#008DA6"} textAlign={"center"}
                   size={"large"}>
          Paragraph large
        </Paragraph>
        <Paragraph fontFamily={"sans-serif"} fontWeight={900} color={"#008DA6"} textAlign={"center"}
                   fontSize={"20px"}>
          Paragraph
        </Paragraph>
      </Vertical>
    </StoriesDefaultThemeProvider>
);
