import { Divider, Stack, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Stack
      px={5}
      py={10}
      w="100%"
      bg="green"
      justify="space-evenly"
      align="center"
      direction={["column", "column", "row"]}
      textAlign={["center", "center", "left"]}
      spacing={5}
    >
      <Stack fontWeight="600">
        <Text>About</Text>
        <Text>Contact</Text>
        <Text>FAQ</Text>
        <Text>Shipping & Returns</Text>
        <Text>Store Policy</Text>
        <Text>Payment Methods</Text>
      </Stack>
      <Divider display={["block", "block", "none"]} />
      <Stack fontWeight="600">
        <Text>CERAMIC-STUDIO</Text>
        <Text>A: 500 Terry Francois St</Text>
        <Text>San Francisco, CA 94158</Text>
        <Text>T: 123-456-7890</Text>
        <Text>E: info@my-domain.com</Text>
      </Stack>
      <Divider display={["block", "block", "none"]} />
      <Stack fontWeight="600">
        <Text>MON - FRI: 7am - 10pm</Text>
        <Text>SATURDAY: 8am - 10pm</Text>
        <Text>SUNDAY: 8am - 11pm</Text>
      </Stack>
    </Stack>
  );
};

export default Footer;
