import {
  Stack,
  Box,
  Flex,
  Text,
  useDisclosure,
  useToast,
  UseToastOptions,
  Image,
  Img,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import FadeSlideButton from "components/shared/FadeSlideButton";
import FadeButton from "components/shared/FadeButton";
import QuickView from "components/QuickView";
import Props from "components/ProductCard/types";
import BasketItem from "components/BasketItem/types";
import { BasketContext } from "contexts/BasketContext";
import { BasketActions } from "reducers/BasketReducer";
import { notifications } from "utils/notifications";
import { useNotifications } from "hooks/useNotifications";

const ProductCard: React.FC<Props> = ({ id, name, price, tag }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [showQuickView, setShowQuickView] = useState(false);
  const { dispatch } = useContext(BasketContext);
  const toast = useToast();

  const product = {
    id: id,
    name: name,
    price: price,
    quantity: 1,
  };

  const handleClick = (payload: BasketItem) => {
    dispatch({ type: BasketActions.ADD_ITEM, payload: payload });
    toast(notifications.ADDED_TO_BASKET);
  };

  const handleClose = () => {
    setShowQuickView(false);
    onToggle();
  };

  return (
    <>
      <QuickView
        product={product}
        isOpen={showQuickView}
        onClose={handleClose}
        handleClick={handleClick}
      />
      <Stack
        bg="none"
        w="100%"
        spacing={0}
        onMouseEnter={() => !isOpen && onToggle()}
        onMouseLeave={() => isOpen && onToggle()}
      >
        <Flex
          position="relative"
          _hover={{ cursor: "pointer" }}
          justify="center"
        >
          <Img src="https://images.unsplash.com/photo-1612367289874-0fba3b4a07dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" />
          {tag && (
            <Flex
              bg="black"
              position="absolute"
              py={2}
              px={7}
              color="white"
              fontWeight="600"
              left="0"
            >
              <Text>{tag}</Text>
            </Flex>
          )}
          <FadeSlideButton
            isOpen={isOpen}
            handleClick={() => setShowQuickView(true)}
            text="Quick view"
          />
        </Flex>

        <Flex w="100%" bg="none" textAlign="center" p={6} direction="column">
          <Text>{name}</Text>
          <Text mb={5}>{price}</Text>

          <FadeButton
            isOpen={isOpen}
            text="Add to basket"
            bg="green"
            handleClick={() => handleClick(product)}
          />
        </Flex>
      </Stack>
    </>
  );
};

export default ProductCard;
