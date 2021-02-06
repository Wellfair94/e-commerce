import { UseToastOptions } from "@chakra-ui/react";

interface Notifications {
  addedToBasket: UseToastOptions;
  removedFromBasket: UseToastOptions;
}

export const notifications: Notifications = {
  addedToBasket: {
    title: "Item added to basket",
    description: "Click to checkout",
    status: "success",
    duration: 5000,
    isClosable: true,
  },
  removedFromBasket: {
    title: "Item removed from basket",
    description: "Click to undo",
    status: "warning",
    duration: 5000,
    isClosable: true,
  },
};
