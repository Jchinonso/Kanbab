import { useRef } from "react";
import { DraggableCardProps } from "../../types";
import { useCardDrag, useCardDrop } from "../../hooks";
import {
  StyledCard,
  StyledCardTitle,
  StyledImage,
} from "./StyledDraggableCard";
import { shouldRenderLeftArrow, shouldRenderRightArrow } from "../../utils";

export const DraggableCard = (props: DraggableCardProps) => {
  const ref = useRef(null);
  const [isDragging, dragRef] = useCardDrag(props);
  const dropRef = useCardDrop(props);
  if (typeof dragRef === "function") {
    dragRef(ref);
  }
  dropRef(ref);
  return (
    <StyledCard ref={ref} isDragging={isDragging} isSpacer={props.isSpacer}>
      {shouldRenderLeftArrow(props.title) ? (
        <StyledImage
          src="/../svgs/arrow-left.svg"
          alt="Description of the image"
        />
      ) : (
        <div></div>
      )}
      <StyledCardTitle>{props.name}</StyledCardTitle>
      {shouldRenderRightArrow(props.title) ? (
        <StyledImage
          src="/../svgs/arrow-right.svg"
          alt="Description of the image"
        />
      ) : (
        <div></div>
      )}
    </StyledCard>
  );
};
