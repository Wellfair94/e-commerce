import { UseToastOptions } from "@chakra-ui/react";

interface Notifications {
  addedToCart: UseToastOptions;
}

export const notifications: Notifications = {
  addedToCart: {
    title: "Item added to basket",
    description: "Click to view",
    status: "success",
    duration: 5000,
    isClosable: true,
  },
};
