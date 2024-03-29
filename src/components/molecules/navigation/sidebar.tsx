import * as React from "react";
import styled from "styled-components";
import { useOnOutsideClick } from "../../../hooks/common.hook";
import { IconButtonContainer, IconMenu } from "../../others/icons";
import { CloseButton } from "../../internal/close-button";

interface SidebarProps {
  isOpen: boolean;
  onStateChange?: (state: { isOpen: boolean }) => void;
  children: React.ReactNode;
}

const width = 250;
const zIndexOverlay = 1;
const zIndexRoot = 2;
const zIndexContent = 2;

export const Sidebar = ({ isOpen, onStateChange, children }: SidebarProps) => {
  const node = React.useRef<HTMLDivElement>(null);
  const onClose = () => {
    onStateChange?.({ isOpen: false });
  };
  useOnOutsideClick(node, onClose);
  return (
    <SidebarRoot data-comment="sidebar-root" isOpen={isOpen}>
      <SidebarContent data-comment="sidebar-content" ref={node} isOpen={isOpen} children={children} />
      <SidebarOverlay role="presentation" data-comment="sidebar-overlay" isOpen={isOpen}>
        <CloseButton
          style={{
            position: "absolute",
            top: "20px",
            left: `${width + 10}px`,
          }}
          color={"white"}
          size={"sm"}
        />
      </SidebarOverlay>
    </SidebarRoot>
  );
};

export const SidebarToggle = (props: { onClick: () => any }) => (
  <IconButtonContainer onClick={props.onClick}>
    <IconMenu />
  </IconButtonContainer>
);

export const SidebarRoot = styled.div<{ isOpen: boolean }>`
  z-index: ${zIndexRoot};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
`;

export const SidebarOverlay = styled.div<{ isOpen: boolean }>`
  z-index: ${zIndexOverlay};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 0.3s ease-out;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const SidebarContent = styled.div<{ isOpen: boolean }>`
  background: white;
  z-index: ${zIndexContent};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  transition: transform 0.3s ease-out;
  overflow-y: auto;
  width: ${width}px;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0%)" : "translateX(-100%)")};
`;
