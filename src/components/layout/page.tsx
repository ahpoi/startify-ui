import * as React from "react";
import { Property } from "csstype";

import styled, { css } from "styled-components";
import { calculateUnit, content, vertical } from "./gls/box";
import { DivProps } from "../others/types";
import { spaces } from "../../theme/styles/spaces";
import { fadeIn } from "../others/animations";
import { pageContainers } from "../../theme/styles/containers";
import { breakpoints } from "../../theme/styles/breakpoints";

export type BaseWidthProps = {
  maxWidth?: number;
};

export type BackgroundColorProps = {
  backgroundColor?: Property.BackgroundColor;
};

const cssFullWH = css`
  height: 100%;
  width: 100%;
`;

/**
 * Add padding to left and right when on mobile/tablet
 * Usually on Desktop we have a MaxWidth so no need for padding
 */
const cssPageResponsiveSideSpace = css`
  @media (max-width: ${breakpoints.lg}px) {
    padding-left: ${spaces.sm}px;
    padding-right: ${spaces.sm}px;
  }
`;

/**
 * Please use <GlobalStyle/> first to setup and normalised the html/body/setup flex..etc
 *  <PageRoot>
 *    <PageHeader>
 *    <PageBody>
 *       <div> My Components </div>
 *    <PageBody/>
 *    <PageFooter/>
 *  </PageRoot>
 */
/**
 * Creates a full page height flexbox
 */
export const PageRoot = styled.div.attrs({
  "data-comment": "page-root",
})`
  ${cssFullWH}
  ${vertical}
 flex: 1;
` as React.FunctionComponent<DivProps>;

type PageBodyProps = {} & BaseWidthProps & BackgroundColorProps;

const cssPageBody = css`
  flex: 1 1 auto;
  flex-direction: column;
  ${fadeIn}
`;

export const PageBody = styled.main.attrs({
  "data-comment": "page-body",
})<PageBodyProps>`
  ${content}
  ${cssPageResponsiveSideSpace}
 ${cssPageBody};
  margin: 0 auto;
  width: 100%;
  max-width: ${(props: PageBodyProps) => calculateUnit(props.maxWidth ?? pageContainers.content)};
  padding: 24px 0;
` as React.FunctionComponent<PageBodyProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;

export const Header = styled.header`
  ${content}
  ${cssPageResponsiveSideSpace}
` as React.FunctionComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;

export const Footer = styled.footer`
  ${content}
  ${cssPageResponsiveSideSpace}
` as React.FunctionComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
