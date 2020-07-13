import * as React from "react";

import styled from "styled-components";
import {Breakpoints} from "../theme/theme";
import * as CSS from "csstype";

export interface TypographyProps {
  children: React.ReactNode;
  fontWeight?: CSS.FontWeightProperty;
  fontSize?: {
    web?: string;
    mobile?: string;
  },
  textAlign?: CSS.TextAlignProperty;
  color?: CSS.Color
}

export const Heading1 = (props: TypographyProps) => <StyledHeading1 {...props}/>;
export const Heading2 = (props: TypographyProps) => <StyledHeading2 {...props}/>;
export const Heading3 = (props: TypographyProps) => <StyledHeading3 {...props}/>;
export const Heading4 = (props: TypographyProps) => <StyledHeading4 {...props}/>;
export const Heading5 = (props: TypographyProps) => <StyledHeading5 {...props}/>;

export const Paragraph = (props: TypographyProps) => <StyledParagraph {...props}/>;

const StyledHeading1 = styled.h1<TypographyProps>`
  font-size: ${(props) => props.fontSize?.web ?? props.theme.typography.heading.one.web};
  font-weight: ${(props) => props.fontWeight ?? 'normal'};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color ?? props.theme.typography.color.mid};
  margin: 0px;
  @media (max-width: ${Breakpoints.small}) {
    font-size: ${(props) => props.fontSize?.mobile ?? props.theme.typography.heading.one.mobile};
  }
`;

const StyledHeading2 = styled.h2<TypographyProps>`
  font-size: ${(props) => props.fontSize?.web ?? props.theme.typography.heading.two.web};
  font-weight: ${(props) => props.fontWeight ?? 'normal'};
  color: ${(props) => props.color ?? props.theme.typography.color.mid};
  text-align: ${(props) => props.textAlign};
  margin: 0px;
  @media (max-width: ${Breakpoints.small}) {
    font-size: ${(props) => props.fontSize?.mobile ?? props.theme.typography.heading.two.mobile};
  }
`;

const StyledHeading3 = styled.h3<TypographyProps>`
  font-size: ${(props) => props.fontSize?.web ?? props.theme.typography.heading.three.web};
  font-weight: ${(props) => props.fontWeight ?? 'normal'};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color ?? props.theme.typography.color.mid};
  margin: 0px;
  @media (max-width: ${Breakpoints.small}) {
    font-size: ${(props) => props.fontSize?.mobile ?? props.theme.typography.heading.three.mobile};
  }
`;

const StyledHeading4 = styled.h4<TypographyProps>`
  font-size: ${(props) => props.fontSize?.web ?? props.theme.typography.heading.four.web};
  font-weight: ${(props) => props.fontWeight ?? 'normal'};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color ?? props.theme.typography.color.mid};
  margin: 0px;
  @media (max-width: ${Breakpoints.small}) {
    font-size: ${(props) => props.fontSize?.mobile ?? props.theme.typography.heading.four.mobile};
  }
`;

const StyledHeading5 = styled.h5<TypographyProps>`
  font-size: ${(props) => props.fontSize?.web ?? props.theme.typography.heading.five.web};
  font-weight: ${(props) => props.fontWeight ?? 'normal'};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color ?? props.theme.typography.color.mid};
  margin: 0px;
  @media (max-width: ${Breakpoints.small}) {
    font-size: ${(props) => props.fontSize?.mobile ?? props.theme.typography.heading.five.mobile};
  }
`;

const StyledParagraph = styled.p<TypographyProps>`
  font-size: ${(props) => props.fontSize?.web ?? props.theme.typography.paragraph.web};
  font-weight: ${(props) => props.fontWeight ?? 'normal'};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color ?? props.theme.typography.color.mid};
  margin: 0px;
  @media (max-width: ${Breakpoints.small}) {
    font-size: ${(props) => props.fontSize?.mobile ?? props.theme.typography.paragraph.mobile};
  }
`;
