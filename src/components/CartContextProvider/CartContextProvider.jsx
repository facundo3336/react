import { useState } from "react";
import { CartContext } from "../../Context/CartContext";

export const CartContextProvider = ({ children }) => {
  const [lines, setLines] = useState([]);

  function addItem(item, quantity) {
    const lineIndex = lines.findIndex((line) => {
      return line.item.id === item.id;
    });

    if (lineIndex === -1) {
      setLines([
        ...lines,
        {
          item,
          quantity,
        },
      ]);
    } else {
      const updatedLines = [...lines];
      const updatedLine = { ...updatedLines[lineIndex] };
      updatedLine.quantity = updatedLine.quantity + quantity;
      updatedLines[lineIndex] = updatedLine;
      setLines(updatedLines);
    }
  }

  function clearLines() {
    setLines([]);
  }

  function removeItem(id) {
    const lineIndex = lines.findIndex((line) => {
      return line.item.id === id;
    });

    if (lineIndex !== -1) {
      const updatedLines = [...lines];
      updatedLines.splice(lineIndex, 1);
      setLines(updatedLines);
    }
  }

  return (
    <CartContext.Provider
      value={{
        lines,
        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
