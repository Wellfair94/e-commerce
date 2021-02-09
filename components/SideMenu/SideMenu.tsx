import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Stack,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { sideMenuLinks } from "utils/static";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

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
              {sideMenuLinks.map(({ label, path }) => (
                <Link key={label} href={path}>
                  <Flex
                    bg="white"
                    p={4}
                    boxShadow="sm"
                    _hover={{ cursor: "pointer" }}
                  >
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
