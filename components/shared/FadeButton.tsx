import { Fade, Button } from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  bg?: string;
  text: string;
  handleClick: () => void;
}

const FadeButton: React.FC<Props> = ({ isOpen, text, handleClick }) => {
  return (
    <>
      <Fade in={isOpen}>
        <Button
          display={["none", "none", "none", "block"]}
          bottom="0"
          isFullWidth
          borderRadius="none"
          bg="black"
          color="white"
          onClick={handleClick}
        >
          {text}
        </Button>
      </Fade>
      <Button
        display={["block", "block", "block", "none"]}
        bottom="0"
        isFullWidth
        borderRadius="none"
        bg="black"
        color="white"
        onClick={handleClick}
      >
        {text}
      </Button>
    </>
  );
};

export default FadeButton;
