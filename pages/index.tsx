import { Flex, Button, Heading, Text, Stack, Grid } from "@chakra-ui/react";
import ProductCard from "components/ProductCard";
import Layout from "layout";

const products = [
  {
    id: "1",
    name: "product one",
    price: "$9.99",
    tag: "Best Seller",
  },
  {
    id: "2",
    name: "product two",
    price: "$9.99",
    tag: "New",
  },
  {
    id: "3",
    name: "product three",
    price: "$9.99",
  },
  {
    id: "4",
    name: "product one",
    price: "$9.99",
    tag: "Best Seller",
  },
  {
    id: "5",
    name: "product two",
    price: "$9.99",
    tag: "New",
  },
  {
    id: "6",
    name: "product three",
    price: "$9.99",
  },
];

export default function Home() {
  return (
    <Layout>
      <Flex
        direction="column"
        justify="center"
        align="center"
        bg="grey"
        w="100%"
        h="50vh"
      >
        <Heading color="white" fontWeight="600" size="3xl">
          CERAMIC STUDIO
        </Heading>
        <Heading color="white" size="lg" fontWeight="400" mt={4} mb={10}>
          Artisan Pottery
        </Heading>
        <Button borderRadius="none" bg="black" color="white" w="150px">
          Shop Now
        </Button>
      </Flex>

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
        <Heading fontWeight="500">OUR COLLECTION</Heading>
        <Text w="100%" maxW="600px">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </Text>
      </Stack>

      <Grid
        templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={2}
      >
        {products.map(({ id, name, price, tag = null }) => (
          <ProductCard key={id} id={id} name={name} price={price} tag={tag} />
        ))}
      </Grid>
    </Layout>
  );
}
