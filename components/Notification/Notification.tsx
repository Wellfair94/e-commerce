import { HStack, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  title: string;
  // ! Look into solution for below
  icon: any;
  //   icon: ComponentWithAs<"svg", IconProps>;
  description: string;
  duration?: number;
  isClosable?: boolean;
  handleClick?: () => void;
}

const Notification: React.FC<Props> = ({
  title,
  icon,
  description,
  handleClick,
}) => {
  const [clicked, setClicked] = useState(false);

  const closeIfClicked = () => {
    setClicked(true);
    handleClick();
  };

  return (
    <HStack
      bg="gray.50"
      p={4}
      py={4}
      _hover={{ cursor: "pointer" }}
      onClick={closeIfClicked}
      boxShadow="md"
      spacing={5}
      color="gray.800"
      display={clicked ? "none" : "flex"}
    >
      {icon}
      <Stack spacing={0}>
        <Text fontWeight="800">{title}</Text>
        <Text fontSize="lg" fontWeight="400">
          {description}
        </Text>
      </Stack>
    </HStack>
  );
};

export default Notification;
