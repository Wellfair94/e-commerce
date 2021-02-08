import { Stack, Heading, Button } from "@chakra-ui/react";

interface Props {
  message: string;
  button: string;
  handleClick: () => void;
}

const ErrorMessage: React.FC<Props> = ({ message, button, handleClick }) => {
  return (
    <Stack
      textAlign="center"
      bg="gray.100"
      w="100%"
      p={10}
      mb={5}
      justify="center"
      align="center"
      spacing={5}
    >
      <Heading size="md">{message}</Heading>
      <Button
        bg="black"
        color="white"
        borderRadius="none"
        onClick={handleClick}
      >
        {button}
      </Button>
    </Stack>
  );
};

export default ErrorMessage;
