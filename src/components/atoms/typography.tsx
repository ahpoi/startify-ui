import * as React from "react";

import styled from "styled-components";
import * as CSS from "csstype";
import {Breakpoints} from "../styles/sizes";

export interface TypographyProps {
  children: React.ReactNode;
  fontFamily?: CSS.FontFamilyProperty;
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
export const ParagraphHeading = (props: TypographyProps) => <StyledParagraphHeading {...props}/>;

export const Text = (props: TypographyProps) => <StyledText {...props}/>;
export const SmallText = (props: Omit<TypographyProps, "fontSize">) => <StyledSmallText {...props}/>;

const TypographyVariants = {
  heading: {
    one: {
      web: "36px",
      mobile: "28px"
    },
    two: {
      web: "30px",
      mobile: "24px"
    },
    three: {
      web: "26px",
      mobile: "20px"
    },
    four: {
      web: "20px",
      mobile: "16px"
    },
    five: {
      web: "16px",
      mobile: "14px"
    },
  }
};

const StyledHeading1 = styled.h1<TypographyProps>`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.one.web};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color ?? props.theme.color.heading};
  margin: 0px;
  @media (max-width: ${Breakpoints.small}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.one.mobile};
  }
`;

const StyledHeading2 = styled.h2<TypographyProps>`
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.two.web};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  color: ${(props) => props.color ?? props.theme.color.heading};
  text-align: ${(props) => props.textAlign};
  margin: 0px;
  @media (max-width: ${Breakpoints.small}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.two.mobile};
  }
`;

const StyledHeading3 = styled.h3<TypographyProps>`
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.three.web};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color ?? props.theme.color.heading};
  margin: 0px;
  @media (max-width: ${Breakpoints.small}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.three.mobile};
  }
`;

const StyledHeading4 = styled.h4<TypographyProps>`
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.four.web};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color ?? props.theme.color.heading};
  margin: 0px;
  @media (max-width: ${Breakpoints.small}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.four.mobile};
  }
`;

const StyledHeading5 = styled.h5<TypographyProps>`
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.five.web};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color ?? props.theme.color.heading};
  margin: 0px;
  @media (max-width: ${Breakpoints.small}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.five.mobile};
  }
`;

const StyledParagraph = styled.p<TypographyProps>`
  font-size: ${(props) => props.fontSize?.web ?? props.theme.typography.text.medium};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color ?? props.theme.color.textMid};
  margin: 0px;
  hyphens: auto;
`;

const StyledParagraphHeading = styled(StyledParagraph)`
  color: ${(props) => props.color ?? props.theme.color.heading};
`;

const StyledText = styled(StyledParagraph).attrs({ as: "div" })``;
const StyledSmallText = styled(StyledParagraph).attrs({ as: "div" })`
  font-size: ${(props) => props.theme.typography.text.small};
`;
