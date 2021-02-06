import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Heading,
  Text,
  HStack,
  ModalCloseButton,
  Button,
  Image,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import QuantityInput from "components/shared/QuantityInput";
import BasketItem from "components/BasketItem/types";

interface Props {
  product: BasketItem;
  isOpen: boolean;
  onClose: () => void;
  handleClick: (payload: BasketItem) => void;
}

const QuickView: React.FC<Props> = ({
  product,
  isOpen,
  onClose,
  handleClick,
}) => {
  const [updateQuantity, setUpdateQuanity] = useState(1);

  const { id, name, price } = product;

  const payload = {
    id: id,
    name: name,
    price: price,
    quantity: updateQuantity,
  };

  return (
    <Modal
      size="3xl"
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent borderRadius="none">
        <ModalCloseButton />
        <ModalBody py={8}>
          <HStack>
            <Image w="50%" />
            <Stack w="50%" spacing={4}>
              <Heading size="md">{name}</Heading>
              <Text fontSize="md">{price}</Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                nobis laborum dolorum nulla asperiores optio sint perspiciatis
                id in illum.
              </Text>
              <QuantityInput
                quantity={updateQuantity}
                setQuantity={setUpdateQuanity}
              />
              <Button
                borderRadius="none"
                color="white"
                bg="black"
                onClick={() => handleClick(payload)}
              >
                Add to cart
              </Button>
              <Text fontSize="sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </Stack>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default QuickView;
