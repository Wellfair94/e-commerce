import { HStack, Stack, Text } from "@chakra-ui/react";
import { BasketContext } from "contexts/BasketContext";
import { BasketActions } from "reducers/BasketReducer";
import Router from "next/router";
import { useContext } from "react";

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
  // ! Need to find a scalable way of passing in onClick functions.
  // ! This works for a couple of notifiactions, but ideally they need
  // ! to be passed in as a prop. Hardcoding here makes it harder to manage
  // const handleClick = () => {
  //   if (title === "Item added to basket") {
  //     Router.push("/checkout");
  //   } else {
  //     // dispatch({ type: BasketActions.UNDO });
  //   }
  // };

  return (
    <HStack
      bg="gray.50"
      p={4}
      py={4}
      _hover={{ cursor: "pointer" }}
      onClick={handleClick}
      boxShadow="md"
      spacing={5}
      color="gray.800"
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
