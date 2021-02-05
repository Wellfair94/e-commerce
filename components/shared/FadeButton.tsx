import { Fade, Button } from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  bg?: String;
  text: String;
}

const FadeButton: React.FC<Props> = ({ isOpen, text, bg }) => {
  return (
    <Fade in={isOpen}>
      <Button
        bottom="0"
        isFullWidth
        borderRadius="none"
        bg="black"
        color="white"
      >
        {text}
      </Button>
    </Fade>
  );
};

export default FadeButton;
