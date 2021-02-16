import { SizeType } from "../others/types";
import { radius } from "../../theme/styles/radius";
import { typography } from "../../theme/styles/typography";

export type BadgeSizeType = Exclude<SizeType, "xs">;

export type BadgeTheme = {
  base: BadgeThemeBase;
  sizes: Record<BadgeSizeType, BadgeThemeSize>;
};

export type BadgeThemeBase = {
  fontWeight: number;
  borderRadius: string;
  color: string;
  backgroundColor: string;
};

export type BadgeThemeSize = { fontSize: string; padding: string };

export const badgeTheme: BadgeTheme = {
  base: {
    backgroundColor: "500",
    borderRadius: radius.xs,
    color: "white",
    fontWeight: typography.fontWeight.normal,
  },
  sizes: {
    sm: {
      fontSize: "10px",
      padding: "6px",
    },
    md: {
      fontSize: "12px",
      padding: "8px",
    },
    lg: {
      fontSize: "14px",
      padding: "8px 10px 8px",
    },
  },
};
