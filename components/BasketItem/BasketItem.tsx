import { Image, Flex, Text, Stack } from "@chakra-ui/react";
import Props from "interfaces/Product";
import { url } from "utils/static";
import { useBasket } from "hooks/useBasket";

const BasketItem: React.FC<Props> = ({ id, name, price, quantity }) => {
  const { removeFromBasket } = useBasket();

  const total = quantity * price;

  return (
    <Flex
      w="100%"
      maxW="600px"
      justifyContent="flex-start"
      align="center"
      bg="white"
      py={2}
      px={4}
    >
      <Image src={url} w="15%" mr={2} />
      <Flex spacing={2} justifyContent="space-between" w="100%" h="100%">
        <Stack spacing={0} pr={1}>
          <Text fontWeight="600" fontSize="lg">
            {name}
          </Text>
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
            onClick={() => removeFromBasket(id)}
          >
            Remove
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BasketItem;
