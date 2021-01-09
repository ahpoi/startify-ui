import * as React from "react";

import { CommonColors } from "../../styles/colors";
import styled from "styled-components";

const defaultSize = 24;

export interface IconProps {
  color?: string;
  size?: number;
}

export const IconClose = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        d="M12 10.586L6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 0 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 1 0-1.414-1.414L12 10.586z"
        fill={color}
      />
    </svg>
  );
};

export const IconError = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <g>
        <path
          d="M13.416 4.417a2.002 2.002 0 00-2.832 0l-6.168 6.167a2.002 2.002 0 000 2.833l6.168 6.167a2.002 2.002 0 002.832 0l6.168-6.167a2.002 2.002 0 000-2.833l-6.168-6.167z"
          fill={color}
        />
        <path d="M12 14a1 1 0 01-1-1V8a1 1 0 012 0v5a1 1 0 01-1 1m0 3a1 1 0 010-2 1 1 0 010 2" fill="white" />
      </g>
    </svg>
  );
};

/**
 * https://www.flaticon.com/packs/navigation-5
 */
export const IconChevronRight = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ fill: color }}>
      <path
        fillRule="evenodd"
        d="M14.995 10.995a1 1 0 010 1.414l-4.593 4.593a.99.99 0 01-1.4-1.4l3.9-3.9-3.9-3.9a.99.99 0 011.4-1.4l4.593 4.593z"
      />
    </svg>
  );
};

export const IconChevronLeft = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ fill: color }}>
      <path
        fillRule="evenodd"
        d="M9.005 10.995l4.593-4.593a.99.99 0 111.4 1.4l-3.9 3.9 3.9 3.9a.99.99 0 01-1.4 1.4L9.005 12.41a1 1 0 010-1.414z"
      />
    </svg>
  );
};

export const IconChevronUp = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ fill: color }}>
      <path
        d="M11.294 8.708l-.001.001-4.549 4.559a1.051 1.051 0 101.486 1.488l.001-.001 3.77-3.776 3.768 3.776a1.05 1.05 0 001.486.001h.001a1.054 1.054 0 00.001-1.489l-4.548-4.558a1 1 0 00-1.415-.001z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const IconChevronDown = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ fill: color }}>
      <path
        d="M6.744 8.744a1.053 1.053 0 000 1.49l4.547 4.557a1 1 0 001.416 0l4.55-4.558a1.051 1.051 0 10-1.488-1.488l-3.77 3.776-3.768-3.776a1.051 1.051 0 00-1.487 0z"
        fill="currentColor"
      />
    </svg>
  );
};

export const IconArrowRight = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
    <svg width={size} height={size} viewBox={`0 0 24 24`} style={{ fill: color }}>
      <path
        d="M11.793 5.793a.999.999 0 000 1.414L15.586 11H6a1 1 0 000 2h9.586l-3.793 3.793a.999.999 0 000 1.414c.39.39 1.024.39 1.415 0l5.499-5.5a.997.997 0 00.293-.679v-.057a.996.996 0 00-.293-.678l-5.499-5.5a1 1 0 00-1.415 0z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const IconArrowLeft = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
    <svg width={size} height={size} viewBox={`0 0 24 24`} style={{ fill: color }}>
      <path
        d="M8.414 11.5H18a1 1 0 010 2H8.414l3.793 3.793a1 1 0 01-1.414 1.414l-5.5-5.5a1 1 0 010-1.414l5.5-5.5a1 1 0 011.414 1.414L8.414 11.5z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const IconMenu = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
    <svg width={size} height={size} viewBox={`0 0 24 24`} style={{ fill: color }}>
      <path d="M5 15h14v2H5zm0-8h14v2H5zm0 4h14v2H5z" fillRule="evenodd" />
    </svg>
  );
};

export const IconUserAvatarCircle = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
    <svg width={size} height={size} viewBox={`0 0 24 24`}>
      <g fillRule="evenodd">
        <circle fill={color} cx={12} cy={12} r={10} />
        <circle fill="white" cx={12} cy={9} r={3} />
        <path
          d="M7 18.245A7.966 7.966 0 0012 20c1.892 0 3.63-.657 5-1.755V15c0-1.115-.895-2-2-2H9c-1.113 0-2 .895-2 2v3.245z"
          fillRule="nonzero"
          fill={"white"}
        />
      </g>
    </svg>
  );
};

export const IconQuestionCircle = (props: IconProps) => {
  const color = props.color || CommonColors.grey70;
  const size = props.size || defaultSize;
  return (
    <svg width={size} height={size} viewBox={`0 0 24 24`} style={{ fill: color }}>
      <g fillRule="evenodd">
        <circle fill="currentColor" cx={12} cy={12} r={10} />
        <circle fill="white" cx={12} cy={18} r={1} />
        <path
          d="M15.89 9.05a3.975 3.975 0 00-2.957-2.942C10.321 5.514 8.017 7.446 8 9.95l.005.147a.992.992 0 00.982.904c.552 0 1-.447 1.002-.998a2.004 2.004 0 014.007-.002c0 1.102-.898 2-2.003 2H12a1 1 0 00-1 .987v2.014a1.001 1.001 0 002.004 0v-.782c0-.217.145-.399.35-.472A3.99 3.99 0 0015.89 9.05"
          fill="white"
        />
      </g>
    </svg>
  );
};

export const IconButtonContainer = styled.button`
  padding: 2px;
  border-radius: 2px;

  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:focus,
  &:hover,
  &:active {
    border-radius: ${({ theme }) => theme.border.radiusxSmall}px;
    background-color: ${CommonColors.greyLight40};
  }
` as React.FunctionComponent<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;
