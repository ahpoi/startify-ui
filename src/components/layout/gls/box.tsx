import { css } from "styled-components";

/**
 * Minimised version of csstips (https://github.com/typestyle/csstips)
 * rewritten in styled component
 */

export type BoxUnit = number | string;

export const calculateUnit = (value: BoxUnit): string => (typeof value === "number" ? value.toString() + "px" : value);

export const flexRoot = css`
  display: flex;
`;

/**
 * If you want items to be sized automatically by their children use this
 * This is because of a bug in various flexbox implementations: http://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/
 * Specifically bug 1 : https://github.com/philipwalton/flexbugs#1-minimum-content-sizing-of-flex-items-not-honored
 */
export const content = css`
  flex-basis: auto;
  flex-shrink: 0;
`;

export const vertical = css`
  ${flexRoot}
  flex-direction: column;
`;

export const horizontal = css`
  ${flexRoot}
  flex-direction: row;
`;

export const contentHorizontal = css`
  ${content}
  ${horizontal}
`;

export const contentVertical = css`
  ${content}
  ${vertical}
`;

export const horizontallySpaced = css<{ spacing?: BoxUnit }>`
  & > * {
    margin-right: ${(props) => calculateUnit(props.spacing ?? props.theme.spaces.md)} !important;
  }
  &>*: last-child {
    margin-right: 0px !important;
  }
`;

export const verticallySpaced = css<{ spacing?: BoxUnit }>`
  & > * {
    margin-bottom: ${(props) => calculateUnit(props.spacing ?? props.theme.spaces.md)} !important;
  }
  &>*: last-child {
    margin-bottom: 0px !important;
  }
`;
