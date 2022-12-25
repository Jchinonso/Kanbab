import { Column } from "../kanbanColumn/KanbanColumn";
import { DraggableCard } from "../draggableCard";
import { BoardProps } from "../../types";
import { StyledContainer } from "./StyledBoard";

export const Board = ({ columns, moveCard }: BoardProps) => {
  return (
    <StyledContainer>
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
    </StyledContainer>
  );
};