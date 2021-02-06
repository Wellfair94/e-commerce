import { Flex, Button, Heading, Text, Stack, Grid } from "@chakra-ui/react";
import ProductCard from "components/ProductCard";
import SectionDivider from "components/shared/SectionDivider";
import Layout from "layout";

export default function Shop() {
  return (
    <Layout>
      <SectionDivider
        title="Shop"
        subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero odio unde repudiandae consequatur. Quisquam facere laborum aliquam velit nemo."
        dark
      />
    </Layout>
  );
}
