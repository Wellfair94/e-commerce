import { Flex, HStack, Text } from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <Flex h="60px" bg="tomato" w="100%" justify="center">
      <Flex align="center" justify="space-between" w="100%" p={[3, 3, 0, 0]}>
        <Text mr={10}>Logo</Text>

        <HStack spacing={5} display={["none", "none", "flex", "flex"]}>
          <Text>Home</Text>
          <Text>Shop</Text>
          <Text>About</Text>
          <Text>Contact</Text>
        </HStack>

        <HStack spacing={3}>
          <Text>Cart</Text>
          <Text>Menu</Text>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
