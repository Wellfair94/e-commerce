import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Heading,
  Stack,
  Divider,
} from "@chakra-ui/react";
import BasketItem from "components/BasketItem";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const basket = [
  {
    id: "1",
    name: "product 1",
    price: "£9.99",
  },
  {
    id: "2",
    name: "product 2",
    price: "£9.99",
  },
  {
    id: "3",
    name: "product 3",
    price: "£9.99",
  },
];

const ShoppingBasket: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Basket</DrawerHeader>

          <DrawerBody p={2}>
            <Stack spacing={1}>
              {basket.map(({ id, name, price }) => (
                <BasketItem key={id} id={id} name={name} price={price} />
              ))}
            </Stack>
          </DrawerBody>
          <DrawerFooter bg="green" p={5}>
            <Stack spacing={4} w="100%">
              <Stack spacing={1}>
                <Heading size="md">Total: £59.94</Heading>
              </Stack>

              <Divider />
              <Button bg="black" color="white" borderRadius="none">
                Checkout
              </Button>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default ShoppingBasket;
