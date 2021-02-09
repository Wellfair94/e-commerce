import { notifications, getNotificationProps } from "utils/notifications";
import { BasketActions } from "reducers/BasketReducer";
import { BasketContext } from "contexts/BasketContext";
import { useToast } from "@chakra-ui/react";
import { useContext } from "react";
import Product from "interfaces/Product";
import Router from "next/router";

export const useBasket = () => {
  const toast = useToast();
  const { dispatch } = useContext(BasketContext);

  const addToBasket = (payload: Product) => {
    dispatch({ type: BasketActions.ADD_ITEM, payload: payload });
    toast(
      getNotificationProps(notifications.ADDED_TO_BASKET, () =>
        Router.push("/checkout")
      )
    );
  };

  const removeFromBasket = (id: string) => {
    dispatch({ type: BasketActions.REMOVE_ITEM, payload: { id: id } });
    toast(
      getNotificationProps(notifications.REMOVED_FROM_BASKET, () =>
        dispatch({ type: BasketActions.UNDO })
      )
    );
  };

  const clearBasket = () => {
    dispatch({ type: BasketActions.CLEAR_BASKET });
    toast(
      getNotificationProps(notifications.REMOVED_FROM_BASKET, () => {
        dispatch({ type: BasketActions.UNDO });
      })
    );
  };

  return { addToBasket, removeFromBasket, clearBasket };
};
