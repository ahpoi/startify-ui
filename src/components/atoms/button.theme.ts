import { radius } from "../../theme/styles/radius";
import { typography } from "../../theme/styles/typography";
import { SizeType } from "../others/types";

export type ButtonTheme = {
  base: ButtonThemeBase;
  sizes: Record<ButtonSizeType, ButtonThemeSize>;
  variants: Record<ButtonVariantType, ButtonThemeVariant>;
};

export type ButtonSizeType = SizeType;
export type ButtonVariantType = "solid" | "ghost" | "outlined" | "outlined-filled" | "link";

export type ButtonThemeBase = {
  fontWeight: number;
  borderRadius: string;
};

export type ButtonThemeVariant = {
  color: string;
  borderColor: string;
  backgroundColor: string;
  onHover: {
    color: string;
    borderColor: string;
    backgroundColor: string;
    textDecoration?: string;
  };
};

export type ButtonThemeSize = { fontSize: string; padding: string };

export const buttonTheme: ButtonTheme = {
  base: {
    borderRadius: radius.xs,
    fontWeight: typography.fontWeight.medium,
  },
  sizes: {
    xs: { fontSize: "10px", padding: "6px 14px 6px" },
    sm: { fontSize: "12px", padding: "8px 18px 8px" },
    md: { fontSize: "14px", padding: "12px 30px 12px" },
    lg: { fontSize: "16px", padding: "16px 32px 16px" },
  },
  variants: {
    solid: {
      color: "white",
      backgroundColor: "500",
      borderColor: "500",
      onHover: {
        backgroundColor: "700",
        borderColor: "700",
        color: "white",
      },
    },
    outlined: {
      color: "500",
      backgroundColor: "transparent",
      borderColor: "500",
      onHover: { backgroundColor: "transparent", borderColor: "500", color: "500" },
    },
    "outlined-filled": {
      color: "500",
      backgroundColor: "transparent",
      borderColor: "500",
      onHover: { backgroundColor: "500", borderColor: "500", color: "white" },
    },
    ghost: {
      color: "500",
      backgroundColor: "transparent",
      borderColor: "transparent",
      onHover: { backgroundColor: "500", borderColor: "transparent", color: "white" },
    },
    link: {
      color: "500",
      backgroundColor: "transparent",
      borderColor: "transparent",
      onHover: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: "500",
        textDecoration: "underline",
      },
    },
  },
};
