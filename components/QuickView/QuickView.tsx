import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Heading,
  Text,
  ModalCloseButton,
  Button,
  Image,
  Flex,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const QuickView: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal
      size="3xl"
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent borderRadius="none">
        <ModalHeader>
          <Heading size="md">Product One</Heading>
          <Text fontSize="md">£9.99</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={10}>
          <Flex>
            <Image w="50%" h="300px" />
            <Text>Description</Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default QuickView;
