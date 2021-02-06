import { Stack, Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import FadeSlideButton from "components/shared/FadeSlideButton";
import FadeButton from "components/shared/FadeButton";
import QuickView from "components/QuickView";
import Props from "components/ProductCard/types";

// ADD RESPONSIVELY SIZING IMAGES

const ProductCard: React.FC<Props> = ({ id, name, price, tag }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [showQuickView, setShowQuickView] = useState(false);

  return (
    <>
      <QuickView
        isOpen={showQuickView}
        onClose={() => {
          setShowQuickView(false);
          onToggle();
        }}
      />
      <Stack
        bg="white"
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

          <FadeButton isOpen={isOpen} text="Add to cart" bg="green" />
        </Flex>
      </Stack>
    </>
  );
};

export default ProductCard;
