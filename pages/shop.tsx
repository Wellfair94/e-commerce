import { Flex, Grid, Text, Input, Stack, Heading } from "@chakra-ui/react";
import ProductCard from "components/ProductCard";
import SectionDivider from "components/shared/SectionDivider";
import Layout from "layout";
import { useReducer, useState } from "react";
import { ShopReducer } from "reducers/ShopReducer";

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

export default function Shop() {
  const [state, dispatch] = useReducer(ShopReducer, []);
  const [input, setInput] = useState("");

  const search = products.filter(({ name }) => name.includes(input));

  console.log(search);

  return (
    <Layout>
      <Stack spacing={3}>
        <SectionDivider
          title="Shop"
          subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero odio unde repudiandae consequatur. Quisquam facere laborum aliquam velit nemo."
          dark
        />

        <Stack bg="white" align="center" p={10}>
          <Input
            placeholder="Search for a product"
            maxW="lg"
            onChange={(e) => setInput(e.target.value)}
          />
        </Stack>

        <Grid
          templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap={2}
        >
          {search.map(({ id, name, price, tag = null, quantity }) => (
            <ProductCard key={id} id={id} name={name} price={price} tag={tag} />
          ))}
        </Grid>
      </Stack>
    </Layout>
  );
}
