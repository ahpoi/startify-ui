import { typography } from "../../atoms/typography.theme";

export const navigationItemTheme = {
  base: {
    color: "500",
    colorOnHover: "700",
    fontSize: typography.size.body.md,
    fontWeight: typography.fontWeight.medium,
  },
};

export type NavItemTheme = typeof navigationItemTheme;
