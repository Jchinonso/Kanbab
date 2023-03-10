export type ColumnProps = {
  id: string;
  title: string;
  cards: CardProps[];
};

export interface CardProps {
  name?: string | undefined;
  id?: string;
  coordinates?: [number, number];
}

export interface DraggableCardProps extends Partial<CardProps> {
  isSpacer?: boolean;
  title?: string;
  moveCard: (draggingItemId: string, coordinates: [number, number]) => void;
}

export type BoardProps = {
  columns: ColumnProps[];
  moveCard: (draggingItemId: string, coordinates: [number, number]) => void;
}
