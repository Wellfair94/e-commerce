import {
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  IconButton,
  Button,
  useToast,
  HStack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import Props from "components/BasketItem/types";
import { DeleteIcon } from "@chakra-ui/icons";
import { BasketContext } from "contexts/BasketContext";
import { BasketActions } from "reducers/BasketReducer";
import { notifications } from "utils/notifications";
import { useNotifications } from "hooks/useNotifications";
import QuantityInput from "components/shared/QuantityInput";

const BasketItem: React.FC<Props> = ({ id, name, price, quantity }) => {
  const [updateQuantity, setUpdateQuanity] = useState(quantity);
  const [total, setTotal] = useState(10);
  const { dispatch } = useContext(BasketContext);
  const toast = useToast();

  const clearBasket = () => {
    dispatch({ type: BasketActions.CLEAR_BASKET });
    toast(notifications.CLEARED_BASKET);
  };

  const removeItem = () => {
    dispatch({ type: BasketActions.REMOVE_ITEM, payload: { id: id } });
    toast(notifications.REMOVED_FROM_BASKET);
  };

  // Should go on product object
  const url =
    "https://images.unsplash.com/photo-1612367289874-0fba3b4a07dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80";

  return (
    <Flex
      w="100%"
      justifyContent="flex-start"
      align="center"
      bg="white"
      py={2}
      px={4}
      boxShadow="sm"
    >
      <Image src={url} w="15%" mr={2} />
      <HStack spacing={2} justifyContent="space-between" w="100%" h="100%">
        <Stack spacing={0} pr={1}>
          <Text fontWeight="600">{name}</Text>
          <Text fontSize="sm">{price}</Text>
          <Text fontSize="sm">Quantity {quantity}</Text>
        </Stack>
        <Flex
          direction="column"
          justifyContent="flex-start"
          h="100%"
          align="center"
        >
          <Text fontWeight="600">£19.98</Text>
          <Text
            as="u"
            fontSize="sm"
            _hover={{ cursor: "pointer" }}
            onClick={removeItem}
          >
            Remove
          </Text>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default BasketItem;
