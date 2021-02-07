import {
  Flex,
  Grid,
  Text,
  Input,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";
import ProductCard from "components/ProductCard";
import SectionDivider from "components/shared/SectionDivider";
import Layout from "layout";
import { useReducer, useState } from "react";
import { ShopReducer } from "reducers/ShopReducer";

const products = [
  {
    id: "1",
    name: "Product One",
    price: 5.0,
    tag: "Best Seller",
    quantity: 1,
  },
  {
    id: "2",
    name: "Product Two",
    price: 10.0,
    tag: "New",
    quantity: 1,
  },
  {
    id: "3",
    name: "Product Three",
    price: 9.99,
    quantity: 1,
  },
  {
    id: "4",
    name: "Product Four",
    price: 6.0,
    tag: "Best Seller",
    quantity: 1,
  },
  {
    id: "5",
    name: "Product Five",
    price: 10.0,
    tag: "New",
    quantity: 1,
  },
  {
    id: "6",
    name: "Product Six",
    price: 15.0,
    quantity: 1,
  },
];

export default function Shop() {
  const [state, dispatch] = useReducer(ShopReducer, []);
  const [input, setInput] = useState("");

  const search = products.filter(({ name }) => name.includes(input));
  const searchResults = search.length;

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
            value={input}
            placeholder="Search for a product"
            maxW="lg"
            onChange={(e) => setInput(e.target.value)}
          />
        </Stack>

        {searchResults && (
          <Grid
            templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
            gap={2}
          >
            {search.map(({ id, name, price, tag = null, quantity }) => (
              <ProductCard
                key={id}
                id={id}
                name={name}
                price={price}
                tag={tag}
              />
            ))}
          </Grid>
        )}

        {!searchResults && (
          <Stack
            textAlign="center"
            bg="gray.100"
            w="100%"
            p={10}
            mb={5}
            justify="center"
            align="center"
            spacing={5}
          >
            <Heading size="md">
              Sorry, we couldn't find what you're looking for.
            </Heading>
            <Button
              bg="black"
              color="white"
              borderRadius="none"
              onClick={() => setInput("")}
            >
              Reset search
            </Button>
          </Stack>
        )}
      </Stack>
    </Layout>
  );
}
