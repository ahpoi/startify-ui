import * as React from "react";
import { Property } from "csstype";

import styled, { css } from "styled-components";
import { DivProps } from "../others/types";
import { breakpoints } from "../../styles/breakpoints";

type HeadingPrimitiveType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

interface BaseTypographyProps {
  children: React.ReactNode;
  fontFamily?: Property.FontFamily;
  fontWeight?: "light" | "normal" | "medium" | "bold";
  textAlign?: Property.TextAlign;
  color?: Property.Color;
}

export interface HeadingProps extends BaseTypographyProps {
  fontSize?: {
    web?: Property.FontSize<any>;
    mobile?: Property.FontSize<any>;
  };
}

export interface TextProps extends BaseTypographyProps {
  fontSize?: Property.FontSize<any>;
  size?: "sm" | "md" | "lg";
}

const base = css<HeadingProps | TextProps>`
  font-weight: ${(props) => props.theme.typography.fontWeight[props?.fontWeight ?? "normal"]};
  text-align: ${(props) => props.textAlign};
  margin: 0px;
`;

const baseHeading = css<HeadingProps>`
  ${base}
  font-family: ${(props) => props.fontFamily ?? props.theme.typography.fontFamily.heading};
  color: ${(props) => props.color ?? props.theme.typography.color.heading};
`;

export const Heading1 = styled.h1<HeadingProps>`
  ${baseHeading}
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.one.web};
  @media (max-width: ${breakpoints.sm}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.one.mobile};
  }
` as React.FunctionComponent<HeadingProps & HeadingPrimitiveType>;

export const Heading2 = styled.h2<HeadingProps>`
  ${baseHeading}
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.two.web};
  @media (max-width: ${breakpoints.sm}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.two.mobile};
  }
` as React.FunctionComponent<HeadingProps & HeadingPrimitiveType>;

export const Heading3 = styled.h3<HeadingProps>`
  ${baseHeading}
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.three.web};
  @media (max-width: ${breakpoints.sm}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.three.mobile};
  }
` as React.FunctionComponent<HeadingProps & HeadingPrimitiveType>;

export const Heading4 = styled.h4<HeadingProps>`
  ${baseHeading}
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.four.web};
  color: ${(props) => props.color ?? props.theme.typography.color.heading};
  @media (max-width: ${breakpoints.sm}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.four.mobile};
  }
` as React.FunctionComponent<HeadingProps & HeadingPrimitiveType>;

export const Heading5 = styled.h5<HeadingProps>`
  ${baseHeading}
  font-size: ${(props) => props.fontSize?.web ?? TypographyVariants.heading.five.web};
  @media (max-width: ${breakpoints.sm}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? TypographyVariants.heading.five.mobile};
  }
` as React.FunctionComponent<HeadingProps>;

const textCss = css<TextProps>`
  ${base}
  font-family: ${(props) => props.fontFamily ?? props.theme.typography.fontFamily.body};
  font-size: ${({ theme, size, fontSize }) => fontSize ?? theme.typography.size[size ?? "md"]};
  color: ${(props) => props.color ?? props.theme.typography.color.body.mid};
  hyphens: manual;
`;

type ParagraphPrimitive = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

export const Paragraph = styled.p<TextProps>`
  ${textCss}
` as React.FunctionComponent<TextProps & ParagraphPrimitive>;

export const ParagraphHeading = styled.p<TextProps>`
  ${textCss}
  color: ${({ color, theme }) => color ?? theme.typography.color.heading};
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
  font-size: ${(props) => props.theme.typography.size.sm};
` as React.FunctionComponent<TextProps & DivProps>;

const TypographyVariants = {
  heading: {
    one: {
      web: "36px",
      mobile: "28px",
    },
    two: {
      web: "30px",
      mobile: "24px",
    },
    three: {
      web: "26px",
      mobile: "20px",
    },
    four: {
      web: "20px",
      mobile: "16px",
    },
    five: {
      web: "16px",
      mobile: "14px",
    },
  },
};
