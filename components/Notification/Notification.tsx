import { HStack, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

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
  const router = useRouter();

  // ! Need to find a scalable way of passing in onClick functions.
  // ! This works for a couple of notifiactions, but ideally they need
  // ! to be passed in as a prop. Hardcoding here makes it harder to manage
  const handleClick = () => {
    if (title === "Item added to basket") {
      router.push("/checkout");
    } else {
      console.log("fdfs");
    }
  };

  return (
    <HStack
      bg="white"
      p={4}
      py={4}
      _hover={{ cursor: "pointer" }}
      onClick={handleClick}
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
