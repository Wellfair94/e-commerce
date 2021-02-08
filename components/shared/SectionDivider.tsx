import { Stack, Heading, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  subText?: string;
  dark?: boolean;
}

const SectionDivider: React.FC<Props> = ({ title, subText, dark }) => {
  return (
    <Stack
      mb={2}
      justify="center"
      align="center"
      p={10}
      w="100%"
      textAlign="left"
      bg={dark ? "gray.800" : "white"}
      color={dark ? "white" : "gray.800"}
      spacing={5}
    >
      <Heading fontWeight="700" w="100%" maxW="600px">
        {title}
      </Heading>
      <Text w="100%" maxW="600px">
        {subText}
      </Text>
    </Stack>
  );
};

export default SectionDivider;
