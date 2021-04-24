import styled from "styled-components";
import { calculateUnit } from "../..";

interface HorizontalProps {
  size?: string | number;
  color?: string;
}

export const HorizontalDivider = styled.div<HorizontalProps>`
  border-bottom: ${({ theme, size }) => size ?? theme.components.divider.size} solid ${({ theme, color }) =>
  color ?? theme.components.divider.color}};
`;

interface VerticalProps {
  height?: string | number;
  width?: string | number;
  color?: string;
}

export const VerticalDivider = styled.div<VerticalProps>`
  border-left: ${({ theme, width }) => width ?? theme.components.divider.size} solid ${({ theme, color }) =>
  color ?? theme.components.divider.color}};
  height: ${(props) => calculateUnit(props.height ?? "100%")};
`;
