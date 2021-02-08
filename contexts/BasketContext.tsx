import { createContext, useReducer } from "react";
import { BasketReducer } from "reducers/BasketReducer";

export const BasketContext = createContext(null);

const initialState = {
  basket: [],
  prevBasket: [],
};

const BasketProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(BasketReducer, initialState);

  const { basket, prevBasket } = state;

  const totalItems = basket.reduce((prevValue, curValue) => {
    return prevValue + curValue["quantity"];
  }, 0);

  const totalPrice = basket.reduce((prevValue, curValue) => {
    return prevValue + curValue["price"];
  }, 0);

  return (
    <BasketContext.Provider
      value={{ basket, prevBasket, dispatch, totalItems, totalPrice }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
