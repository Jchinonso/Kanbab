import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Board } from "../board";
import { ColumnProps } from "../../types";
import { updateColumnCards, getCoordinates } from "../../utils";
import {
  StyledHeading,
  StyledSubHeading,
  StyledContainer,
  StyledHeaderContainer,
} from "./StyledRepository";

export const Repository: React.FC = () => {
  const { state } = useLocation();
  const [columns, setColumns] = useState<ColumnProps[]>(state.columns);

  const moveCard = (cardId: string, [destX, destY]: number[]) => {
    setColumns((prevColumns) => {
      const [curX, curY] = getCoordinates(prevColumns, cardId);
      const card = prevColumns[curX].cards[curY];
      const updatedColumnsCur = updateColumnCards(curX, (cards) => [
        ...cards.slice(0, curY),
        ...cards.slice(curY + 1),
      ])(prevColumns).columns;

      const updatedColumnsDes = updateColumnCards(destX, (cards) => [
        ...cards.slice(0, destY),
        card,
        ...cards.slice(destY),
      ])(updatedColumnsCur).columns;

      return updatedColumnsDes;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <StyledContainer>
        <StyledHeaderContainer>
          <StyledHeading>{state.repo}</StyledHeading>
          <StyledSubHeading>
            A component toolkit for creating live-running code editing
            experiences, using the power of CodeSandbox.
          </StyledSubHeading>
        </StyledHeaderContainer>

        <Board columns={columns} moveCard={moveCard} />
      </StyledContainer>
    </DndProvider>
  );
};
