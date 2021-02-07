import { Image, Flex, Text, Stack, useToast, HStack } from "@chakra-ui/react";
import { useContext } from "react";
import Props from "interfaces/Product";
import { BasketContext } from "contexts/BasketContext";
import { BasketActions } from "reducers/BasketReducer";
import { notifications } from "utils/notifications";
import { url } from "utils/url";

const BasketItem: React.FC<Props> = ({ id, name, price, quantity }) => {
  const { dispatch } = useContext(BasketContext);
  const toast = useToast();

  const removeItem = () => {
    dispatch({ type: BasketActions.REMOVE_ITEM, payload: { id: id } });
    toast(notifications.REMOVED_FROM_BASKET);
  };

  const total = quantity * price;

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
          <Text fontSize="xs">£{price.toFixed(2)}</Text>
          <Text fontSize="sm">Quantity {quantity}</Text>
        </Stack>
        <Flex
          direction="column"
          justifyContent="flex-start"
          h="100%"
          align="center"
        >
          <Text fontWeight="600">£{total.toFixed(2)}</Text>
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
