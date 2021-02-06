import { SlideFade, Button } from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  bg?: string;
  text: string;
  handleClick: () => void;
}

// ! Add extra breakpoint for iPad Pro

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
        display={["none", "none", "none", "block"]}
      >
        {text}
      </Button>
    </SlideFade>
  );
};

export default FadeButton;
