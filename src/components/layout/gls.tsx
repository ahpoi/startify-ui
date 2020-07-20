import styled from "styled-components";
import {BoxUnit, contentHorizontal, contentVertical, horizontallySpaced, verticallySpaced} from "./box";

/**
 * Minimised version of gls  https://github.com/basarat/gls
 * rewritten in styled component
 */

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
