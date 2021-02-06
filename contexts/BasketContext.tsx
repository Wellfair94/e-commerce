import { createContext, useReducer } from "react";
import { basketReducer } from "reducers/basketReducer";

export const CartContext = createContext(null);

const BasketProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(basketReducer, []);

  return <CartContext.Provider value>{children}</CartContext.Provider>;
};

export default BasketProvider;
