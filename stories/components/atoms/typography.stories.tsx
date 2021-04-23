import * as React from "react";
import {Heading1, Heading2, Heading3, Heading4, Heading5, ListItem, Paragraph, Text, Vertical} from "../../../src";

export default {
  title: "Atoms/Typography",
  component: Heading1,
};

export const headings = () => (
    <Vertical>
      <Heading1>Heading 1</Heading1>
      <Heading2>Heading 2</Heading2>
      <Heading3>Heading 3</Heading3>
      <Heading4>Heading 4</Heading4>
      <Heading5>Heading 5</Heading5>
    </Vertical>
);

export const texts = () => (
    <Vertical>
        <Paragraph>Paragraph</Paragraph>
        <Text>Text</Text>
        <div>
            <Text>List:</Text>
            <ul>
                <ListItem>List item one</ListItem>
                <ListItem>List item two</ListItem>
            </ul>
        </div>
    </Vertical>
);

