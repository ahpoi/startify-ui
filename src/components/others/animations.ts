import {css} from "styled-components";

export const fadeIn = css`
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
