import BasketItem from "components/BasketItem/types";

type Actions =
  | { type: "add-item"; payload: BasketItem }
  | { type: "remove-item"; payload: { id: string } }
  | { type: "clear-cart" };

export const BasketActions = {
  ADD_ITEM: "add-item",
  REMOVE_ITEM: "remove-item",
  CLEAR_CART: "clear-cart",
};

interface Basket {
  basket: BasketItem[];
  prevBasket: BasketItem[];
}

export const BasketReducer = (state: Basket, action: Actions) => {
  const { basket } = state;

  switch (action.type) {
    case "add-item":
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
    case "remove-item":
      const filtered = basket.filter(({ id }) => id !== action.payload.id);
      return { basket: filtered, prevBasket: basket };
    case "clear-cart":
      return { basket: [], prevBasket: basket };
    default:
      return state;
  }
};
