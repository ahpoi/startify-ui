import styled from "styled-components";

export const FieldContentContainer = styled.div`
  & > * {
    margin-bottom: 4px !important;
  }
  &>*: last-child {
    margin-bottom: 0px !important;
  }
`;
