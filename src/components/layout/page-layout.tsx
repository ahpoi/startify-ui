import styled, {css} from "styled-components";
import {content, vertical} from "./gls/box";

const fullWH = css`
  height: 100%;
  width: 100%;
`;

/**
 * Please use <GlobalStyle/> first to setup and normalised the html/body..etc
 *
 *  <PageRoot>
 *    <YourPageHeader>
 *      <PageMainBody>
 *        <YourContent></YourContent/>
 *      <PageMainBody/>
 *    <YourPageFooter/>
 *  </PageRoot>
 */

/**
 * Creates a full page height flexbox
 */
export const PageRoot = styled.div.attrs({
  "data-comment": "page-root"
})`
 ${fullWH}
 ${vertical}
 flex: 1;
`;

export const PageBody = styled.main.attrs({
  "data-comment": "page-body"
})`
 ${fullWH}
 ${content}
  flex: 1 1 auto;
  flex-direction: column;
  animation-name: fadeIn;
  animation-duration: 0.5s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
