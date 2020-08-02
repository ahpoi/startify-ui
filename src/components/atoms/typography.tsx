import * as React from "react";
import * as CSS from "csstype";

import styled, {css} from "styled-components";
import {Breakpoints} from "../../styles/sizes";
import {DivPrimitiveProps} from "../others/types";

type HeadingPrimitiveType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

interface BaseTypographyProps {
  children: React.ReactNode;
  fontFamily?: CSS.FontFamilyProperty;
  fontWeight?: CSS.FontWeightProperty;
  textAlign?: CSS.TextAlignProperty;
  color?: CSS.Color
}

export interface HeadingProps extends BaseTypographyProps {
  fontSize?: {
    web?: CSS.FontSizeProperty<any>;
    mobile?: CSS.FontSizeProperty<any>;
  },
}

export interface TextProps extends BaseTypographyProps {
  fontSize?: CSS.FontSizeProperty<any>
  size?: "small" | "medium" | "large"
}

export const Heading1 = styled.h1<HeadingProps>`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.one.web};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color ?? props.theme.color.heading};
  margin: 0px;
  @media (max-width: ${Breakpoints.small}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.one.mobile};
  }
` as React.FunctionComponent<HeadingProps & HeadingPrimitiveType>;

export const Heading2 = styled.h2<HeadingProps>`
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.two.web};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  color: ${(props) => props.color ?? props.theme.color.heading};
  text-align: ${(props) => props.textAlign};
  margin: 0px;
  @media (max-width: ${Breakpoints.small}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.two.mobile};
  }
` as React.FunctionComponent<HeadingProps & HeadingPrimitiveType>;

export const Heading3 = styled.h3<HeadingProps>`
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.three.web};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color ?? props.theme.color.heading};
  margin: 0px;
  @media (max-width: ${Breakpoints.small}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.three.mobile};
  }
` as React.FunctionComponent<HeadingProps & HeadingPrimitiveType>;

export const Heading4 = styled.h4<HeadingProps>`
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.four.web};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color ?? props.theme.color.heading};
  margin: 0px;
  @media (max-width: ${Breakpoints.small}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.four.mobile};
  }
` as React.FunctionComponent<HeadingProps & HeadingPrimitiveType>;

export const Heading5 = styled.h5<HeadingProps>`
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.five.web};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color ?? props.theme.color.heading};
  margin: 0px;
  @media (max-width: ${Breakpoints.small}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.five.mobile};
  }
` as React.FunctionComponent<HeadingProps>;

const textCss = css<TextProps>`
  font-size: ${({ theme, size, fontSize }) => fontSize ?? theme.typography.text[size ?? "medium"]};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color ?? props.theme.color.textMid};
  margin: 0px;
  hyphens: manual;
`;

type ParagraphPrimitive = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>

export const Paragraph = styled.p<TextProps>`
  ${textCss}
` as React.FunctionComponent<TextProps & ParagraphPrimitive>;

export const ParagraphHeading = styled.p<TextProps>`
  ${textCss}
  color: ${({ color, theme }) => color ?? theme.color.heading};
` as React.FunctionComponent<TextProps & ParagraphPrimitive>;

export const ListItem = styled.li<TextProps>`
  ${textCss}
  margin: 0 0 6px 0;
` as React.FunctionComponent<TextProps & React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>>;

export const Text = styled.div`
  ${textCss}
` as React.FunctionComponent<TextProps & DivPrimitiveProps>;

export const SmallText = styled.div`
  ${textCss}
  font-size: ${(props) => props.theme.typography.text.small};
` as React.FunctionComponent<TextProps & DivPrimitiveProps>;

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
