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
import { useContext } from "react";
import { BasketContext } from "contexts/BasketContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingBasket: React.FC<Props> = ({ isOpen, onClose }) => {
  const { basket } = useContext(BasketContext);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Basket</DrawerHeader>

          <DrawerBody p={2}>
            <Stack spacing={1}>
              {basket.map(({ id, name, price, quantity }) => (
                <BasketItem
                  key={id}
                  id={id}
                  name={name}
                  price={price}
                  quantity={quantity}
                />
              ))}
            </Stack>
          </DrawerBody>
          <DrawerFooter bg="white" p={5}>
            <Stack spacing={4} w="100%">
              <Stack spacing={1}>
                <Heading size="md" fontWeight="500">
                  Total: £59.94
                </Heading>
              </Stack>

              <Divider />
              <Button
                bg="black"
                color="white"
                borderRadius="none"
                disabled={basket.length === 0}
              >
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
