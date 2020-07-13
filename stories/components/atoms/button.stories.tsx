import * as React from "react";
import styled, {ThemeProvider} from "styled-components";
import {Button, DefaultAppTheme} from "../../../src";

export default {
  title: "Inputs|Button",
  component: Button
};

export const button = () =>
    <ThemeProvider theme={DefaultAppTheme}>
      <Button variant={"primary"} onClick={onClick}>
        Button
      </Button>
    </ThemeProvider>

export const primaryStyles = () => (
    <ThemeProvider theme={DefaultAppTheme}>
      <Container>
        <Button variant={"primary"} width={"225px"} onClick={onClick}>
          Primary
        </Button>
        <Button variant={"primaryOutlined"} width={"225px"} onClick={onClick}>
          Primary Outline
        </Button>
        <Button variant={"primaryOutlinedFilled"} width={"225px"} onClick={onClick}>
          Primary Outline Filled
        </Button>
      </Container>
    </ThemeProvider>
);

export const secondaryStyles = () => (
    <ThemeProvider theme={DefaultAppTheme}>
      <Container>
        <Button variant={"secondary"} width={"225px"} onClick={onClick}>
          Secondary
        </Button>
        <Button variant={"secondaryOutlined"} width={"225px"} onClick={onClick}>
          Secondary Outline
        </Button>
        <Button variant={"secondaryOutlinedFilled"} width={"225px"} onClick={onClick}>
          Secondary Outline Filled
        </Button>
      </Container>
    </ThemeProvider>
);
export const disabled = () => (
    <ThemeProvider theme={DefaultAppTheme}>
      <Container>
        <Button variant={"secondary"} width={"225px"} disabled onClick={onClick}>
          Disabled
        </Button>
        <Button variant={"secondaryOutlined"} width={"225px"} disabled onClick={onClick}>
          Disabled
        </Button>
        <Button variant={"secondaryOutlinedFilled"} width={"225px"} disabled onClick={onClick}>
          Disabled
        </Button>
      </Container>
    </ThemeProvider>
);

export const loading = () => (
    <ThemeProvider theme={DefaultAppTheme}>
      <Container>
        <Button variant={"primary"} width={"200px"} isLoading onClick={onClick}>
          Primary
        </Button>
        <Button variant={"primaryOutlined"} width={"200px"} isLoading onClick={onClick}>
          Primary Outline
        </Button>
        <Button variant={"secondary"} width={"200px"} isLoading onClick={onClick}>
          Secondary
        </Button>
        <Button variant={"secondaryOutlined"} width={"200px"} isLoading onClick={onClick}>
          Secondary Outline
        </Button>
      </Container>
    </ThemeProvider>
);

const onClick = () => {
  console.log("clicked");
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
