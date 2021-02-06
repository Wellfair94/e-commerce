import { Fade, Button } from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  bg?: string;
  text: string;
}

const FadeButton: React.FC<Props> = ({ isOpen, text, bg }) => {
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
      >
        {text}
      </Button>
    </>
  );
};

export default FadeButton;
