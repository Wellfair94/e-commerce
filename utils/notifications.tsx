import { Icon } from "@chakra-ui/react";
import Notification from "components/Notification";
import { BiShoppingBag } from "react-icons/bi";
import { ImUndo } from "react-icons/im";

export const notifications = {
  ADDED_TO_BASKET: "ADDED_TO_BASKET",
  REMOVED_FROM_BASKET: "REMOVED_FROM_BASKET",
  CLEARED_BASKET: "CLEARED_BASKET",
};

// Pass in type from object above, and handleClick if call to action needed
export const getNotificationProps = (type: string, handleClick: () => void) => {
  const props = {
    ADDED_TO_BASKET: {
      render: () => (
        <Notification
          title="Item added to basket"
          icon={<Icon as={BiShoppingBag} w={8} h={8} />}
          description="Click to checkout"
          handleClick={handleClick}
        />
      ),
    },
    REMOVED_FROM_BASKET: {
      render: () => (
        <Notification
          title="Item removed from basket"
          icon={<Icon as={ImUndo} w={7} h={7} />}
          description="Click to undo"
          handleClick={handleClick}
        />
      ),
    },
    CLEARED_BASKET: {
      render: () => (
        <Notification
          title="Basket cleared"
          icon={<Icon as={ImUndo} w={7} h={7} />}
          description="Click to undo"
          handleClick={handleClick}
        />
      ),
    },
  };

  return props[type];
};
