import { SlideFade, Button } from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  bg?: String;
  text: String;
  handleClick: () => void;
}

const FadeButton: React.FC<Props> = ({ isOpen, text, handleClick }) => {
  return (
    <SlideFade
      style={{ position: "absolute", bottom: 0, width: "100%" }}
      in={isOpen}
    >
      <Button
        onClick={handleClick}
        position="absolute"
        bottom="0"
        isFullWidth
        borderRadius="none"
        bg="white"
        color="black"
      >
        {text}
      </Button>
    </SlideFade>
  );
};

export default FadeButton;
