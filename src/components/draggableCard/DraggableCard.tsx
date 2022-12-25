import { useRef } from "react";
import { useDrag, useDrop, DragSourceMonitor } from "react-dnd";
import { DraggableCardProps } from "../../types";
import {
  StyledCard,
  StyledCardTitle,
  StyledImage,
} from "./StyledDraggableCard";

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
      <StyledImage
        src="/../svgs/arrow-left.svg"
        alt="Description of the image"
      />
      <StyledCardTitle>{props.name}</StyledCardTitle>
      <StyledImage
        src="/../svgs/arrow-right.svg"
        alt="Description of the image"
      />
    </StyledCard>
  );
};
