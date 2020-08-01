import * as React from "react";

import styled from "styled-components";
import {Breakpoints, Spaces} from "../../styles/sizes";
import {Button, ButtonVariantType, Heading4, Horizontal, StretchSpacer, Text, Vertical, VerticalSpacer} from "../..";
import {useKeyboardEvent, useOnOutsideClick} from "../../hooks/common.hook";
import {IconButtonContainer, IconClose, IconError} from "../others/icons";
import {fadeIn} from "../others/animations";
import {Portal} from "../others/portal";

type BaseModalProps = {
  isOpen?: boolean
  onStateChange?: (state: { isOpen: boolean }) => void;
  modalWidth?: number;
  padding?: number;
}
type ModalProps = {
  title: string
  onSubmit?: () => any;
  onSubmitLoading?: boolean;
  submitBtnType?: "submit" | "button";
  submitBtnTxt?: string;
  closeBtnTxt?: string;
  hasCloseButton?: boolean;
  hasCloseIcon?: boolean;
  message?: string;
  children?: React.ReactNode;
} & BaseModalProps

export const Modal = (props: ModalProps) => {

  const { title, message, modalWidth, padding, isOpen, hasCloseIcon = false, hasCloseButton = false, children } = props;
  const { onSubmit, submitBtnTxt = "Proceed", onSubmitLoading, submitBtnType, onStateChange, closeBtnTxt = "Cancel" } = props;

  const node = React.useRef<HTMLDivElement>(null);
  const _onClose = () => {
    if (!onSubmitLoading) {
      onStateChange?.({ isOpen: false });
    }
  };

  useKeyboardEvent("escape", _onClose);
  useOnOutsideClick(node, _onClose);

  return isOpen ? <Portal>
    <ModalOverlay>
      <ModalContainer ref={node} modalWidth={modalWidth} padding={padding}>
        <Horizontal verticalAlign={"center"}>
          <Heading4 fontWeight={"bold"}>{title}</Heading4>
          {hasCloseIcon && <><StretchSpacer/>
              <IconButtonContainer onClick={_onClose}>
                  <IconClose size={24}/>
              </IconButtonContainer>
          </>}
        </Horizontal>
        <VerticalSpacer spacing={24}/>
        {message && <Text>{message}</Text>}
        {children}
        <VerticalSpacer spacing={32}/>
        <Horizontal horizontalAlign={"right"} spacing={12}>
          {hasCloseButton &&
          <Button onClick={_onClose} variant={"text"} disabled={onSubmitLoading}>{closeBtnTxt}</Button>}
          <Button onClick={onSubmit} isLoading={onSubmitLoading} type={submitBtnType}>{submitBtnTxt}</Button>
        </Horizontal>
      </ModalContainer>
    </ModalOverlay>
  </Portal> : null;
};

type ModalError = {
  title?: string;
  message?: string;
  onRetry?: () => any;
  onRetrying?: boolean;
  retryButtonVariant?: ButtonVariantType;
} & BaseModalProps

export const ModalError = (props: ModalError) => {

  const { isOpen, title = "Something went wrong", message = "An unexpected error has occurred. Please try again soon!", modalWidth, padding, retryButtonVariant = "text" } = props;
  const { onRetry, onRetrying, onStateChange } = props;

  const node = React.useRef<HTMLDivElement>(null);
  const _onClose = () => {
    if (!onRetrying) {
      onStateChange?.({ isOpen: false });
    }
  };

  useKeyboardEvent("escape", _onClose);
  useOnOutsideClick(node, _onClose);

  return isOpen ? <Portal>
    <ModalOverlay>
      <ModalContainer ref={node} modalWidth={modalWidth} padding={padding}>
        <Horizontal horizontalAlign={"right"}>
          <IconButtonContainer onClick={_onClose}>
            <IconClose size={24}/>
          </IconButtonContainer>
        </Horizontal>
        <VerticalSpacer spacing={12}/>
        <Vertical horizontalAlign={"center"}>
          <IconError size={48}/>
          <Vertical horizontalAlign={"center"} spacing={12}>
            <Heading4>{title}</Heading4>
            <Text textAlign={"center"}>{message}</Text>
          </Vertical>
          {onRetry &&
          <Button onClick={onRetry} isLoading={onRetrying} variant={retryButtonVariant}>Try Again</Button>}
        </Vertical>
        <VerticalSpacer spacing={32}/>
      </ModalContainer>
    </ModalOverlay>
  </Portal> : null;
};


type BasicModalProps = {
  children: React.ReactNode;
} & BaseModalProps

/**
 * Basic Modal that allows the consumer to provide its on UI
 */
export const BasicModal = (props: BasicModalProps) => {

  const { isOpen, onStateChange, modalWidth, padding, children } = props;
  const node = React.useRef<HTMLDivElement>(null);

  const _onClose = () => {
    onStateChange?.({ isOpen: false });
  };

  useKeyboardEvent("escape", _onClose);
  useOnOutsideClick(node, _onClose);

  return isOpen ? <Portal>
    <ModalOverlay>
      <ModalContainer ref={node} modalWidth={modalWidth} padding={padding}>
        {children}
      </ModalContainer>
    </ModalOverlay>
  </Portal> : null;
};

export const ModalOverlay = styled.div`
  background-color: rgba(0,0,0,0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99;
  top: 0;
  left: 0;
  ${fadeIn}
`;

export const ModalContainer = styled.div<{ modalWidth?: number, padding?: number }>`
  background: white;
  z-index: 100;
  max-width: ${props => props.modalWidth ?? 500}px;
  width: 100%;
  height: auto;
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
  border-radius: ${props => props.theme.border.radiusMedium}px;
  box-shadow: ${props => props.theme.shadow.large}px;
  padding:  ${props => props.padding ?? Spaces.medium}px;
  @media (max-width: ${Breakpoints.small}px) {
     width: 95%;
     padding: ${Spaces.small}px;
  }
`;
