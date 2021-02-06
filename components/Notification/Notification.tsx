import {
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  ComponentWithAs,
  IconProps,
} from "@chakra-ui/react";
import { BiShoppingBag } from "react-icons/bi";

interface Props {
  title: string;
  // ! Look into solution for below
  icon: any;
  description: string;
}

const Notification: React.FC<Props> = ({ title, icon, description }) => {
  return (
    <HStack
      bg="white"
      //   borderRadius="sm"
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
