import { Column } from "./KanbanColumn";
import { DraggableCard } from "./DraggableCard";
import { ColumnProps } from "../types";

interface BoardProps {
  columns: ColumnProps[];
  moveCard: (draggingItemId: string, coordinates: [number, number]) => void;
}

export const Board = ({ columns, moveCard }: BoardProps) => {
  return (
    <div className="Board">
      {columns.map((column, x) => {
        const { id, title, cards } = column;

        return (
          <Column key={id} title={title}>
            {column.cards.length ? (
              cards.map((card, y) => {
                const { id, name } = card;
                return (
                  <DraggableCard
                    key={id}
                    name={name}
                    id={id}
                    coordinates={[x, y]}
                    moveCard={moveCard}
                  />
                );
              })
            ) : (
              <DraggableCard
                isSpacer
                coordinates={[x, 0]}
                moveCard={moveCard}
              />
            )}
          </Column>
        );
      })}
    </div>
  );
};