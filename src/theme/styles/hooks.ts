import { ColorScheme } from "./colors";
import { useTheme } from "styled-components";

/**
 * Calculate color system from number system or default to the color:
 * Improvements: Make it more efficient
 * Eg: useColorScheme(red.500) -> red.500
 * Eg: useColorScheme(500, primary) -> primary.500
 * Eg: useColorScheme(white, primary) -> white
 * */
export const useColorScheme = (color: string, scheme?: ColorScheme) => {
  if (color.split(".").length === 2) {
    const [colorKey, colorNumber] = color.split(".");
    if (useTheme().colors[colorKey as never]) {
      return useTheme().colors[colorKey as never][colorNumber as string];
    }
    return color;
  }
  if (["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"].includes(color) && scheme) {
    return useTheme().colors?.[scheme as never]?.[color] ?? color;
  }
  return color;
};
