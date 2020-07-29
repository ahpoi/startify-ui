import * as React from "react";
import * as CSS from "csstype";
import {Text} from "../atoms/typography";
import {Vertical, Horizontal} from "../layout/gls/gls";
import {LinkButton} from "../..";
import {useTheme} from "styled-components";
import {IconBackArrow} from "./icons";

interface TextWithLink {
  text: string;
  link: string;
  endText?: string
  onClick?: () => any
  fontSize?: CSS.FontSizeProperty<any>
}

export const TextWithLink = ({ onClick, text, link, fontSize }: TextWithLink) => {
  return (
      <Text fontSize={fontSize}>
        {`${text}`}
        <span>
          <LinkButton underline={true} onClick={onClick} customStyle={{ fontSize }}>
            {link}
          </LinkButton>
        </span>
      </Text>
  );
};

interface BackButtonProps {
  onClick?: () => any
  text?: string
}

export const BackButton = ({ onClick, text }: BackButtonProps) => {
  const color = useTheme().color.secondary;
  return (
      <Horizontal spacing={4} verticalAlign={"center"}>
        <IconBackArrow size={14} color={color}/>
        <LinkButton underline={false} onClick={onClick ? onClick() : () => window.history.back()}>
          {text ?? "Back"}
        </LinkButton>
      </Horizontal>
  );
};

interface PoweredByProps {
  name: string;
  url: string
  fontSize?: CSS.FontSizeProperty<any>
  Logo: React.ComponentType<any>;
}

export const PoweredBy = ({ name, url, Logo, fontSize = "8px" }: PoweredByProps) => (
    <div style={{ cursor: "pointer" }} onClick={() => window.open(url, "_blank")}>
      <Horizontal spacing={2} verticalAlign={"center"}>
        <Vertical spacing={0} horizontalAlign={"right"}>
          <Text fontWeight={100} fontSize={fontSize}>
            powered by
          </Text>
          <Text fontWeight={100} fontSize={fontSize}>
            {name}
          </Text>
        </Vertical>
        <Logo/>
      </Horizontal>
    </div>
);

interface DotProps {
  color: CSS.ColorProperty,
  size?: CSS.FontSizeProperty<any>
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

export const Dot = ({ size, color }: DotProps) => <span style={{
  height: size ?? "12px",
  width: size ?? "12px",
  backgroundColor: color,
  borderRadius: "50%",
  display: "inline-block",
}}/>;

export const Ellipsis = ({ rotate = false, size = 4 }: { rotate?: boolean, size?: number }) => <div
    style={{
      display: "inline-block",
      transition: "transform 0.2s ease-out",
      transform: `${rotate ? "rotate(90deg)" : "rotate(0deg)"}`
    }}>
  <Horizontal spacing={4}>
    <Dot color={"grey"} size={size}/>
    <Dot color={"grey"} size={size}/>
    <Dot color={"grey"} size={size}/>
  </Horizontal>
</div>;


interface HeaderLogoProps {
  name: string;
  Logo: React.ComponentType<any>;
  fontSize?: CSS.FontSizeProperty<any>
  fontWeight?: CSS.FontWeightProperty
  color?: CSS.ColorProperty,
  onClick: () => any;
}

export const HeaderLogo = ({ name, color, fontSize = "18px", fontWeight = 700, onClick, Logo }: HeaderLogoProps) => (
    <Horizontal
        verticalAlign={"center"}
        spacing={8}
        style={{ cursor: "pointer" }}
        onClick={onClick}
    >
      <Logo/>
      <div style={{
        color,
        fontSize,
        fontWeight
      }}>
        {name}
      </div>
    </Horizontal>
);
