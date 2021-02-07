import { Flex, Button, Heading, Grid, Image, Img } from "@chakra-ui/react";
import ProductCard from "components/ProductCard";
import SectionDivider from "components/shared/SectionDivider";
import Layout from "layout";
import { GetServerSideProps } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

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
        bg="url(https://images.unsplash.com/photo-1612052903339-ef40d2dbf2ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=882&q=80)"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="center center"
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
        <Link href="/shop">
          <Button borderRadius="none" bg="black" color="white" w="150px">
            Shop Now
          </Button>
        </Link>
      </Flex>

      <SectionDivider
        title="OUR COLLECTION"
        subText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum non iure explicabo provident itaque ab eius fugiat sapiente. Quia perspiciatis assumenda voluptatum similique in sint asperiores rem officiis beatae ab."
      />

      <Grid
        templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={2}
      >
        {products.map(({ id, name, price, tag = null, quantity }) => (
          <ProductCard key={id} id={id} name={name} price={price} tag={tag} />
        ))}
      </Grid>

      <SectionDivider
        title="ANOTHER SECTION"
        subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum accusantium perferendis maiores ex repudiandae, similique vero maxime illum voluptate temporibus delectus fugit! Dolor iste voluptatem eaque? Nesciunt, dolorem placeat?"
        dark
      />
    </Layout>
  );
}
