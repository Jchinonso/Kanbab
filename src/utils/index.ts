import { CardProps, ColumnProps } from "../types";
import { v4 as uuidv4 } from "uuid";

export const formatCards = (items: ColumnProps[], arr: CardProps[], index: number) => {
  return items.map((item, i) => {
    if (i === index) {
      const updatedArr = arr.map((item, index) => {
        return { name: item.name, id: uuidv4() };
      });
      return { ...item, cards: [...item.cards, ...updatedArr] };
    }
    return item;
  });
};
export const updateColumnCards =
  (columnIndex: number, updateCards: (cards: CardProps[]) => CardProps[]) =>
  (columns: ColumnProps[]) => {
    const updatedColumns = [...columns];
    updatedColumns[columnIndex] = {
      ...columns[columnIndex],
      cards: updateCards(columns[columnIndex].cards),
    };
    return { columns: updatedColumns };
  };

export const getCoordinates = (columns: ColumnProps[], cardId: string) => {
  let y = -1; // assign y a default value of -1
  const x = columns.findIndex((column) => {
    y = column.cards.findIndex((card) => card.id === cardId);
    return y !== -1;
  });

  // Return [-1, -1] if card is not found
  if (x === -1) {
    return [-1, -1];
  }

  return [x, y];
};
