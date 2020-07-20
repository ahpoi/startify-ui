import styled, {css} from "styled-components";

/**
 * Minimised version of csstips (https://github.com/typestyle/csstips) and https://github.com/basarat/gls
 * rewritten in styled component
 */

const defaultSpace = 24;

export type BoxUnit = number | string;

export const calculateUnit = (value: BoxUnit): string => typeof value === "number" ? value.toString() + "px" : value;

/**
 * If you want items to be sized automatically by their children use this
 * This is because of a bug in various flexbox implementations: http://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/
 * Specifically bug 1 : https://github.com/philipwalton/flexbugs#1-minimum-content-sizing-of-flex-items-not-honored
 */
export const content = css`
 display: flex;
 flex-basis: auto;
 flex-shrink: 0;
 flex-direction: row;
`;

export const contentHorizontal = css`
 ${content}
 flex-direction: row;
`;

export const contentVertical = css`
 ${content}
 flex-direction: column;
`;

export const horizontallySpaced = css<{ space?: BoxUnit }>`
 & > * {
   margin-right: ${props => calculateUnit(props.space ?? defaultSpace)} !important
 }
 & > *: last-child {
   margin-right: 0px !important
 }
`;

export const verticallySpaced = css<{ space?: BoxUnit }>`
 & > * {
   margin-bottom: ${props => calculateUnit(props.space ?? defaultSpace)} !important
 }
 & > *: last-child {
   margin-bottom: 0px !important
 }
`;

export const Horizontal = styled.div.attrs({
  "data-comment": "Horizontal"
})<{ space?: BoxUnit }>`
 ${horizontallySpaced}
 ${contentHorizontal}
`;

export const Vertical = styled.div.attrs({
  "data-comment": "Vertical"
})<{ space?: BoxUnit }>`
 ${verticallySpaced}
 ${contentVertical}
`;