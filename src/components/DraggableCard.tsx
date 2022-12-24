import { useRef } from "react";
import { useDrag, useDrop, DragSourceMonitor } from "react-dnd";
import cn from "classnames";
import styled, { css } from "styled-components";

import { DraggableCardProps } from "../types";

// styled components
const StyledCard = styled.div`
  padding: 15px;
  background: #011936;
  color: #f4fffd;
  border-radius: 5px;
  margin-bottom: 10px;
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

const StyledCardTitle = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const DraggableCard = (props: DraggableCardProps) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "Card",
    item: { id: props.id }, // full property definition with colon
    canDrag: () => !props.isSpacer,
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [, dropRef] = useDrop({
    accept: "Card",
    hover: (item: { id: string; type: string }) => {
      const coord = props.coordinates;
      if (item.id !== props.id) props.moveCard(item.id, coord);
    },
  });
  const ref = useRef(null);
  dragRef(ref);
  dropRef(ref);
  return (
    <StyledCard ref={ref} isDragging={isDragging} isSpacer={props.isSpacer}>
      <StyledCardTitle>{props.name}</StyledCardTitle>
    </StyledCard>
  );
};
