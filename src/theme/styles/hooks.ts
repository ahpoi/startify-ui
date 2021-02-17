import { ColorScheme } from "./colors";
import { useTheme } from "styled-components";

/**
 * Calculate color system from number system or default to the color:
 * Eg: useColorScheme(red.500) -> red.500
 * Eg: useColorScheme(500, primary) -> primary.500
 * Eg: useColorScheme(white, primary) -> white
 * */
export const useColorScheme = (color: string, scheme?: ColorScheme) => {
  if (color.split(".").length === 2) {
    const [colorKey, colorNumber] = color.split(".");
    return useTheme().colors[colorKey as never][colorNumber as string];
  }
  if (["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"].includes(color) && scheme) {
    return scheme[color as never];
  }
  return color;
};
