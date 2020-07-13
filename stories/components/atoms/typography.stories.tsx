import * as React from "react";
import styled, {ThemeProvider} from "styled-components";
import {Heading1, Heading2, Heading3, Heading4, Heading5, MainTheme, Paragraph} from "../../../src";

export default {
  title: "Typography|Typography",
  component: Heading1
};

export const typography = () => (
    <ThemeProvider theme={MainTheme}>
      <Container>
        <Heading1>Heading 1</Heading1>
        <Heading2>Heading 2</Heading2>
        <Heading3>Heading 3</Heading3>
        <Heading4>Heading 4</Heading4>
        <Heading5>Heading 5</Heading5>
        <Paragraph>Paragraph</Paragraph>
      </Container>
    </ThemeProvider>
);

export const custom = () => (
    <ThemeProvider theme={MainTheme}>
      <Container>
        <Heading1 fontWeight={900} color={"#008DA6"} textAlign={"center"} fontSize={{ web: "100px", mobile: "50px" }}>
          Heading 1
        </Heading1>
        <Heading2 fontWeight={900} color={"#008DA6"} textAlign={"center"} fontSize={{ web: "90px", mobile: "40px" }}>
          Heading 2
        </Heading2>
        <Heading3 fontWeight={900} color={"#008DA6"} textAlign={"center"} fontSize={{ web: "80px", mobile: "30px" }}>
          Heading 3
        </Heading3>
        <Heading4 fontWeight={900} color={"#008DA6"} textAlign={"center"} fontSize={{ web: "70px", mobile: "20px" }}>
          Heading 4
        </Heading4>
        <Heading5 fontWeight={900} color={"#008DA6"} textAlign={"center"} fontSize={{ web: "60px", mobile: "10px" }}>
          Heading 5
        </Heading5>
        <Paragraph fontWeight={900} color={"#008DA6"} textAlign={"center"} fontSize={{ web: "50px", mobile: "5px" }}>
          Paragraph
        </Paragraph>
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
