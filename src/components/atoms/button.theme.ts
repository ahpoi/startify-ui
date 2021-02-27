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
  colorDisabled: string;
  borderColorDisabled: string;
  backgroundColorDisabled: string;
};

export type ButtonThemeVariant = {
  color: string;
  colorOnHover: string;
  borderColor: string;
  borderColorOnHover: string;
  backgroundColor: string;
  backgroundColorOnHover: string;
  textDecorationOnHover?: string;
};

export type ButtonThemeSize = { fontSize: string; padding: string };

export const buttonTheme: ButtonTheme = {
  base: {
    borderRadius: radius.xs,
    fontWeight: typography.fontWeight.medium,
    colorDisabled: "rgba(0,0,0,0.25)",
    backgroundColorDisabled: "grey.100",
    borderColorDisabled: "grey.100",
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
      colorOnHover: "white",
      backgroundColor: "500",
      backgroundColorOnHover: "700",
      borderColor: "500",
      borderColorOnHover: "700",
    },
    outlined: {
      color: "500",
      colorOnHover: "500",
      borderColor: "500",
      borderColorOnHover: "500",
      backgroundColor: "transparent",
      backgroundColorOnHover: "transparent",
    },
    "outlined-filled": {
      color: "500",
      colorOnHover: "white",
      borderColor: "500",
      borderColorOnHover: "500",
      backgroundColor: "transparent",
      backgroundColorOnHover: "500",
    },
    ghost: {
      color: "500",
      colorOnHover: "white",
      borderColor: "transparent",
      borderColorOnHover: "transparent",
      backgroundColor: "transparent",
      backgroundColorOnHover: "500",
    },
    link: {
      color: "500",
      colorOnHover: "500",
      borderColor: "transparent",
      borderColorOnHover: "transparent",
      backgroundColorOnHover: "transparent",
      backgroundColor: "transparent",
      textDecorationOnHover: "underline",
    },
  },
};
