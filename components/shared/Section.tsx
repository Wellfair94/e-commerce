import { Heading, Stack, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  subtitle?: string;
  body: string[];
  dark?: boolean;
}

const Section: React.FC<Props> = ({ title, subtitle, body, dark }) => {
  return (
    <Stack
      align="center"
      w="100%"
      p={10}
      spacing={5}
      bg={dark ? "gray.800" : "gray.100"}
    >
      <Heading fontWeight="700" w="100%" maxW="600px">
        {title}
      </Heading>
      <Heading fontSize="xl" fontWeight="600" w="100%" maxW="600px">
        {subtitle}
      </Heading>
      {body.map((item, index) => (
        <Text key={index} w="100%" maxW="600px">
          {item}
        </Text>
      ))}
    </Stack>
  );
};

export default Section;
