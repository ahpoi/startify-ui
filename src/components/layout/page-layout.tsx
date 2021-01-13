import * as React from "react";
import { Property } from "csstype";

import styled, { css } from "styled-components";
import { calculateUnit, content, vertical } from "./gls/box";
import { DivProps } from "../others/types";
import { spaces } from "../../styles/spaces";
import { Content } from "./gls/gls";
import { fadeIn } from "../others/animations";
import { pageContainers } from "../../styles/containers";
import { breakpoints } from "../../styles/breakpoints";

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

export const cssBackgroundColor = css<BackgroundColorProps>`
  ${({ backgroundColor }) =>
    backgroundColor &&
    `
    background-color: ${backgroundColor};
 `};
`;

/**
 * Add padding to left and right when on mobile/tablet
 * Usually on Desktop we have a MaxWidth so no need for padding
 */
export const cssPageResponsiveSideSpace = css`
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

type PageBodyProps = {
  centered?: boolean;
  space?: {
    web?: {
      top?: number;
      bottom?: number;
    };
    mobile?: {
      top: number;
      bottom: number;
    };
  };
} & BaseWidthProps &
  BackgroundColorProps;

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
 ${cssBackgroundColor}
 ${cssPageBody}
  margin: 0 auto;
  width: 100%;
  max-width: ${(props: PageBodyProps) => calculateUnit(props.maxWidth ?? pageContainers.content)};
  padding-top: ${(props) => calculateUnit(props.space?.web?.top ?? spaces.md)};
  padding-bottom: ${(props) => calculateUnit(props.space?.web?.bottom ?? spaces.md)};
  @media (max-width: ${breakpoints.sm}px) {
    padding-top: ${(props: PageBodyProps) => calculateUnit(props.space?.mobile?.top ?? 20)};
    padding-bottom: ${(props: PageBodyProps) => calculateUnit(props.space?.mobile?.bottom ?? 20)};
  }
` as React.FunctionComponent<PageBodyProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;

type HeaderProps = {
  divider?: string;
};

export const Header = styled.header<HeaderProps>`
  ${content}
  ${cssPageResponsiveSideSpace}
 ${({ divider }) =>
    divider &&
    `
    border-bottom: ${divider};
 `};
` as React.FunctionComponent<HeaderProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;

export const Footer = styled.footer`
  ${content}
  ${cssPageResponsiveSideSpace}
` as React.FunctionComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;

/**
 * Landing Pages sometimes have full width images..etc
 * So we want it to be controlled by the LandingSection component
 */
export const LandingPageBody = styled.main.attrs({
  "data-comment": "page-body",
})<PageBodyProps>`
  ${content}
  ${cssPageBody}
` as React.FunctionComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;

type LandingPageSectionProps = {
  backgroundColor?: string;
  verticalPadding?: number;
  children: React.ReactNode;
} & BaseWidthProps;

export const LandingPageSection = (props: LandingPageSectionProps) => (
  <Content style={{ width: "100%", backgroundColor: props.backgroundColor }}>
    <StyledLandingPageSection {...props}>{props.children}</StyledLandingPageSection>
  </Content>
);

const StyledLandingPageSection = styled.section.attrs({
  "data-comment": "page-section",
})<LandingPageSectionProps>`
  ${cssPageResponsiveSideSpace}
  margin: 0 auto;
  ${({ verticalPadding }) =>
    verticalPadding &&
    `
    padding-top: ${verticalPadding}px;
    padding-bottom: ${verticalPadding}px;
 `};
  max-width: ${(props: LandingPageSectionProps) => calculateUnit(props.maxWidth ?? pageContainers.content)};
` as React.FunctionComponent<
  LandingPageSectionProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
>;
