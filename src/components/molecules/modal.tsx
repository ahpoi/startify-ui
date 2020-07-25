import * as React from "react";

import styled from "styled-components";
import {Breakpoints, Spaces} from "../../styles/sizes";
import {Button, Heading3, Horizontal, Text, VerticalSpacer} from "../..";
import {useKeyboardEvent, useOnOutsideClick} from "../../hooks/common.hook";

interface ModalProps {
  title: string
  isVisible?: boolean
  onOk?: () => any;
  onOkText?: string;
  onOkButtonType?: "submit" | "button";
  onOkLoading?: boolean;
  onCancel?: () => any;
  onCancelText?: string;
  message?: string;
  children?: React.ReactNode;
}

export const Modal = (props: ModalProps) => {
  const { title, message, isVisible, children } = props;
  const { onOk, onOkText = "Proceed", onOkLoading, onOkButtonType, onCancel, onCancelText = "Cancel" } = props;

  const node = React.useRef<HTMLDivElement>(null);

  useKeyboardEvent("escape", () => onCancel?.());
  useOnOutsideClick(node, () => onCancel?.());

  return isVisible ? <ModalOverlay>
    <ModalContainer ref={node}>
      <Heading3 fontWeight={"bold"}>{title}</Heading3>
      <VerticalSpacer space={24}/>
      {message && <Text fontSize={{ web: "16px", mobile: "12px" }}>{message}</Text>}
      {children}
      <VerticalSpacer space={24}/>
      <Horizontal horizontalAlign={"right"} space={12}>
        {onCancel &&
        <Button onClick={onCancel} variant={"text"}>{onCancelText}</Button>}
        <Button onClick={onOk} isLoading={onOkLoading} type={onOkButtonType}>{onOkText}</Button>
      </Horizontal>
    </ModalContainer>
  </ModalOverlay> : <></>;
};

const ModalOverlay = styled.div`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99;
  top: 0;
  left: 0;
`;

const ModalContainer = styled.div<{ maxWidth?: number }>`
  background: white;
  z-index: 100;
  max-width: ${props => props.maxWidth ?? 500}px;
  width: 100%;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  border-radius: ${props => props.theme.border.radiusMedium}px;
  box-shadow: ${props => props.theme.shadow.large}px;
  padding: ${Spaces.medium}px;
  @media (max-width: ${Breakpoints.small}px) {
     padding: ${Spaces.small}px;
  }
`;
