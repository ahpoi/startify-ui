import * as React from "react";
import styled, {ThemeProvider} from "styled-components";
import {MainTheme} from "../theme/theme";
import {Heading1, Heading2, Heading3, Heading4, Heading5} from "./typography";

export default {
  title: "Typography|Headings",
  component: Heading1
};

export const HeadingLevels = () => (
    <ThemeProvider theme={MainTheme}>
      <Container>
        <Heading1>Heading 1</Heading1>
        <Heading2>Heading 2</Heading2>
        <Heading3>Heading 3</Heading3>
        <Heading4>Heading 4</Heading4>
        <Heading5>Heading 5</Heading5>
      </Container>
    </ThemeProvider>
);

export const HeadingLevelsStyles = () => (
    <ThemeProvider theme={MainTheme}>
      <Container>
        <Heading1 color={"blue"}>Heading 1</Heading1>
        <Heading2 color={"red"}>Heading 2</Heading2>
        <Heading3 color={"green"}>Heading 3</Heading3>
        <Heading4 color={"purple"}>Heading 4</Heading4>
        <Heading5 color={"night"}>Heading 5</Heading5>
      </Container>
    </ThemeProvider>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &>*+* {
   margin-top: 16px
  };
`;
