import { UseToastOptions, Icon } from "@chakra-ui/react";
import Notification from "components/Notification";
import { BiShoppingBag } from "react-icons/bi";
import { ImUndo } from "react-icons/im";

interface Notifications {
  addedToBasket: UseToastOptions;
  removedFromBasket: UseToastOptions;
}

export const notifications: Notifications = {
  addedToBasket: {
    duration: 5000,
    isClosable: true,
    render: () => (
      <Notification
        title="Item added to basket"
        icon={<Icon as={BiShoppingBag} w={8} h={8} />}
        description="Click to checkout"
      />
    ),
  },
  removedFromBasket: {
    status: "warning",
    duration: 5000,
    isClosable: true,
    render: () => (
      <Notification
        title="Item removed from basket"
        icon={<Icon as={ImUndo} w={7} h={7} />}
        description="Click to undo"
      />
    ),
  },
};
