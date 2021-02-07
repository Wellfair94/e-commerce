import {
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  ComponentWithAs,
  IconProps,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { BiShoppingBag } from "react-icons/bi";

interface Props {
  title: string;
  // ! Look into solution for below
  icon: any;
  //   icon: ComponentWithAs<"svg", IconProps>;
  description: string;
  duration?: number;
  isClosable?: boolean;
}

const Notification: React.FC<Props> = ({ title, icon, description }) => {
  return (
    <HStack
      bg="white"
      p={4}
      py={4}
      _hover={{ cursor: "pointer" }}
      onClick={() => alert("test")}
      boxShadow="md"
      spacing={5}
    >
      {icon}
      <Stack spacing={0}>
        <Text fontWeight="700">{title}</Text>
        <Text>{description}</Text>
      </Stack>
    </HStack>
  );
};

export default Notification;
