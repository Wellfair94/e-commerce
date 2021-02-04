import { SlideFade, Button } from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  bg?: String;
  text: String;
}

const FadeButton: React.FC<Props> = ({ isOpen, text }) => {
  return (
    <SlideFade
      style={{ position: "absolute", bottom: 0, width: "100%" }}
      in={isOpen}
    >
      <Button
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
