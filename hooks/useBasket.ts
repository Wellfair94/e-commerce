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

  const handleClick = (payload: Product) => {
    dispatch({ type: BasketActions.ADD_ITEM, payload: payload });
    toast(
      getNotificationProps(notificationType, () => Router.push("/checkout"))
    );
  };

  return { handleClick };
};
