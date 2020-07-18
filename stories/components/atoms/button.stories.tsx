import * as React from "react";
import styled from "styled-components";
import {Button} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";

export default {
  title: "Inputs|Button",
  component: Button
};

export const button = () =>
    <StoriesDefaultThemeProvider>
      <Button variant={"primary"} onClick={onClick}>
        Click me
      </Button>
    </StoriesDefaultThemeProvider>;

export const primaryVariants = () => (
    <StoriesDefaultThemeProvider>
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
    </StoriesDefaultThemeProvider>
);

export const secondaryVariants = () => (
    <StoriesDefaultThemeProvider>
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
    </StoriesDefaultThemeProvider>
);

export const loading = () => (
    <StoriesDefaultThemeProvider>
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
    </StoriesDefaultThemeProvider>
);

export const sizeVariants = () => (
    <StoriesDefaultThemeProvider>
      <Container>
        <div>
          <Button size={"small"} onClick={onClick}>
            Small
          </Button>
        </div>
        <div>
          <Button size={"medium"} onClick={onClick}>
            Medium
          </Button>
        </div>
        <div>
          <Button size={"large"} onClick={onClick}>
            Large
          </Button>
        </div>
      </Container>
    </StoriesDefaultThemeProvider>
);

export const sizeVariantsLoading = () => (
    <StoriesDefaultThemeProvider>
      <Container>
        <div>
          <Button size={"small"} onClick={onClick} isLoading>
            Small
          </Button>
        </div>
        <div>
          <Button size={"medium"} onClick={onClick} isLoading>
            Medium
          </Button>
        </div>
        <div>
          <Button size={"large"} onClick={onClick} isLoading>
            Large
          </Button>
        </div>
      </Container>
    </StoriesDefaultThemeProvider>
);

export const disabled = () => (
    <StoriesDefaultThemeProvider>
      <Container>
        <Button variant={"secondary"} disabled onClick={onClick}>
          Disabled
        </Button>
        <Button variant={"secondaryOutlined"} disabled onClick={onClick}>
          Disabled
        </Button>
        <Button variant={"secondaryOutlinedFilled"} disabled onClick={onClick}>
          Disabled
        </Button>
      </Container>
    </StoriesDefaultThemeProvider>
);

const onClick = () => {
  console.log("clicked");
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
