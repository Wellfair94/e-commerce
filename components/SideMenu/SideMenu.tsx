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
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Navbar: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Stack spacing={5}>
              <Text>Home</Text>
              <Text>Shop</Text>
              <Text>Account</Text>
              <Text>About</Text>
              <Text>FAQ</Text>
              <Text>Contact</Text>
            </Stack>
          </DrawerBody>
          <DrawerFooter p={0}>
            <Button w="50%" h="75px" borderRadius="none">
              Log in
            </Button>
            <Button w="50%" h="75px" borderRadius="none">
              Register
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Navbar;
