import * as React from "react";
import { BoxUnit, calculateUnit } from "./gls/box";
import styled from "styled-components";

export const ConditionalDisplay = (props: { when?: boolean; children: React.ReactNode }) => {
  return <>{props.when && props.children}</>;
};

/**
 * If you want a constrained max width layout
 */
interface MaxWidthProps {
  maxWidth?: BoxUnit;
  centered?: boolean;
  children?: React.ReactNode;
}

export const MaxWidth = styled.div<MaxWidthProps>`
  max-width: ${(props) => calculateUnit(props.maxWidth ?? props.theme.maxWidths.content)};
  width: 100%;
  ${({ centered }) =>
    centered &&
    `
    margin: 0 auto;
  `};
`;
