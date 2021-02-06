import { createContext, useReducer } from "react";
import { basketReducer } from "reducers/basketReducer";

export const BasketContext = createContext(null);

const testBasket = [
  {
    id: "1",
    name: "product 1",
    price: "£9.99",
    quantity: 2,
  },
  {
    id: "2",
    name: "product 2",
    price: "£9.99",
    quantity: 1,
  },
  {
    id: "3",
    name: "product 3",
    price: "£9.99",
    quantity: 1,
  },
];

const BasketProvider: React.FC = ({ children }) => {
  const [basket, dispatch] = useReducer(basketReducer, testBasket);

  return (
    <BasketContext.Provider value={{ basket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
