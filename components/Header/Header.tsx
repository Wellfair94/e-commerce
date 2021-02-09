import {
  Flex,
  HStack,
  Text,
  useDisclosure,
  Button,
  Avatar,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import ShoppingBasket from "components/ShoppingBasket";
import SideMenu from "components/SideMenu";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BiShoppingBag } from "react-icons/bi";
import Link from "next/link";
import { headerLinks } from "utils/static";

const Header: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [showBasket, setShowBasket] = useState(false);

  return (
    <>
      <Flex
        h="60px"
        w="100%"
        justify="space-between"
        bg="gray.100"
        position="fixed"
        p={[2, 2, 5, 5]}
        zIndex="100"
        align="center"
      >
        <Flex w="150px">
          <Text>F R E D D I E . W</Text>
        </Flex>

        <HStack spacing={5} display={["none", "none", "none", "flex"]}>
          {headerLinks.map(({ label, path }) => (
            <Link href={path} key={label}>
              <Text fontWeight="500" _hover={{ cursor: "pointer" }}>
                {label}
              </Text>
            </Link>
          ))}
        </HStack>

        <Flex w="150px" justify="flex-end">
          <HStack spacing={4}>
            <IconButton
              bg="none"
              aria-label="Basket"
              onClick={() => setShowBasket(true)}
              icon={<Icon as={BiShoppingBag} w={6} h={6} />}
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
