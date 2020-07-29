import * as React from "react";
import * as CSS from "csstype";

import styled, {css} from "styled-components";
import {calculateUnit, content, vertical} from "./gls/box";
import {DivPrimitiveProps} from "../others/types";
import {Breakpoints, MaxWidths, Spaces} from "../../styles/sizes";
import {Content} from "./gls/gls";

type BaseWidthProps = {
  maxWidth?: number;
}

type BackgroundColorProps = {
  backgroundColor?: CSS.BackgroundColorProperty
}

const cssFullWH = css`
  height: 100%;
  width: 100%;
`;

const cssBackgroundColor = css<BackgroundColorProps>`
  ${({ backgroundColor }) => backgroundColor && `
    background-color: ${backgroundColor};
 `};
`;

/**
 * Add padding to left and right when on mobile/tablet
 * Usually on Desktop we have a MaxWidth so no need for padding
 */
export const cssPageResponsiveSideSpace = css`
  @media (max-width: ${MaxWidths.pageContent}px) {
    padding-left: ${Spaces.medium}px;
    padding-right: ${Spaces.medium}px;
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
  "data-comment": "page-root"
})`
 ${cssFullWH}
 ${vertical}
 flex: 1;
` as React.FunctionComponent<DivPrimitiveProps>;

type PageBodyProps = {
  centered?: boolean;
  space?: {
    web?: {
      top?: number
      bottom?: number
    },
    mobile?: {
      top: number
      bottom: number
    }
  }
} & BaseWidthProps & BackgroundColorProps

const cssPageBody = css`
  flex: 1 1 auto;
  flex-direction: column;
  animation-name: fadeIn;
  animation-duration: 0.5s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const PageBody = styled.main.attrs({
  "data-comment": "page-body"
})<PageBodyProps>`
 ${content}
 ${cssPageResponsiveSideSpace}
 ${cssBackgroundColor}
 ${cssPageBody}
  margin: 0 auto;
  width: 100%;
  max-width: ${(props: PageBodyProps) => calculateUnit(props.maxWidth ?? MaxWidths.pageContent)};
  padding-top: ${(props) => calculateUnit(props.space?.web?.top ?? Spaces.medium)};
  padding-bottom: ${(props) => calculateUnit(props.space?.web?.bottom ?? Spaces.medium)};
  @media (max-width: ${Breakpoints.small}px) {
     padding-top: ${(props: PageBodyProps) => calculateUnit(props.space?.mobile?.top ?? 20)};
     padding-bottom: ${(props: PageBodyProps) => calculateUnit(props.space?.mobile?.bottom ?? 20)};
  }
` as React.FunctionComponent<PageBodyProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;

export const Header = styled.header<BaseWidthProps>`
 ${content}
 ${cssPageResponsiveSideSpace}
 ${cssBackgroundColor}
` as React.FunctionComponent<BaseWidthProps & BackgroundColorProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;

export const Footer = styled.footer<BaseWidthProps>`
 ${content}
 ${cssPageResponsiveSideSpace}
 ${cssBackgroundColor}
` as React.FunctionComponent<BaseWidthProps & BackgroundColorProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;

/**
 * Landing Pages are sometimes have full width images..etc
 * So we want it to be controlled by the LandingSection component
 */
export const LandingPageBody = styled.main.attrs({
  "data-comment": "page-body"
})<PageBodyProps>`
 ${content}
 ${cssPageBody}
` as React.FunctionComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;

type LandingPageSectionProps = {
  backgroundColor?: string
  centered?: boolean;
  isFullWidth?: boolean;
  verticalPadding?: number;
  children: React.ReactNode;
} & BaseWidthProps

export const LandingPageSection = (props: LandingPageSectionProps) => {
  return <Content style={{ width: "100%", backgroundColor: props.backgroundColor }}>
    <StyledLandingPageSection {...props}>
      {props.children}
    </StyledLandingPageSection>
  </Content>;
};

const StyledLandingPageSection = styled.section.attrs({
  "data-comment": "page-section"
})<LandingPageSectionProps>`
 ${cssPageResponsiveSideSpace}
 ${({ centered = true }) => centered && `
    margin: 0 auto;
 `};
  ${({ verticalPadding }) => verticalPadding && `
    padding-top: ${verticalPadding}px;
    padding-bottom: ${verticalPadding}px;
 `};
  max-width: ${(props: LandingPageSectionProps) => calculateUnit(props.maxWidth ?? MaxWidths.pageContent)};
` as React.FunctionComponent<LandingPageSectionProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
