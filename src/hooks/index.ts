import { useDrag, useDrop, DragSourceMonitor } from "react-dnd";
import { DraggableCardProps } from "../types";

export const useCardDrag = (props: DraggableCardProps) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "Card",
    item: { id: props.id },
    canDrag: () => !props.isSpacer,
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return [isDragging, dragRef];
};

export const useCardDrop = (props: DraggableCardProps) => {
  const [, dropRef] = useDrop({
    accept: "Card",
    hover: (item: { id: string; type: string }) => {
      const coord = props.coordinates;
      if (item.id !== props.id) props.moveCard(item.id, coord);
    },
  });
  return dropRef;
};
