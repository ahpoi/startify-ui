import * as React from "react";
import { Property } from "csstype";

import styled, { css } from "styled-components";
import { breakpoints } from "../../theme/styles/breakpoints";
import { DivProps } from "../others/types";

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
  padding: 0px;
`;

const baseHeading = css<HeadingProps>`
  ${base}
  font-family: ${(props) => props.fontFamily ?? props.theme.typography.fontFamily.heading};
  color: ${(props) => props.color ?? props.theme.typography.color.heading};
`;

export const Heading1 = styled.h1<HeadingProps>`
  ${baseHeading}
  font-size: ${(props) => props.fontSize?.web ?? props.theme.typography.size.heading["1"].web};
  @media (max-width: ${breakpoints.sm}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? props.theme.typography.size.heading["1"].mobile};
  }
` as React.FunctionComponent<HeadingProps & HeadingPrimitiveType>;

export const Heading2 = styled.h2<HeadingProps>`
  ${baseHeading}
  font-size: ${(props) => props.fontSize?.web ?? props.theme.typography.size.heading["2"].web};
  @media (max-width: ${breakpoints.sm}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? props.theme.typography.size.heading["2"].mobile};
  }
` as React.FunctionComponent<HeadingProps & HeadingPrimitiveType>;

export const Heading3 = styled.h3<HeadingProps>`
  ${baseHeading}
  font-size: ${(props) => props.fontSize?.web ?? props.theme.typography.size.heading["3"].web};
  @media (max-width: ${breakpoints.sm}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? props.theme.typography.size.heading["3"].mobile};
  }
` as React.FunctionComponent<HeadingProps & HeadingPrimitiveType>;

export const Heading4 = styled.h4<HeadingProps>`
  ${baseHeading}
  font-size: ${(props) => props.fontSize?.web ?? props.theme.typography.size.heading["4"].web};
  color: ${(props) => props.color ?? props.theme.typography.color.heading};
  @media (max-width: ${breakpoints.sm}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? props.theme.typography.size.heading["4"].mobile};
  }
` as React.FunctionComponent<HeadingProps & HeadingPrimitiveType>;

export const Heading5 = styled.h5<HeadingProps>`
  ${baseHeading}
  font-size: ${(props) => props.fontSize?.web ?? props.theme.typography.size.heading["5"].web};
  @media (max-width: ${breakpoints.sm}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? props.theme.typography.size.heading["5"].mobile};
  }
` as React.FunctionComponent<HeadingProps>;

const textCss = css<TextProps>`
  ${base}
  font-family: ${(props) => props.fontFamily ?? props.theme.typography.fontFamily.body};
  font-size: ${({ theme, size, fontSize }) => fontSize ?? theme.typography.size.body[size ?? "md"]};
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
` as React.FunctionComponent<TextProps & React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>>;

export const UnorderedList = styled.ul<TextProps>`
  ${textCss}
` as React.FunctionComponent<TextProps & React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>>;

export const OrderedList = styled.ol<TextProps>`
  ${textCss}
` as React.FunctionComponent<TextProps & React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>>;

export const Text = styled.div`
  ${textCss}
` as React.FunctionComponent<TextProps & DivProps>;

export const SmallText = styled.div`
  ${textCss}
  font-size: ${(props) => props.theme.typography.size.body.sm};
` as React.FunctionComponent<TextProps & DivProps>;
