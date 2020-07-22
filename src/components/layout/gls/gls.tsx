import * as React from "react";

import styled from "styled-components";
import {BoxUnit, contentHorizontal, contentVertical, horizontallySpaced, verticallySpaced} from "./box";

/**
 * Minimised version of gls  https://github.com/basarat/gls
 * rewritten in styled component
 */
export interface SpacingProp {
  /** Spacing between each child */
  space?: BoxUnit,
}

export interface HorizontalsAlignProps extends SpacingProp {
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
` as React.FunctionComponent<HorizontalsAlignProps>;

export interface VerticalAlignProps extends SpacingProp {
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
` as React.FunctionComponent<VerticalAlignProps>;

export const StretchSpacer = styled.div.attrs({
  "data-comment": "StretchSpacer"
})<{ sizing?: number }>`
  flex: ${(props) => props.sizing || 1};
`;
