import Product from "interfaces/Product";

// ! ADD ACTION TO INCREASE/DECREASE QUANTITY OF ITEM

type Actions =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "CLEAR_BASKET" }
  | { type: "UNDO" };

export const BasketActions = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  CLEAR_BASKET: "CLEAR_BASKET",
  UNDO: "UNDO",
};

interface Basket {
  basket: Product[];
  prevBasket: Product[];
}

export const BasketReducer = (state: Basket, action: Actions) => {
  const { basket, prevBasket } = state;

  switch (action.type) {
    case "ADD_ITEM":
      const duplicateItem = basket.find(({ id }) => id === action.payload.id);

      if (duplicateItem) {
        const updatedItem = {
          ...duplicateItem,
          quantity: duplicateItem.quantity + action.payload.quantity,
        };

        const removeDuplicate = state.basket.filter(
          (item) => item !== duplicateItem
        );
        return {
          basket: [...removeDuplicate, updatedItem],
          prevBasket: [...basket],
        };
      } else {
        return { basket: [...basket, action.payload], prevBasket: basket };
      }
    case "REMOVE_ITEM":
      const filtered = basket.filter(({ id }) => id !== action.payload.id);
      return { basket: filtered, prevBasket: basket };
    case "CLEAR_BASKET":
      return { basket: [], prevBasket: basket };
    case "UNDO":
      return { basket: prevBasket, prevBasket: basket };
    default:
      return state;
  }
};
