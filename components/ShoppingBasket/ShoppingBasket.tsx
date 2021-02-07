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
  Text,
} from "@chakra-ui/react";
import BasketItem from "components/BasketItem";
import { useContext } from "react";
import { BasketContext } from "contexts/BasketContext";
import Link from "next/link";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingBasket: React.FC<Props> = ({ isOpen, onClose }) => {
  const { basket = [] } = useContext(BasketContext);

  const numberOfItems = basket.length;

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
            Your shopping basket
          </DrawerHeader>

          <DrawerBody p={2}>
            <Stack spacing={1}>
              {numberOfItems ? (
                basket.map(({ id, name, price, quantity }) => (
                  <BasketItem
                    key={id}
                    id={id}
                    name={name}
                    price={price}
                    quantity={quantity}
                  />
                ))
              ) : (
                <Text mx={3}>Your basket is empty</Text>
              )}
            </Stack>
          </DrawerBody>
          <DrawerFooter p={5} bg="gray.100">
            <Stack spacing={4} w="100%">
              <Stack spacing={1}>
                <Heading size="md" fontWeight="500">
                  Total ({numberOfItems} item{numberOfItems === 1 ? "" : "s"}):
                  £0.00
                </Heading>
              </Stack>

              <Divider />
              <Link href="/checkout">
                <Button
                  bg="black"
                  color="white"
                  borderRadius="none"
                  disabled={numberOfItems === 0}
                >
                  Checkout
                </Button>
              </Link>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default ShoppingBasket;
