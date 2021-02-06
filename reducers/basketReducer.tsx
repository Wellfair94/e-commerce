import BasketItem from "components/BasketItem/types";

interface ActionTypes {
  type: string;
  payload?: BasketItem;
}

export const basketActions = {
  ADD_ITEM: "add-item",
  REMOVE_ITEM: "remove-item",
  CLEAR_CART: "clear-cart",
};

export const basketReducer = (state: BasketItem[], action: ActionTypes) => {
  switch (action.type) {
    case basketActions.ADD_ITEM:
      const duplicateItem = state.find(({ id }) => id === action.payload.id);

      if (duplicateItem) {
        const updatedItem = {
          ...duplicateItem,
          quantity: duplicateItem.quantity + action.payload.quantity,
        };

        const removeDuplicate = state.filter((item) => item !== duplicateItem);
        return [...removeDuplicate, updatedItem];
      } else return [...state, action.payload];
    case basketActions.REMOVE_ITEM:
      return state.filter(({ id }) => id !== id);
    case basketActions.CLEAR_CART:
      return [];
    default:
      return state;
  }
};
