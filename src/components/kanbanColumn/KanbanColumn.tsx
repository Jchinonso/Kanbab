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
    <div>
      <StyledColumnTitle>
        {props.title}
        {` (${props.numOfItems})`}
      </StyledColumnTitle>
      <StyledColumn>
      {props.children}
      </StyledColumn>
    </div>
  );
};
