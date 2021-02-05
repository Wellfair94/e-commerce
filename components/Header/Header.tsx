import {
  Flex,
  HStack,
  Text,
  useDisclosure,
  Button,
  Avatar,
} from "@chakra-ui/react";
import ShoppingBasket from "components/ShoppingBasket";
import SideMenu from "components/SideMenu";
import { useState } from "react";

const Header: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [showBasket, setShowBasket] = useState(false);

  return (
    <>
      <Flex h="60px" bg="tomato" w="100%" justify="center">
        <Flex align="center" justify="space-between" w="100%" p={[3, 3, 0, 0]}>
          <Text mr={10}>Logo</Text>

          <HStack spacing={5} display={["none", "none", "flex", "flex"]}>
            <Text>Home</Text>
            <Text>Shop</Text>
            <Text>About</Text>
            <Text>Contact</Text>
          </HStack>

          <HStack spacing={5}>
            <Button onClick={() => setShowBasket(true)}>Basket</Button>
            <Button display={["block", "block", "none"]} onClick={onOpen}>
              Menu
            </Button>
            <Flex align="center" display={["none", "none", "flex"]}>
              {" "}
              <Avatar size="xs" _hover={{ cursor: "pointer" }} />
              <Text ml={1}>Log in</Text>
            </Flex>
          </HStack>
        </Flex>
      </Flex>
      <SideMenu isOpen={isOpen} onClose={onClose} />
      <ShoppingBasket
        isOpen={showBasket}
        onClose={() => setShowBasket(false)}
      />
    </>
  );
};

export default Header;
