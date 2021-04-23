import * as React from "react";
import { Property } from "csstype";

import styled, { css } from "styled-components";
import { breakpoints } from "../../theme/styles/breakpoints";
import { ColorScheme } from "../../theme/styles/colors";
import { useColorScheme } from "../../theme/styles/hooks";

interface BaseTypographyProps {
  children: React.ReactNode;
  fontFamily?: Property.FontFamily;
  fontWeight?: "light" | "normal" | "medium" | "bold";
  textAlign?: Property.TextAlign;
  colorScheme?: ColorScheme;
}

export interface HeadingProps extends BaseTypographyProps {
  fontSize?: {
    web?: Property.FontSize<any>;
    mobile?: Property.FontSize<any>;
  };
}

export interface TextProps extends BaseTypographyProps {
  fontSize?: Property.FontSize<any>;
  size?: "xs" | "sm" | "md" | "lg";
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
  color: ${(props) => useColorScheme(props.colorScheme ?? props.theme.typography.colour.heading)};
`;

export const Heading1 = styled.h1<HeadingProps>`
  ${baseHeading}
  font-size: ${(props) => props.fontSize?.web ?? props.theme.typography.size.heading["1"].web};
  @media (max-width: ${breakpoints.sm}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? props.theme.typography.size.heading["1"].mobile};
  }
`;

export const Heading2 = styled.h2<HeadingProps>`
  ${baseHeading}
  font-size: ${(props) => props.fontSize?.web ?? props.theme.typography.size.heading["2"].web};
  @media (max-width: ${breakpoints.sm}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? props.theme.typography.size.heading["2"].mobile};
  }
`;

export const Heading3 = styled.h3<HeadingProps>`
  ${baseHeading}
  font-size: ${(props) => props.fontSize?.web ?? props.theme.typography.size.heading["3"].web};
  @media (max-width: ${breakpoints.sm}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? props.theme.typography.size.heading["3"].mobile};
  }
`;

export const Heading4 = styled.h4<HeadingProps>`
  ${baseHeading}
  font-size: ${(props) => props.fontSize?.web ?? props.theme.typography.size.heading["4"].web};
  @media (max-width: ${breakpoints.sm}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? props.theme.typography.size.heading["4"].mobile};
  }
`;

export const Heading5 = styled.h5<HeadingProps>`
  ${baseHeading}
  font-size: ${(props) => props.fontSize?.web ?? props.theme.typography.size.heading["5"].web};
  @media (max-width: ${breakpoints.sm}px) {
    font-size: ${(props) => props.fontSize?.mobile ?? props.theme.typography.size.heading["5"].mobile};
  }
`;

const textCss = css<TextProps>`
  ${base}
  font-family: ${(props) => props.fontFamily ?? props.theme.typography.fontFamily.body};
  font-size: ${({ theme, size, fontSize }) => fontSize ?? theme.typography.size.body[size ?? "md"]};
  color: ${(props) => useColorScheme(props.colorScheme ?? props.theme.typography.colour.body)};
  hyphens: manual;
`;

export const Paragraph = styled.p<TextProps>`
  ${textCss}
`;

export const ListItem = styled.li<TextProps>`
  ${textCss}
`;

export const UnorderedList = styled.ul<TextProps>`
  ${textCss}
`;

export const OrderedList = styled.ol<TextProps>`
  ${textCss}
`;

export const Text = styled.div`
  ${textCss}
`;
