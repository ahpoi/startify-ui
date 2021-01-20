import * as React from "react";

import styled, { useTheme } from "styled-components";
import {
  Button,
  ButtonVariantType,
  CloseButton,
  ColorScheme,
  Heading4,
  Horizontal,
  StretchSpacer,
  Text,
  Vertical,
  VerticalSpacer,
} from "../..";
import { breakpoints } from "../../theme/styles/breakpoints";
import { spaces } from "../../theme/styles/spaces";
import { zIndices } from "../../theme/styles/z-index";
import { shadows } from "../../theme/styles/shadows";
import { useKeyboardEvent, useOnOutsideClick } from "../../hooks/common.hook";
import { IconError } from "../others/icons";
import { fadeIn } from "../others/animations";
import { Portal } from "../others/portal";

type BaseModalProps = {
  isOpen?: boolean;
  onClose?: () => any;
  modalWidth?: number;
  padding?: number;
};

type ModalProps = {
  title: string;
  actions: {
    align?: "horizontal" | "vertical";
    primary: {
      onSubmit: () => any;
      isLoading?: boolean;
      text?: string;
      colorScheme?: ColorScheme;
      variant?: ButtonVariantType;
    };
    secondary?: {
      onSubmit: () => any;
      text?: string;
      colorScheme?: ColorScheme;
      variant?: ButtonVariantType;
    };
  };
  error?: ModalErrorProps;
  closeIcon?: boolean;
  children: React.ReactNode;
} & BaseModalProps;

export const Modal = (props: ModalProps) => {
  const { title, modalWidth, padding, isOpen, closeIcon = true, onClose, error = null, children } = props;
  const { primary, secondary, align = "horizontal" } = props.actions;
  const node = React.useRef<HTMLDivElement>(null);
  const _onClose = () => {
    if (!primary.isLoading) {
      onClose?.();
    }
  };

  useKeyboardEvent("escape", _onClose);
  useOnOutsideClick(node, _onClose);

  const PrimaryButton = () => (
    <Button
      onClick={primary.onSubmit}
      variant={primary.variant}
      colorScheme={primary.colorScheme}
      isLoading={primary.isLoading}
    >
      {primary.text ?? "Submit"}
    </Button>
  );

  const SecondaryButton = () => (
    <Button
      onClick={secondary?.onSubmit}
      variant={secondary?.variant ?? "outlined-filled"}
      colorScheme={secondary?.colorScheme}
      disabled={primary.isLoading}
    >
      {secondary?.text ?? "Cancel"}
    </Button>
  );
  return isOpen ? (
    <Portal>
      <ModalOverlay>
        <ModalContainer ref={node} modalWidth={modalWidth} padding={padding}>
          {!error && (
            <>
              <Horizontal verticalAlign={"center"}>
                <Heading4 fontWeight={"bold"}>{title}</Heading4>
                {closeIcon && (
                  <>
                    <StretchSpacer />
                    <CloseButton onClick={_onClose} />
                  </>
                )}
              </Horizontal>
              <ModalContent>{children}</ModalContent>
              <VerticalSpacer spacing={16} />
              {align === "horizontal" && (
                <Horizontal horizontalAlign={"right"} spacing={12}>
                  {secondary && <SecondaryButton />}
                  <PrimaryButton />
                </Horizontal>
              )}
              {align === "vertical" && (
                <Vertical spacing={12}>
                  <PrimaryButton />
                  {secondary && <SecondaryButton />}
                </Vertical>
              )}
            </>
          )}
          {error && (
            <ModalErrorContent
              onClose={_onClose}
              title={error.title}
              message={error.message}
              onRetry={error.onRetry}
              onRetrying={error.onRetrying}
              retryButtonVariant={error.retryButtonVariant}
            />
          )}
        </ModalContainer>
      </ModalOverlay>
    </Portal>
  ) : null;
};

type ModalErrorProps = {
  title?: string;
  message?: string;
  onRetry?: () => any;
  onRetrying?: boolean;
  retryButtonColorScheme?: ColorScheme;
  retryButtonVariant?: ButtonVariantType;
} & BaseModalProps;

export const ModalError = (props: ModalErrorProps) => {
  const { isOpen, title, message, modalWidth, padding, retryButtonVariant } = props;
  const { onRetry, onRetrying, onClose } = props;

  const node = React.useRef<HTMLDivElement>(null);
  const _onClose = () => {
    if (!onRetrying) {
      onClose?.();
    }
  };

  useKeyboardEvent("escape", _onClose);
  useOnOutsideClick(node, _onClose);

  return isOpen ? (
    <Portal>
      <ModalOverlay>
        <ModalContainer ref={node} modalWidth={modalWidth} padding={padding}>
          <ModalErrorContent
            onClose={_onClose}
            title={title}
            message={message}
            onRetry={onRetry}
            onRetrying={onRetrying}
            retryButtonVariant={retryButtonVariant}
          />
        </ModalContainer>
      </ModalOverlay>
    </Portal>
  ) : null;
};

const ModalErrorContent = (props: ModalErrorProps) => {
  const {
    title = "Something went wrong",
    message = "An unexpected error has occurred. Please try again soon!",
    retryButtonVariant = "outlined-filled",
    retryButtonColorScheme,
  } = props;
  const { onRetrying, onRetry, onClose } = props;
  const error = useTheme().colors.red["500"];
  return (
    <>
      <Horizontal horizontalAlign={"right"}>
        <CloseButton onClick={onClose} />
      </Horizontal>
      <VerticalSpacer spacing={8} />
      <Vertical horizontalAlign={"center"}>
        <Vertical horizontalAlign={"center"} spacing={12}>
          <IconError size={48} color={error} />
          <Heading4>{title}</Heading4>
          <Text textAlign={"center"}>{message}</Text>
        </Vertical>
        {onRetry && (
          <Button
            onClick={onRetry}
            isLoading={onRetrying}
            colorScheme={retryButtonColorScheme}
            variant={retryButtonVariant}
          >
            Try Again
          </Button>
        )}
      </Vertical>
      <VerticalSpacer spacing={32} />
    </>
  );
};

type BasicModalProps = {
  children: React.ReactNode;
} & BaseModalProps;

/**
 * Basic Modal that allows the consumer to provide its on UI
 */
export const BasicModal = (props: BasicModalProps) => {
  const { isOpen, onClose, modalWidth, padding, children } = props;
  const node = React.useRef<HTMLDivElement>(null);

  const _onClose = () => {
    onClose?.();
  };

  useKeyboardEvent("escape", _onClose);
  useOnOutsideClick(node, _onClose);

  return isOpen ? (
    <Portal>
      <ModalOverlay>
        <ModalContainer ref={node} modalWidth={modalWidth} padding={padding}>
          {children}
        </ModalContainer>
      </ModalOverlay>
    </Portal>
  ) : null;
};

export const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: ${zIndices.overlay};
  top: 0;
  left: 0;
  ${fadeIn}
`;

export const ModalContainer = styled.div<{ modalWidth?: number; padding?: number }>`
  background: white;
  z-index: ${zIndices.modal};
  max-width: ${(props) => props.modalWidth ?? 500}px;
  width: 100%;
  height: auto;
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
  border-radius: ${(props) => props.theme.radius.sm};
  box-shadow: ${shadows.xl};
  padding: ${(props) => props.padding ?? spaces.md}px;
  @media (max-width: ${breakpoints.sm}px) {
    width: 95%;
  }
`;

export const ModalContent = (props: { children: React.ReactNode }) => (
  <div style={{ paddingTop: "16px", paddingBottom: "16px" }}>{props.children}</div>
);
