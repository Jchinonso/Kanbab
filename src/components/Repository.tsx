import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { DndProvider } from "react-dnd";
import styled from "styled-components";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Board } from "./Board";
import { ColumnProps } from "../types";
import { formatCards, updateColumnCards, getCoordinates } from "../utils";

const StyledDiv = styled.div`
  display: flex;
`;

const StyledH2 = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const StyledP = styled.p`
  color: red;
`;

export const Repository: React.FC = () => {
  const { state } = useLocation();

  const [columns, setColumns] = useState<ColumnProps[]>([
    { id: uuidv4(), title: "In Progress", cards: [] },
    { id: uuidv4(), title: "Review", cards: [] },
    { id: uuidv4(), title: "Ready to Merge", cards: [] },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchBranches = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.github.com/repos/${state.owner}/${state.repo}/branches`
      );
      const data = await response.json();
      const columnData = [...formatCards(columns, data, 0)];
      setColumns(columnData);
    } catch (e) {
      // e has type unknown
      const error = e instanceof Error;
      console.log(error, "======")
      setError(error.toString());
    } finally {
      setIsLoading(false);
    }
  }, [state.owner, state.repo, columns]);

  useEffect(() => {
    fetchBranches();
  }, []);

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
      {error && <StyledP>{error}</StyledP>}
      <StyledH2>
        {state.owner}/{state.repo}
      </StyledH2>
      <StyledDiv>
        <Board columns={columns} moveCard={moveCard} />
      </StyledDiv>
     
    </DndProvider>
  );
};
