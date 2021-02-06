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

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const QuickView: React.FC<Props> = ({ isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);

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
              <Heading size="md">Product One</Heading>
              <Text fontSize="md">£9.99</Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                nobis laborum dolorum nulla asperiores optio sint perspiciatis
                id in illum.
              </Text>
              <QuantityInput quantity={quantity} setQuantity={setQuantity} />
              <Button borderRadius="none" color="white" bg="black">
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
