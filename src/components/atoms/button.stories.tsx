import * as React from "react";
import {Button} from "./button";
import styled, {ThemeProvider} from "styled-components";
import {MainTheme} from "../theme/theme";

export default {
  title: "Inputs|Button",
  component: Button
};

export const ButtonStyles = () => (
    <ThemeProvider theme={MainTheme}>
      <Container>
        <Button variant={"primary"} width={"200px"} onClick={() => (0)}>
          Primary
        </Button>
        <Button variant={"primaryOutlined"} width={"200px"} onClick={() => (0)}>
          Primary Outline
        </Button>
        <Button variant={"secondary"} width={"200px"} onClick={() => (0)}>
          Secondary
        </Button>
        <Button variant={"secondaryOutlined"} width={"200px"} onClick={() => (0)}>
          Secondary Outline
        </Button>
      </Container>
    </ThemeProvider>
);

export const ButtonLoading = () => (
    <ThemeProvider theme={MainTheme}>
      <Container>
        <Button variant={"primary"} width={"200px"} isLoading onClick={() => (0)}>
          Primary
        </Button>
        <Button variant={"primaryOutlined"} width={"200px"} isLoading onClick={() => (0)}>
          Primary Outline
        </Button>
        <Button variant={"secondary"} width={"200px"} isLoading onClick={() => (0)}>
          Secondary
        </Button>
        <Button variant={"secondaryOutlined"} width={"200px"} isLoading onClick={() => (0)}>
          Secondary Outline
        </Button>
      </Container>
    </ThemeProvider>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
