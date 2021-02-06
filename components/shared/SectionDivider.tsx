import { Stack, Heading, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  subText: string;
}

const SectionDivider: React.FC<Props> = ({ title, subText }) => {
  return (
    <Stack
      mt={10}
      mb={2}
      justify="center"
      align="center"
      p={10}
      textAlign="center"
      bg="white"
      spacing={5}
    >
      <Heading fontWeight="500">{title}</Heading>
      <Text w="100%" maxW="600px">
        {subText}
      </Text>
    </Stack>
  );
};

export default SectionDivider;
