import * as React from "react";
import {createPortal} from "react-dom";

import styled from "styled-components";
import {Breakpoints, Spaces} from "../../styles/sizes";
import {Button, ButtonVariantType, Heading4, Horizontal, StretchSpacer, Text, Vertical, VerticalSpacer} from "../..";
import {useKeyboardEvent, useOnOutsideClick} from "../../hooks/common.hook";
import {IconButtonContainer, IconClose, IconError} from "../others/icons";
import {fadeIn} from "../others/animations";

interface ModalProps {
  title: string
  isOpen?: boolean
  onSubmit?: () => any;
  onSubmitLoading?: boolean;
  submitBtnType?: "submit" | "button";
  submitBtnTxt?: string;
  onStateChange?: (state: { isOpen: boolean }) => void;
  closeBtnTxt?: string;
  hasCloseButton?: boolean;
  hasCloseIcon?: boolean;
  message?: string;
  modalWidth?: number;
  children?: React.ReactNode;
}

export const Modal = (props: ModalProps) => {

  const { title, message, modalWidth, isOpen, hasCloseIcon = false, hasCloseButton = false, children } = props;
  const { onSubmit, submitBtnTxt = "Proceed", onSubmitLoading, submitBtnType, onStateChange, closeBtnTxt = "Cancel" } = props;

  const node = React.useRef<HTMLDivElement>(null);
  const _onClose = () => {
    if (!onSubmitLoading) {
      onStateChange?.({ isOpen: false });
    }
  };

  useKeyboardEvent("escape", _onClose);
  useOnOutsideClick(node, _onClose);

  return isOpen ? createPortal(<ModalOverlay>
    <ModalContainer ref={node} modalWidth={modalWidth}>
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
  </ModalOverlay>, document.body) : null;
};

interface ModalError {
  isOpen: boolean
  modalWidth?: number;
  title?: string;
  message?: string;
  onRetry?: () => any;
  onRetrying?: boolean;
  retryButtonVariant?: ButtonVariantType;
  onStateChange?: (state: { isOpen: boolean }) => void;
}

export const ModalError = (props: ModalError) => {

  const { isOpen, title = "Something went wrong", message = "An unexpected error has occurred. Please try again soon!", modalWidth, retryButtonVariant = "text" } = props;
  const { onRetry, onRetrying, onStateChange } = props;

  const node = React.useRef<HTMLDivElement>(null);
  const _onClose = () => {
    if (!onRetrying) {
      onStateChange?.({ isOpen: false });
    }
  };

  useKeyboardEvent("escape", _onClose);
  useOnOutsideClick(node, _onClose);

  return isOpen ? createPortal(<ModalOverlay>
    <ModalContainer ref={node} modalWidth={modalWidth}>
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
  </ModalOverlay>, document.body) : null;
};


interface SimpleModal {
  isOpen?: boolean
  isClosable?: boolean
  onClose: () => void
  children: React.ReactNode;
  modalWidth?: number;
}

/**
 * Basic Modal that allows the consumer to provide its on UI
 */
export const SimpleModal = (props: SimpleModal) => {

  const { isOpen, onClose, isClosable = true, modalWidth, children } = props;
  const node = React.useRef<HTMLDivElement>(null);

  const _onClose = () => {
    //Used for to prevent user from escaping or an action is happening eg:
    //API request
    if (isClosable) {
      onClose();
    }
  };

  useKeyboardEvent("escape", _onClose);
  useOnOutsideClick(node, _onClose);

  return isOpen ? createPortal(<ModalOverlay>
    <ModalContainer ref={node} modalWidth={modalWidth}>
      {children}
    </ModalContainer>
  </ModalOverlay>, document.body) : null;
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

export const ModalContainer = styled.div<{ modalWidth?: number }>`
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
  padding: ${Spaces.medium}px;
  @media (max-width: ${Breakpoints.small}px) {
     width: 95%;
     padding: ${Spaces.small}px;
  }
`;
