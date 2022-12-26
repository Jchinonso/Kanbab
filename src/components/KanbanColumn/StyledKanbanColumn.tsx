import styled, { css } from "styled-components";

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625em;
  width: 367px;
  height: 470px;
  overflow-y: scroll;
  ${css`
    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #ff0000;
    }
  `}
`;

export const StyledColumnTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 0.75em;
  margin-bottom: 1.7em;
  line-height: 0.9375em;
  letter-spacing: -0.0125em;
  color: #515151;
`;
