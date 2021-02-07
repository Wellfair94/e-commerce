import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  Stack,
  Flex,
  StackDivider,
} from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Shop",
    path: "/shop",
  },
  // {
  //   label: "Account",
  //   path: "/account",
  // },
  // {
  //   label: "About",
  //   path: "/about",
  // },
  {
    label: "FAQ",
    path: "/faq",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const Navbar: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      blockScrollOnMount={false}
    >
      <DrawerOverlay>
        <DrawerContent bg="gray.100">
          <DrawerCloseButton color="white" />
          <DrawerHeader py={5} px={5} bg="black" color="white">
            Menu
          </DrawerHeader>

          <DrawerBody p={2}>
            <Stack spacing={1} fontWeight="500">
              {links.map(({ label, path }) => (
                <Link key={label} href={path}>
                  <Flex bg="white" p={4} boxShadow="sm">
                    <Text>{label}</Text>
                  </Flex>
                </Link>
              ))}
            </Stack>
          </DrawerBody>
          {/* <DrawerFooter p={0}>
            <Button w="50%" h="75px" borderRadius="none">
              Log in
            </Button>
            <Button w="50%" h="75px" borderRadius="none">
              Register
            </Button>
          </DrawerFooter> */}
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Navbar;
