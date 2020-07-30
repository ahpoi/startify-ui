import * as React from "react";
import styled from "styled-components";
import {useOnOutsideClick} from "../../hooks/common.hook";
import {Vertical, VerticalSpacer} from "../../index";
import {IconClose} from "../others/icons";

interface SidebarProps {
  isOpen: boolean
  onStateChange?: (state: { isOpen: boolean }) => void;
  children: React.ReactNode
}

export const Sidebar = ({ isOpen, onStateChange, children }: SidebarProps) => {
  const node = React.useRef<HTMLDivElement>(null);
  const onClose = () => {
    onStateChange?.({ isOpen: false });
  };
  useOnOutsideClick(node, onClose);
  return <div data-comment="sidebar" style={{ display: isOpen ? "contents" : "none" }}>
    <SidebarRoot data-comment="sidebar-root" isOpen={isOpen}/>
    <SideBarContent data-comment="sidebar-content" ref={node} isOpen={isOpen} children={children}/>
    <SideBarOverlay role="presentation" data-comment="sidebar-overlay" isOpen={isOpen}>
      <OverlayClosedButton aria-label={"close sidebar"}
                           type={"button"}>
        <IconClose color={"white"}/>
      </OverlayClosedButton>
    </SideBarOverlay>
  </div>;
};

export const SidebarNavigation = (props: { children: React.ReactNode }) =>
    <Vertical spacing={0} children={props.children}/>;

export const SidebarToggle = (props: { onClick: () => any }) =>
    <StyledSidebarButton onClick={props.onClick}>
      <Line/>
      <VerticalSpacer spacing={4}/>
      <Line/>
      <VerticalSpacer spacing={4}/>
      <Line/>
    </StyledSidebarButton>;

const width = 280;
const zIndexOverlay = 1;
const zIndexRoot = 2;
const zIndexContent = 2;

const SidebarRoot = styled.div<{ isOpen: boolean }>`
    z-index: ${zIndexRoot};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    pointer-events: ${({ isOpen }) => isOpen ? "all" : "none"};
`;

const SideBarOverlay = styled.div<{ isOpen: boolean }>`
    z-index: ${zIndexOverlay};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    transition: opacity .3s ease-out;
    background-color: rgba(0,0,0,0.8);
`;

const SideBarContent = styled.div<{ isOpen: boolean }>`
    background: white;
    z-index: ${zIndexContent};
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    transition: opacity .3s ease-out;
    overflow-y: auto;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    width: ${width}px;
    transform: ${({ isOpen }) => isOpen ? "translateX(0%)" : "translateX(-100%)"};
`;

const OverlayClosedButton = styled.button`
  position: absolute;
  top: 5px;
  left: ${width + 5}px;
  background: transparent;
  border: none;
`;

const StyledSidebarButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  display: inline-block;
  padding: 6px;
  &:focus,
  &:hover,
  &:active {
    filter: brightness(50%)
  }  
`;

const Line = styled.div`
    width: 22px;
    height: 3px;
    border-radius: 100px;
    background-color: grey
`;
