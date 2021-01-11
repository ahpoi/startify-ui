import * as React from "react";
import { Property } from "csstype";
import { Text } from "../atoms/typography";
import { Horizontal, Vertical } from "../layout/gls/gls";
import { LinkButton } from "../..";
import { useTheme } from "styled-components";
import { IconArrowLeft, IconChevronDown } from "./icons";

interface TextWithLink {
  text: string;
  link: string;
  linkUnderline?: boolean;
  endText?: string;
  onClick?: () => any;
  size?: "sm" | "md" | "lg";
}

export const TextWithLink = ({ onClick, text, link, linkUnderline, size }: TextWithLink) => {
  return (
    <Text size={size}>
      {`${text}`}
      <span>
        <LinkButton size={size} onClick={onClick} underline={linkUnderline}>
          {link}
        </LinkButton>
      </span>
    </Text>
  );
};

interface BackButtonProps {
  onClick?: () => any;
  text?: string;
}

export const BackButton = ({ onClick, text }: BackButtonProps) => {
  const color = useTheme().color.secondary;
  return (
    <Horizontal spacing={4} verticalAlign={"center"}>
      <IconArrowLeft size={16} color={color} />
      <LinkButton underline={false} onClick={onClick ? onClick() : () => window.history.back()}>
        {text ?? "Back"}
      </LinkButton>
    </Horizontal>
  );
};

interface PoweredByProps {
  name: string;
  url: string;
  fontSize?: Property.FontSize<any>;
  logo: React.ReactNode;
}

export const PoweredBy = ({ name, url, logo, fontSize = "8px" }: PoweredByProps) => (
  <div style={{ cursor: "pointer" }} onClick={() => window.open(url, "_blank")}>
    <Horizontal spacing={4} verticalAlign={"center"}>
      <Vertical spacing={0} horizontalAlign={"right"}>
        <Text fontWeight={"light"} fontSize={fontSize}>
          powered by
        </Text>
        <Text fontWeight={"light"} fontSize={fontSize}>
          {name}
        </Text>
      </Vertical>
      {logo}
    </Horizontal>
  </div>
);

interface DotProps {
  color: Property.Color;
  size?: Property.FontSize<any>;
}

/**
 * From Google https://careers.google.com/jobs/
 */
export const DotColor = {
  Red: "#ea4335",
  Blue: "#0052CC",
  Green: "#34a853",
  Yellow: "#fbbc05",
  Grey: "grey",
};

export const Dot = ({ size, color }: DotProps) => (
  <span
    style={{
      height: size ?? "12px",
      width: size ?? "12px",
      backgroundColor: color,
      borderRadius: "50%",
      display: "inline-block",
    }}
  />
);

export const Ellipsis = ({
  rotate = false,
  size = 4,
  color = "grey",
}: {
  rotate?: boolean;
  size?: number;
  color?: string;
}) => (
  <div
    style={{
      display: "block",
      transition: "transform 0.2s ease-out",
      transform: `${rotate ? "rotate(-90deg)" : "rotate(0deg)"}`,
    }}
  >
    <Horizontal spacing={4}>
      <Dot color={color} size={size} />
      <Dot color={color} size={size} />
      <Dot color={color} size={size} />
    </Horizontal>
  </div>
);

export const Chevron = ({
  open = false,
  size = 24,
  color = "grey",
}: {
  open?: boolean;
  size?: number;
  color?: string;
}) => (
  <div
    style={{
      display: "block",
      transition: "transform 0.2s ease-out",
      transform: `${open ? "rotate(-90deg)" : "rotate(0deg)"}`,
    }}
  >
    <IconChevronDown size={size} color={color} />
  </div>
);

interface HeaderLogoProps {
  name: string;
  logo: React.ReactNode;
  fontSize?: Property.FontSize<any>;
  fontWeight?: Property.FontWeight;
  color?: Property.Color;
  onClick: () => any;
}

export const HeaderLogo = ({ name, color, fontSize = "18px", fontWeight = 700, onClick, logo }: HeaderLogoProps) => (
  <Horizontal verticalAlign={"center"} spacing={8} style={{ cursor: "pointer" }} onClick={onClick}>
    {logo}
    <div
      style={{
        color,
        fontSize,
        fontWeight,
      }}
    >
      {name}
    </div>
  </Horizontal>
);
