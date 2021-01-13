import * as React from "react";
import { ListItem, Paragraph, ParagraphHeading, SmallText, Text, Vertical } from "../../../src";
import { StoriesDefaultThemeProvider } from "../../utils/stories-container";

export default {
  title: "Atoms/Typography/Text",
  component: Text,
};

export const texts = () => (
  <StoriesDefaultThemeProvider>
    <Vertical>
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
      <Paragraph color={"#008DA6"} textAlign={"center"} size={"sm"}>
        Paragraph Small
      </Paragraph>
      <Paragraph color={"#008DA6"} textAlign={"center"} size={"md"}>
        Paragraph medium
      </Paragraph>
      <Paragraph color={"#008DA6"} textAlign={"center"} size={"lg"}>
        Paragraph large
      </Paragraph>
      <Paragraph fontFamily={"sans-serif"} fontWeight={"bold"} color={"#008DA6"} textAlign={"center"} fontSize={"20px"}>
        Paragraph
      </Paragraph>
    </Vertical>
  </StoriesDefaultThemeProvider>
);
