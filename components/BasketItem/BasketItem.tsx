import {
  Image,
  Flex,
  Heading,
  Text,
  Icon,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import Props from "components/BasketItem/types";
import { DeleteIcon } from "@chakra-ui/icons";
import { BasketContext } from "contexts/BasketContext";
import { BasketActions } from "reducers/BasketReducer";
import { notifications } from "utils/notifications";
import { useNotifications } from "hooks/useNotifications";

const BasketItem: React.FC<Props> = ({ id, name, price, quantity }) => {
  const [updateQuantity, setUpdateQuanity] = useState(quantity);
  const [total, setTotal] = useState(10);
  const { dispatch } = useContext(BasketContext);
  const toast = useToast();

  const handleClick = () => {
    dispatch({ type: BasketActions.REMOVE_ITEM, payload: { id: id } });
    toast(notifications.REMOVED_FROM_BASKET);
  };

  // Should go on product object
  const url =
    "https://images.unsplash.com/photo-1612367289874-0fba3b4a07dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80";

  return (
    <Flex w="100%" justifyContent="flex-start" align="center">
      <Image src={url} w="20%" />
      <Flex justifyContent="space-between" w="100%" h="100%">
        <Flex direction="column" p={3} pr={1}>
          <Text fontWeight="600">{name}</Text>
          <Text fontSize="sm">{price}</Text>
          <Text fontSize="sm">Qty: {quantity}</Text>
        </Flex>
        <Flex p={3} pl={1} justifyContent="center" align="center">
          <Heading size="sm" fontWeight="500">
            £19.98
          </Heading>
        </Flex>
      </Flex>
      <IconButton
        onClick={handleClick}
        aria-label="Remove item"
        color="red.500"
        bg="none"
        _hover={{ background: "none" }}
        icon={<DeleteIcon />}
      />
    </Flex>
  );
};

export default BasketItem;
