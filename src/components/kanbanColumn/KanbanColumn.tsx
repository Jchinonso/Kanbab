import { ReactNode } from "react";
import { ColumnProps } from "../../types";
import { StyledColumn, StyledColumnTitle } from "./StyledKanbanColumn";

export const Column = (
  props: Pick<ColumnProps, "title"> & { children: ReactNode }
) => {
  return (
    <StyledColumn>
      <StyledColumnTitle>{props.title}</StyledColumnTitle>
      {props.children}
    </StyledColumn>
  );
};
