interface ActionTypes {
  type: string;
  payload?: {
    id: string;
    quantity: number;
  };
}

export const basketActions = {
  ADD_ITEM: "add-item",
  REMOVE_ITEM: "remove-item",
  CLEAR_CART: "clear-cart",
};

export const basketReducer = (state: [], action: ActionTypes) => {
  switch (action.type) {
    case basketActions.ADD_ITEM:
      break;
    case basketActions.REMOVE_ITEM:
      break;
    case basketActions.CLEAR_CART:
      break;
    default:
      return state;
  }
};
