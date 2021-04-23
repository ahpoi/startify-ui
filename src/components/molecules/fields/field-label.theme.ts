import { typography } from "../../atoms/typography.theme";

export const fieldLabelTheme = {
  base: {
    color: typography.colour.body,
    fontSize: typography.size.body.md,
    fontWeight: 500,
    lineHeight: "24px",
  },
};

export type FieldLabelTheme = typeof fieldLabelTheme;

export const fieldErrorMessageTheme = {
  base: {
    color: "red.500",
    fontSize: typography.size.body.md,
    fontWeight: 400,
    lineHeight: "24px",
  },
};

export type FieldErrorMessageTheme = typeof fieldErrorMessageTheme;
