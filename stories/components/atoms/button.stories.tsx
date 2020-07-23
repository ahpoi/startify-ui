import * as React from "react";
import {Button, ButtonSizeVariants, Horizontal} from "../../../src";
import {StoriesDefaultThemeProvider} from "../../utils/stories-container";

export default {
  title: "Action|Button",
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
      <Horizontal>
        <Button variant={"primary"} onClick={onClick}>
          Primary
        </Button>
        <Button variant={"primaryOutlined"} onClick={onClick}>
          Primary Outline
        </Button>
        <Button variant={"primaryOutlinedFilled"} onClick={onClick}>
          Primary Outline Filled
        </Button>
        <Button variant={"textPrimary"} onClick={onClick}>
          Text Primary
        </Button>
        <Button variant={"textPrimaryFilled"} onClick={onClick}>
          Text Primary Filled
        </Button>
      </Horizontal>
    </StoriesDefaultThemeProvider>
);

export const secondaryVariants = () => (
    <StoriesDefaultThemeProvider>
      <Horizontal>
        <Button variant={"secondary"} onClick={onClick}>
          Secondary
        </Button>
        <Button variant={"secondaryOutlined"} onClick={onClick}>
          Secondary Outline
        </Button>
        <Button variant={"secondaryOutlinedFilled"} onClick={onClick}>
          Secondary Outline Filled
        </Button>
        <Button variant={"textSecondary"} onClick={onClick}>
          Text Secondary
        </Button>
        <Button variant={"textSecondaryFilled"} onClick={onClick}>
          Text Secondary Filled
        </Button>
      </Horizontal>
    </StoriesDefaultThemeProvider>
);

export const loading = () => (
    <StoriesDefaultThemeProvider>
      <Horizontal>
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
      </Horizontal>
    </StoriesDefaultThemeProvider>
);

export const sizeVariants = () => (
    <StoriesDefaultThemeProvider>
      <Horizontal verticalAlign={"center"}>
        <div>
          <Button size={"small"} onClick={onClick}>
            Small Button
          </Button>
        </div>
        <div>
          <Button size={"medium"} onClick={onClick}>
            Medium Button
          </Button>
        </div>
        <div>
          <Button size={"large"} onClick={onClick}>
            Large Button
          </Button>
        </div>
      </Horizontal>
    </StoriesDefaultThemeProvider>
);

export const sizeVariantsLoading = () => (
    <StoriesDefaultThemeProvider>
      <Horizontal verticalAlign={"center"}>
        <div>
          <Button size={"small"} onClick={onClick} isLoading>
            Small Button
          </Button>
        </div>
        <div>
          <Button size={"medium"} onClick={onClick} isLoading>
            Medium Button
          </Button>
        </div>
        <div>
          <Button size={"large"} onClick={onClick} isLoading>
            Large Button
          </Button>
        </div>
      </Horizontal>
    </StoriesDefaultThemeProvider>
);

export const disabled = () => (
    <StoriesDefaultThemeProvider>
      <Horizontal>
        <Button variant={"secondary"} disabled onClick={onClick}>
          Disabled
        </Button>
        <Button variant={"secondaryOutlined"} disabled onClick={onClick}>
          Disabled
        </Button>
        <Button variant={"secondaryOutlinedFilled"} disabled onClick={onClick}>
          Disabled
        </Button>
      </Horizontal>
    </StoriesDefaultThemeProvider>
);

export const others = () => (
    <StoriesDefaultThemeProvider>
      <Horizontal>
        <Button variant={"text"} onClick={onClick}>
          Text
        </Button>
        <Button variant={"text"}
                onClick={onClick}
                customSize={{
                  fontSize: "14px",
                  fontWeight: 700,
                  padding: ButtonSizeVariants.medium.padding
                }}
                customVariant={{
                  backgroundColor: "#3D96EF",
                  backgroundOnHoverColor: "#3592ef",
                  borderColor: "#3D96EF",
                  borderOnHoverColor: "#3D96EF",
                  color: "white",
                  colorOnHover: "white",
                  borderRadius: "2px"
                }}>
          Custom Styled
        </Button>
      </Horizontal>
    </StoriesDefaultThemeProvider>
);

const onClick = () => {
  console.log("clicked");
};
