import * as React from "react";

import styled from "styled-components";
import { breakpoints } from "../../theme/styles/breakpoints";
import { zIndices } from "../../theme/styles/z-index";
import { useKeyboardEvent, useOnOutsideClick } from "../../hooks/common.hook";
import { fadeIn } from "../others/animations";
import { Portal } from "../others/portal";
import { Text } from "../atoms/typography";
import { calculateUnit } from "../layout/gls/box";

type BaseModalProps = {
  isOpen?: boolean;
  onClose?: () => any;
  modalWidth?: number | string;
  children?: React.ReactNode;
};

export const Modal = (props: BaseModalProps) => {
  const { isOpen, onClose, modalWidth, children } = props;
  const node = React.useRef<HTMLDivElement>(null);

  const _onClose = () => {
    onClose?.();
  };

  useKeyboardEvent("escape", _onClose);
  useOnOutsideClick(node, _onClose);

  return isOpen ? (
    <Portal>
      <ModalOverlay />
      <ModalContainer aria-modal={true} ref={node} modalWidth={modalWidth}>
        {children}
      </ModalContainer>
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

export const ModalContainer = styled.div<{ modalWidth?: number | string }>`
  background: white;
  z-index: ${zIndices.modal};
  max-width: ${(props) => calculateUnit(props.modalWidth ?? props.theme.components.modal.container.width)};
  width: 100%;
  height: auto;
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
  border-radius: ${(props) => props.theme.components.modal.container.borderRadius};
  box-shadow: ${(props) => props.theme.components.modal.container.boxShadow};
  padding: ${(props) => props.theme.components.modal.container.padding};
  @media (max-width: ${breakpoints.sm}px) {
    width: 95%;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ModalTitle = styled(Text)`
  font-size: ${(props) => props.theme.components.modal.title.fontSize};
  font-weight: ${(props) => props.theme.components.modal.title.fontWeight};
`;

export const ModalBody = styled.div`
  margin: ${(props) => props.theme.components.modal.body.margin};
`;
