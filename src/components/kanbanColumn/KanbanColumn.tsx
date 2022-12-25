import { ReactNode } from "react";
import { ColumnProps } from "../../types";
import { StyledColumn, StyledColumnTitle } from "./StyledKanbanColumn";

export const Column = (
  props: Pick<ColumnProps, "title"> & {
    children: ReactNode;
    numOfItems: number;
  }
) => {
  return (
    <StyledColumn>
      <StyledColumnTitle>
        {props.title}
        {` (${props.numOfItems})`}
      </StyledColumnTitle>
      {props.children}
    </StyledColumn>
  );
};
