import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  padding: 15px;
  background: #eeeeee;
  color: #f4fffd;
  width: 367px;
  border-radius: 5px;
  cursor: move;

  ${(props) =>
    props.isDragging &&
    css`
      opacity: 0;
    `};

  ${(props) =>
    props.isSpacer &&
    css`
      cursor: initial;
      opacity: 0;
    `};
`;

export const StyledCardTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  letter-spacing: -0.0125em;

  /* Colors/Light/Shade 02 */

  color: #515151;
`;
