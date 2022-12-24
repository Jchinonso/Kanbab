import { ReactNode } from "react";
import { ColumnProps } from "../types";
import styled from "styled-components";

const StyledColumn = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 225px;
  padding: 10px 15px;
  border-radius: 5px;
  height: 50vh;
  margin-right: 20px;
  background: #465362;
  color: #bfdbf7;
  overflow: auto;
`;

const StyledColumnTitle = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Column = (
  props: Pick<ColumnProps, "title"> & { children: ReactNode }
) => {
  return (
    <StyledColumn>
      <StyledColumnTitle >
        {props.title}
      </StyledColumnTitle>
      {props.children}
    </StyledColumn>
  );
};
