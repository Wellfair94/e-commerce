import { Heading, Stack, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  subtitle?: string;
  body: string[];
  dark?: boolean;
  centerText?: boolean;
}

const Section: React.FC<Props> = ({
  title,
  subtitle,
  body,
  dark,
  centerText,
}) => {
  return (
    <Stack
      align="center"
      w="100%"
      p={10}
      textAlign={centerText ? "center" : "left"}
      spacing={5}
      bg={dark ? "gray.800" : "gray.100"}
      color={dark ? "white" : "gray.800"}
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
