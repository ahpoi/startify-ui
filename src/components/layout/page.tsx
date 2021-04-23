import styled from "styled-components";
import { fadeIn } from "../others/animations";

/**
 * Please use <GlobalStyle/> first to setup and normalised the html/body/setup flex..etc
 *  <PageRoot>
 *    <PageHeader>
 *    <PageBody>
 *       <div> My Components </div>
 *    <PageBody/>
 *    <PageFooter/>
 *  </PageRoot>
 */
/**
 * Creates a full page height flexbox
 */
export const PageRoot = styled.div.attrs({
  "data-comment": "page-root",
})`
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const PageBody = styled.main.attrs({
  "data-comment": "page-body",
})`
  ${fadeIn}
  flex-basis: auto;
  flex-shrink: 0;
  flex: 1 1 auto;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`;
