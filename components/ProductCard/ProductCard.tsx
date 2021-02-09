import { Stack, Flex, Text, useDisclosure, Image, Box } from "@chakra-ui/react";
import { useState } from "react";
import FadeSlideButton from "components/shared/FadeSlideButton";
import FadeButton from "components/shared/FadeButton";
import QuickView from "components/QuickView";
import Props from "interfaces/Product";
import { url } from "utils/static";
import { useBasket } from "hooks/useBasket";

const ProductCard: React.FC<Props> = ({ id, name, price, tag }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [showQuickView, setShowQuickView] = useState(false);
  const { addToBasket } = useBasket();

  const product = {
    id: id,
    name: name,
    price: price,
    quantity: 1,
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
        <Flex
          position="relative"
          _hover={{ cursor: "pointer" }}
          justify="center"
        >
          <Box>
            <Image src={url} h="auto" />
          </Box>

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
            handleClick={() => addToBasket(product)}
          />
        </Flex>
      </Stack>
    </>
  );
};

export default ProductCard;
