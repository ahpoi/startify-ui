import * as React from "react";
import styled from "styled-components";
import {createPortal} from "react-dom";
import {useOnOutsideClick} from "../../hooks/common.hook";

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
  return isOpen ? createPortal(<div data-comment="sidebar">
    <SidebarRoot isOpen={isOpen}/>
    <SideBarOverlay isOpen={isOpen}/>
    <SideBarContent ref={node} isOpen={isOpen} children={children}/>
  </div>, document.getElementById("root") ?? document.body) : null;
};

const width = 300;
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
