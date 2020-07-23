import * as React from "react";

import styled from "styled-components";
import {
  BoxUnit,
  calculateUnit, content,
  contentHorizontal,
  contentVertical,
  defaultSpace,
  horizontallySpaced,
  verticallySpaced
} from "./box";
import {DivPrimitiveProps} from "../../others/types";

/**
 * Minimised version of gls https://github.com/basarat/gls as its just too good! 🌹
 * rewritten in styled component
 */
export interface SpacingProps {
  /** Spacing between each child */
  space?: BoxUnit,
}

export interface StretchProps {
  sizing?: number,
}

export interface HorizontalsAlignProps extends SpacingProps {
  verticalAlign?: "top" | "center" | "bottom" | "baseline",
  /** Child alignment in horizontal axis */
  horizontalAlign?: "left" | "center" | "right",
}

export const Horizontal = styled.div.attrs({
  "data-comment": "Horizontal"
})<HorizontalsAlignProps>`
 ${horizontallySpaced}
 ${contentHorizontal}
 ${({ horizontalAlign }) => horizontalAlign === "left" && `
    justify-content: flex-start;
 `};
 ${({ horizontalAlign }) => horizontalAlign === "center" && `
    justify-content: center;
 `};
 ${({ horizontalAlign }) => horizontalAlign === "right" && `
    justify-content: flex-end;
 `};
 ${({ verticalAlign }) => verticalAlign === "top" && `
    align-items: flex-start;
 `};
 ${({ verticalAlign }) => verticalAlign === "center" && `
    align-items: center;
 `};
 ${({ verticalAlign }) => verticalAlign === "bottom" && `
    align-items: flex-end;
 `};
 ${({ verticalAlign }) => verticalAlign === "baseline" && `
    align-items: baseline;
 `};
` as React.FunctionComponent<HorizontalsAlignProps & DivPrimitiveProps>;
Horizontal.displayName = "Horizontal";

export interface VerticalAlignProps extends SpacingProps {
  verticalAlign?: "center" | "bottom",
  horizontalAlign?: "left" | "center" | "right",
}

export const Vertical = styled.div.attrs({
  "data-comment": "Vertical"
})<VerticalAlignProps>`
 ${verticallySpaced}
 ${contentVertical}
 ${({ verticalAlign }) => verticalAlign === "center" && `
    justify-content: center;
 `};
 ${({ verticalAlign }) => verticalAlign === "bottom" && `
    justify-content: flex-end;
 `};
 ${({ horizontalAlign }) => horizontalAlign === "left" && `
    align-items: flex-start;
 `};
 ${({ horizontalAlign }) => horizontalAlign === "center" && `
    align-items: center;
 `};
 ${({ horizontalAlign }) => horizontalAlign === "right" && `
    align-items: flex-end;
 `};
` as React.FunctionComponent<VerticalAlignProps & DivPrimitiveProps>;
Vertical.displayName = "Vertical";

/**
 * Spacers
 */
export const StretchSpacer = styled.div.attrs({
  "data-comment": "StretchSpacer"
})<StretchProps>`
  flex: ${(props) => props.sizing || 1};
` as React.FunctionComponent<StretchProps & DivPrimitiveProps>;
StretchSpacer.displayName = "StretchSpacer";

export const HorizontalSpacer = styled.div.attrs({
  "data-comment": "HorizontalSpacer"
})<SpacingProps>`
  display: inline-block;
  width: ${(props) => calculateUnit(props.space ?? defaultSpace)}};
` as React.FunctionComponent<SpacingProps & DivPrimitiveProps>;
HorizontalSpacer.displayName = "HorizontalSpacer";

export const VerticalSpacer = styled.div.attrs({
  "data-comment": "VerticalSpacer"
})<SpacingProps>`
  height: ${(props) => calculateUnit(props.space ?? defaultSpace)}};
` as React.FunctionComponent<SpacingProps & DivPrimitiveProps>;

VerticalSpacer.displayName = "VerticalSpacer";

/**
 Containers:
 Content takes up as much space as needed its child.
 Stretch into the parent container.
 */
export const Content = styled.div.attrs({
  "data-comment": "Content"
})`
 ${content}
` as React.FunctionComponent<DivPrimitiveProps>;

export const Stretch = styled.div.attrs({
  "data-comment": "Stretch"
})<{ sizing?: number }>`
  flex: ${(props) => props.sizing || 1};
` as React.FunctionComponent<StretchProps & DivPrimitiveProps>;
