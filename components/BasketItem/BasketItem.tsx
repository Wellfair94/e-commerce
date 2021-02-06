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

const BasketItem: React.FC<Props> = ({ id, name, price, quantity }) => {
  const [updateQuantity, setUpdateQuanity] = useState(quantity);
  const [total, setTotal] = useState(10);
  const { dispatch } = useContext(BasketContext);
  const toast = useToast();

  const handleClick = () => {
    dispatch({ type: BasketActions.REMOVE_ITEM, payload: { id: id } });
    toast(notifications.removedFromBasket);
  };

  return (
    <Flex w="100%" bg="green" justifyContent="flex-start">
      <Image w="100px" />
      <Flex justifyContent="space-between" w="100%" h="100%" bg="grey">
        <Flex direction="column" p={3} pr={1}>
          <Text>{name}</Text>
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
        icon={<DeleteIcon />}
      />
    </Flex>
  );
};

export default BasketItem;
