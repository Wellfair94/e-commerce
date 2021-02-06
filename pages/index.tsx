import { Flex, Button, Heading, Text, Stack, Grid } from "@chakra-ui/react";
import ProductCard from "components/ProductCard";
import SectionDivider from "components/shared/SectionDivider";
import Layout from "layout";

const products = [
  {
    id: "1",
    name: "product one",
    price: "$9.99",
    tag: "Best Seller",
    quantity: 1,
  },
  {
    id: "2",
    name: "product two",
    price: "$9.99",
    tag: "New",
    quantity: 1,
  },
  {
    id: "3",
    name: "product three",
    price: "$9.99",
    quantity: 1,
  },
  {
    id: "4",
    name: "product one",
    price: "$9.99",
    tag: "Best Seller",
    quantity: 1,
  },
  {
    id: "5",
    name: "product two",
    price: "$9.99",
    tag: "New",
    quantity: 1,
  },
  {
    id: "6",
    name: "product three",
    price: "$9.99",
    quantity: 1,
  },
];

export default function Home() {
  return (
    <Layout>
      <Flex
        direction="column"
        justify="center"
        align="center"
        textAlign="center"
        bg="grey"
        w="100%"
        minH="70vh"
        py={5}
        mb={10}
      >
        <Heading color="white" fontWeight="600" size="3xl">
          YOUR WEBSITE
        </Heading>
        <Heading color="white" size="lg" fontWeight="400" mt={4} mb={10}>
          Your subtitle here
        </Heading>
        <Button borderRadius="none" bg="black" color="white" w="150px">
          Shop Now
        </Button>
      </Flex>

      <SectionDivider
        title="OUR COLLECTION"
        subText="I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you."
      />

      <Grid
        templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={2}
      >
        {products.map(({ id, name, price, tag = null, quantity }) => (
          <ProductCard key={id} id={id} name={name} price={price} tag={tag} />
        ))}
      </Grid>
    </Layout>
  );
}
