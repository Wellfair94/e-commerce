import {
  Flex,
  HStack,
  Text,
  useDisclosure,
  Button,
  Avatar,
  IconButton,
} from "@chakra-ui/react";
import ShoppingBasket from "components/ShoppingBasket";
import SideMenu from "components/SideMenu";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BiShoppingBag } from "react-icons/bi";

// ! Fix centering of links

const Header: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [showBasket, setShowBasket] = useState(false);

  return (
    <>
      <Flex h="60px" bg="tomato" w="100%" justify="center">
        <Flex align="center" justify="space-between" w="100%" p={0}>
          <Text mr={10}>Logo</Text>

          <HStack spacing={5} display={["none", "none", "none", "flex"]}>
            <Text>Home</Text>
            <Text>Shop</Text>
            <Text>About</Text>
            <Text>Contact</Text>
          </HStack>

          <HStack spacing={4}>
            <IconButton
              bg="none"
              aria-label="Basket"
              onClick={() => setShowBasket(true)}
              icon={<BiShoppingBag />}
              _hover={{ background: "none" }}
            />

            <IconButton
              aria-label="Menu"
              bg="none"
              display={["block", "block", "block", "none"]}
              onClick={onOpen}
              icon={<HamburgerIcon w={6} h={6} />}
              _hover={{ background: "none" }}
            />

            {/* <Flex align="center" display={["none", "none", "none", "flex"]}>
              <Avatar size="xs" _hover={{ cursor: "pointer" }} />
              <Text ml={1}>Log in</Text>
            </Flex> */}
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
