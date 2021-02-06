import { createContext, useReducer } from "react";
import { BasketReducer } from "reducers/BasketReducer";
import BasketItem from "components/BasketItem/types";

export const BasketContext = createContext(null);

const initialState = {
  basket: [],
  prevBasket: [],
};

const BasketProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(BasketReducer, initialState);

  const { basket, prevBasket } = state;

  return (
    <BasketContext.Provider value={{ basket, prevBasket, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
