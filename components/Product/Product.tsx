import { HStack, Image, Stack, Heading, Text, Button } from "@chakra-ui/react";
import QuantityInput from "components/shared/QuantityInput";
import { useBasket } from "hooks/useBasket";
import { url } from "utils/static";

const Product = ({ name, price, quantity, setQuantity, payload }) => {
  const { handleClick } = useBasket();

  return (
    <HStack spacing={6} align="flex-start">
      <Image src={url} w="50%" />
      <Stack w="50%" spacing={6}>
        <Stack>
          <Heading size="md">{name}</Heading>
          <Text fontSize="md">£{price.toFixed(2)}</Text>
        </Stack>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nobis
          laborum dolorum nulla asperiores optio sint perspiciatis id in illum.
        </Text>
        <QuantityInput quantity={quantity} setQuantity={setQuantity} />
        <Button
          borderRadius="none"
          color="white"
          bg="black"
          onClick={() => handleClick(payload)}
        >
          Add to basket
        </Button>
        <Text fontSize="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </Stack>
    </HStack>
  );
};

export default Product;
