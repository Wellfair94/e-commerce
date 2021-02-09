import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import ProductProps from "interfaces/Product";
import Product from "components/Product";

interface Props {
  product: ProductProps;
  isOpen: boolean;
  onClose: () => void;
}

const QuickView: React.FC<Props> = ({ product, isOpen, onClose }) => {
  const { id, name, price } = product;

  return (
    <Modal
      size="3xl"
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      blockScrollOnMount={false}
    >
      <ModalOverlay />
      <ModalContent borderRadius="none">
        <ModalCloseButton />
        <ModalBody py={8}>
          <Product id={id} name={name} price={price} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default QuickView;
