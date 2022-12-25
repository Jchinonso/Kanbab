import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-between;
  padding: 1.5em;
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

  &:hover {
    background: #D1D1D1;
  }
`;
export const StyledImage = styled.img`

`;
export const StyledCardTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 200px;
  font-size: 1em;
  line-height: 140%;
  letter-spacing: -0.0125em;
  color: #515151;
`;
