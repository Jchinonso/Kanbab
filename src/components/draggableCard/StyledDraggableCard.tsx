import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-between;
  padding: 15px;
  background: #eeeeee;
  color: #f4fffd;
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
export const StyledImage = styled.img`
  display: flex;
  align-self: flex-start;
`;
export const StyledCardTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.0125em;
  color: #515151;
`;
