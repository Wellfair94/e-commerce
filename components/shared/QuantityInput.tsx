import {
  NumberInput,
  NumberInputField,
  HStack,
  Button,
} from "@chakra-ui/react";

interface Props {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const QuantityInput: React.FC<Props> = ({ quantity, setQuantity }) => {
  // ! get max from api stock

  return (
    <NumberInput value={quantity} min={1} max={99}>
      <HStack spacing={0}>
        <Button
          borderRadius="none"
          onClick={() => setQuantity((prevState) => prevState - 1)}
        >
          -
        </Button>
        <NumberInputField w="70px" textAlign="center" borderRadius="none" />
        <Button
          borderRadius="none"
          onClick={() => setQuantity((prevState) => prevState + 1)}
        >
          +
        </Button>
      </HStack>
    </NumberInput>
  );
};

export default QuantityInput;
