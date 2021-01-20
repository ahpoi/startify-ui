import * as React from "react";
import styled from "styled-components";
import { IconMenu, IconUserAvatarCircle } from "../../others/icons";
import { Horizontal } from "../../layout/gls/gls";
import { useOnInsideClick, useOnOutsideClick } from "../../../hooks/common.hook";
import { shadows } from "../../../theme/styles/shadows";

type Props = {
  children: React.ReactNode;
};

export const HeaderUserMenu = (props: Props) => {
  const [isOpen, setOpen] = React.useState(false);
  const containerNode = React.useRef<HTMLDivElement>(null);
  const menuNode = React.useRef<HTMLDivElement>(null);

  useOnOutsideClick(containerNode, () => setOpen(false));
  useOnInsideClick(menuNode, () => setOpen(false));

  return (
    <HeaderUserMenuContainer ref={containerNode}>
      <UserProfileButton type={"button"} onClick={() => setOpen(!isOpen)}>
        <Horizontal spacing={4} verticalAlign={"center"}>
          <IconMenu />
          <IconUserAvatarCircle size={32} />
        </Horizontal>
      </UserProfileButton>
      {isOpen && <MenuContainer ref={menuNode}>{props.children}</MenuContainer>}
    </HeaderUserMenuContainer>
  );
};

const HeaderUserMenuContainer = styled.div`
  position: relative;
`;
const UserProfileButton = styled.button`
  appearance: none;
  background: white;
  border: 1px solid rgb(221, 221, 221);
  color: rgb(34, 34, 34);
  cursor: pointer;
  margin: 0px;
  outline: none;
  padding: 3px 5px 3px 12px;
  user-select: auto;
  border-radius: 18px;
  height: 42px;
  transition: box-shadow 0.2s ease 0s;
  box-shadow: ${shadows.md};

  &:focus,
  &:hover,
  &:active {
    box-shadow: ${shadows.lg};
  }
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 130%;
  right: 0px;

  max-height: calc(100vh - 100px);
  overflow-y: auto;
  z-index: 2;

  min-width: 240px;
  display: block;

  background: white;
  border-radius: ${(props) => props.theme.radius.md};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 16px;
  color: rgb(34, 34, 34);
  padding: 8px 0px;
`;
