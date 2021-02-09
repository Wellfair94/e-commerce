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
import { useBasket } from "hooks/useBasket";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingBasket: React.FC<Props> = ({ isOpen, onClose }) => {
  const { basket, totalItems, totalPrice } = useContext(BasketContext);
  const { clearBasket } = useBasket();

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
              {totalItems ? (
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
              <Stack spacing={2}>
                <Text
                  fontSize="sm"
                  as="u"
                  _hover={{ cursor: "pointer" }}
                  onClick={clearBasket}
                >
                  Clear basket
                </Text>
                <Heading size="md" fontWeight="500">
                  Total ({totalItems} item{totalItems === 1 ? "" : "s"}): £
                  {totalPrice.toFixed(2)}
                </Heading>
              </Stack>

              <Divider />
              <Link href="/checkout">
                <Button
                  bg="black"
                  color="white"
                  borderRadius="none"
                  disabled={totalItems === 0}
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
