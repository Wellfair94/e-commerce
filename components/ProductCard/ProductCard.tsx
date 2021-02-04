import {
  Stack,
  Box,
  Flex,
  Button,
  Text,
  useDisclosure,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
} from "@chakra-ui/react";
import { useState } from "react";
import FadeSlideButton from "components/shared/FadeSlideButton";
import FadeButton from "components/shared/FadeButton";

// ADD RESPONSIVELY SIZING IMAGES

interface Props {
  id: String;
  name: String;
  price: String;
  tag: String;
}

const ProductCard: React.FC<Props> = ({ id, name, price, tag }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      bg="white"
      w="100%"
      spacing={0}
      onMouseOver={onToggle}
      onMouseOut={onToggle}
    >
      <Box
        w="100%"
        h="350px"
        bg="tomato"
        position="relative"
        _hover={{ cursor: "pointer" }}
      >
        {tag && (
          <Flex
            bg="black"
            position="absolute"
            py={2}
            px={7}
            color="white"
            fontWeight="600"
          >
            <Text>{tag}</Text>
          </Flex>
        )}

        <FadeSlideButton isOpen={isOpen} text="Quick view" />
      </Box>
      <Flex w="100%" bg="none" textAlign="center" p={6} direction="column">
        {/* <Text mb={1}>{name}</Text>
        <Text mb={5}>{price}</Text> */}
        <Box>
          <Text mb={5}>
            {name} <br /> {price}
          </Text>
        </Box>
        <FadeButton isOpen={isOpen} text="Add to cart" bg="green" />
      </Flex>
    </Stack>
  );
};

export default ProductCard;
