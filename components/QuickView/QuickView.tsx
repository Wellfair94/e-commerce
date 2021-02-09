import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import ProductProps from "interfaces/Product";
import Product from "components/Product";

interface Props {
  product: ProductProps;
  isOpen: boolean;
  onClose: () => void;
}

const QuickView: React.FC<Props> = ({ product, isOpen, onClose }) => {
  const [updateQuantity, setUpdateQuantity] = useState(1);

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
      blockScrollOnMount={false}
    >
      <ModalOverlay />
      <ModalContent borderRadius="none">
        <ModalCloseButton />
        <ModalBody py={8}>
          <Product
            name={name}
            price={price}
            quantity={updateQuantity}
            setQuantity={setUpdateQuantity}
            payload={payload}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default QuickView;
