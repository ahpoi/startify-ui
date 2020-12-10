import * as React from "react";
import {Property} from "csstype";

import styled, {css} from "styled-components";
import {Breakpoints} from "../../styles/sizes";
import {DivProps} from "../others/types";

type HeadingPrimitiveType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

interface BaseTypographyProps {
  children: React.ReactNode;
  fontFamily?: Property.FontFamily;
  fontWeight?: "light" | "normal" | "medium" | "bold"
  textAlign?: Property.TextAlign;
  color?: Property.Color
}

export interface HeadingProps extends BaseTypographyProps {
  fontSize?: {
    web?: Property.FontSize<any>;
    mobile?: Property.FontSize<any>;
  }
}

export interface TextProps extends BaseTypographyProps {
  fontSize?: Property.FontSize<any>
  size?: "small" | "medium" | "large"
}

const base = css<HeadingProps | TextProps>`
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.theme.typography.fontWeight[props?.fontWeight ?? "normal"]};
  text-align: ${(props) => props.textAlign};
  margin: 0px;
`;
export const Heading1 = styled.h1<HeadingProps>`
  ${base}
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.one.web};
  color: ${(props) => props.color ?? props.theme.color.heading};
  @media (max-width: ${Breakpoints.small}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.one.mobile};
  }
` as React.FunctionComponent<HeadingProps & HeadingPrimitiveType>;

export const Heading2 = styled.h2<HeadingProps>`
  ${base}
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.two.web};
  color: ${(props) => props.color ?? props.theme.color.heading};
  @media (max-width: ${Breakpoints.small}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.two.mobile};
  }
` as React.FunctionComponent<HeadingProps & HeadingPrimitiveType>;

export const Heading3 = styled.h3<HeadingProps>`
  ${base}
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.three.web};
  color: ${(props) => props.color ?? props.theme.color.heading};
  @media (max-width: ${Breakpoints.small}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.three.mobile};
  }
` as React.FunctionComponent<HeadingProps & HeadingPrimitiveType>;

export const Heading4 = styled.h4<HeadingProps>`
  ${base}
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.four.web};
  color: ${(props) => props.color ?? props.theme.color.heading};
  @media (max-width: ${Breakpoints.small}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.four.mobile};
  }
` as React.FunctionComponent<HeadingProps & HeadingPrimitiveType>;

export const Heading5 = styled.h5<HeadingProps>`
  ${base}
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.five.web};
  color: ${(props) => props.color ?? props.theme.color.heading};
  @media (max-width: ${Breakpoints.small}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.five.mobile};
  }
` as React.FunctionComponent<HeadingProps>;

const textCss = css<TextProps>`
  ${base}
  font-size: ${({ theme, size, fontSize }) => fontSize ?? theme.typography.text[size ?? "medium"]};
  color: ${(props) => props.color ?? props.theme.color.textMid};
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
` as React.FunctionComponent<TextProps & DivProps>;

export const SmallText = styled.div`
  ${textCss}
  font-size: ${(props) => props.theme.typography.text.small};
` as React.FunctionComponent<TextProps & DivProps>;

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
