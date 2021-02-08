import {
  Stack,
  Flex,
  Text,
  useDisclosure,
  useToast,
  Image,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import FadeSlideButton from "components/shared/FadeSlideButton";
import FadeButton from "components/shared/FadeButton";
import QuickView from "components/QuickView";
import Props from "interfaces/Product";
import { BasketContext } from "contexts/BasketContext";
import { BasketActions } from "reducers/BasketReducer";
import { getNotificationProps, notifications } from "utils/notifications";
import { url } from "utils/static";
import Router from "next/router";

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

  const handleClick = (payload: Props) => {
    dispatch({ type: BasketActions.ADD_ITEM, payload: payload });
    toast(
      getNotificationProps(notifications.ADDED_TO_BASKET, () =>
        Router.push("/checkout")
      )
    );
  };

  const handleClose = () => {
    setShowQuickView(false);
    onToggle();
  };

  return (
    <>
      <QuickView
        url={url}
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
          <Image src={url} w="100%" />
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
          <Text fontWeight="600">{name}</Text>
          <Text mb={5}>£{price.toFixed(2)}</Text>

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
