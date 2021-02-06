import {
  Stack,
  Box,
  Flex,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import FadeSlideButton from "components/shared/FadeSlideButton";
import FadeButton from "components/shared/FadeButton";
import QuickView from "components/QuickView";
import Props from "components/ProductCard/types";
import BasketItem from "components/BasketItem/types";
import { BasketContext } from "contexts/BasketContext";
import { BasketActions } from "reducers/BasketReducer";
import notifications from "utils/notifications";

// ADD RESPONSIVELY SIZING IMAGES

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
    toast({
      title: "Item added to basket",
      description: "Click to view.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
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
      />
      <Stack
        bg="none"
        w="100%"
        spacing={0}
        onMouseEnter={() => !isOpen && onToggle()}
        onMouseLeave={() => isOpen && onToggle()}
      >
        <Box
          w="100%"
          h="350px"
          bg="tomato"
          position="relative"
          _hover={{ cursor: "pointer" }}
        >
          {tag && (
            <Flex
              bg="black"
              position="absolute"
              py={2}
              px={7}
              color="white"
              fontWeight="600"
            >
              <Text>{tag}</Text>
            </Flex>
          )}

          <FadeSlideButton
            isOpen={isOpen}
            handleClick={() => setShowQuickView(true)}
            text="Quick view"
          />
        </Box>
        <Flex w="100%" bg="none" textAlign="center" p={6} direction="column">
          <Text>{name}</Text>
          <Text mb={5}>{price}</Text>

          <FadeButton
            isOpen={isOpen}
            text="Add to cart"
            bg="green"
            handleClick={() => handleClick(product)}
          />
        </Flex>
      </Stack>
    </>
  );
};

export default ProductCard;
