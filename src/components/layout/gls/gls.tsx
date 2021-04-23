import styled from "styled-components";
import {
  BoxUnit,
  calculateUnit,
  content,
  contentHorizontal,
  contentVertical,
  horizontallySpaced,
  verticallySpaced,
} from "./box";
import { breakpoints } from "../../../theme/styles/breakpoints";

/**
 * Minimised version of gls https://github.com/basarat/gls as its just too good! 🌹
 * rewritten in styled component
 */
export interface SpacingProps {
  /** Spacing between each child */
  spacing?: BoxUnit;
}

export interface StretchProps {
  sizing?: number;
}

export interface HorizontalsAlignProps extends SpacingProps {
  verticalAlign?: "top" | "center" | "bottom" | "baseline";
  horizontalAlign?: "left" | "center" | "right";
}

export const Horizontal = styled.div.attrs({
  "data-comment": "Horizontal",
})<HorizontalsAlignProps>`
  ${horizontallySpaced}
  ${contentHorizontal}
 ${({ horizontalAlign }) =>
    horizontalAlign === "left" &&
    `
    justify-content: flex-start;
 `};
  ${({ horizontalAlign }) =>
    horizontalAlign === "center" &&
    `
    justify-content: center;
 `};
  ${({ horizontalAlign }) =>
    horizontalAlign === "right" &&
    `
    justify-content: flex-end;
 `};
  ${({ verticalAlign }) =>
    verticalAlign === "top" &&
    `
    align-items: flex-start;
 `};
  ${({ verticalAlign }) =>
    verticalAlign === "center" &&
    `
    align-items: center;
 `};
  ${({ verticalAlign }) =>
    verticalAlign === "bottom" &&
    `
    align-items: flex-end;
 `};
  ${({ verticalAlign }) =>
    verticalAlign === "baseline" &&
    `
    align-items: baseline;
 `};
`;

Horizontal.displayName = "Horizontal";

export interface VerticalAlignProps extends SpacingProps {
  verticalAlign?: "center" | "bottom";
  horizontalAlign?: "left" | "center" | "right";
}

export const Vertical = styled.div.attrs({
  "data-comment": "Vertical",
})<VerticalAlignProps>`
  ${verticallySpaced}
  ${contentVertical}
 ${({ verticalAlign }) =>
    verticalAlign === "center" &&
    `
    justify-content: center;
 `};
  ${({ verticalAlign }) =>
    verticalAlign === "bottom" &&
    `
    justify-content: flex-end;
 `};
  ${({ horizontalAlign }) =>
    horizontalAlign === "left" &&
    `
    align-items: flex-start;
 `};
  ${({ horizontalAlign }) =>
    horizontalAlign === "center" &&
    `
    align-items: center;
 `};
  ${({ horizontalAlign }) =>
    horizontalAlign === "right" &&
    `
    align-items: flex-end;
 `};
`;
Vertical.displayName = "Vertical";

interface ResponsiveProps {
  vertical?: VerticalAlignProps;
  horizontal?: HorizontalsAlignProps;
  breakpoint?: number;
}

/**
 * Improvement: Reuse CSS from Horizontal and Vertical layout
 */
export const Responsive = styled.div.attrs({
  "data-comment": "Responsive",
})<ResponsiveProps>`
  @media (max-width: ${breakpoints.sm}px) {
    ${contentVertical}
    & > * {
      margin-bottom: ${(props) => calculateUnit(props.vertical?.spacing ?? props.theme.spaces.md)} !important;
    }
    &>*: last-child {
      margin-bottom: 0px !important;
    }
    ${({ vertical }) =>
      vertical?.verticalAlign === "center" &&
      `
        justify-content: center;
     `};
    ${({ vertical }) =>
      vertical?.verticalAlign === "bottom" &&
      `
        justify-content: flex-end;
     `};
    ${({ vertical }) =>
      vertical?.horizontalAlign === "left" &&
      `
        align-items: flex-start;
     `};
    ${({ vertical }) =>
      vertical?.horizontalAlign === "center" &&
      `
        align-items: center;
     `};
    ${({ vertical }) =>
      vertical?.horizontalAlign === "right" &&
      `
        align-items: flex-end;
     `};
  }
  @media (min-width: ${breakpoints.sm + 1}px) {
    ${contentHorizontal}
    & > * {
      margin-right: ${(props) => calculateUnit(props.horizontal?.spacing ?? props.theme.spaces.md)} !important;
    }
    &>*: last-child {
      margin-right: 0px !important;
    }
    ${({ horizontal }) =>
      horizontal?.horizontalAlign === "left" &&
      `
        justify-content: flex-start;
     `};
    ${({ horizontal }) =>
      horizontal?.horizontalAlign === "center" &&
      `
        justify-content: center;
     `};
    ${({ horizontal }) =>
      horizontal?.horizontalAlign === "right" &&
      `
        justify-content: flex-end;
     `};
    ${({ horizontal }) =>
      horizontal?.verticalAlign === "top" &&
      `
        align-items: flex-start;
     `};
    ${({ horizontal }) =>
      horizontal?.verticalAlign === "center" &&
      `
        align-items: center;
     `};
    ${({ horizontal }) =>
      horizontal?.verticalAlign === "bottom" &&
      `
        align-items: flex-end;
     `};
    ${({ horizontal }) =>
      horizontal?.verticalAlign === "baseline" &&
      `
        align-items: baseline;
     `};
  }
`;
Vertical.displayName = "Responsive";

/**
 * Spacers
 */
export const StretchSpacer = styled.div.attrs({
  "data-comment": "StretchSpacer",
})<StretchProps>`
  flex: ${(props) => props.sizing || 1};
`;
StretchSpacer.displayName = "StretchSpacer";

export const HorizontalSpacer = styled.div.attrs({
  "data-comment": "HorizontalSpacer",
})<SpacingProps>`
  display: inline-block;
  width: ${(props) => calculateUnit(props.spacing ?? props.theme.spaces.md)}};
`;
HorizontalSpacer.displayName = "HorizontalSpacer";

export const VerticalSpacer = styled.div.attrs({
  "data-comment": "VerticalSpacer",
})<SpacingProps>`
  height: ${(props) => calculateUnit(props.spacing ?? props.theme.spaces.md)}};
`;

VerticalSpacer.displayName = "VerticalSpacer";

/**
 Containers:
 Content takes up as much space as needed its child.
 Stretch into the parent container.
 */
export const Content = styled.div.attrs({
  "data-comment": "Content",
})`
  ${content}
`;

export const Stretch = styled.div.attrs({
  "data-comment": "Stretch",
})<{ sizing?: number }>`
  flex: ${(props) => props.sizing || 1};
`;
