import { Flex, Button, Heading, Text, Stack, Grid } from "@chakra-ui/react";
import ProductCard from "components/ProductCard";
import SectionDivider from "components/shared/SectionDivider";
import Layout from "layout";

export default function Shop() {
  return (
    <Layout>
      <SectionDivider title="Shop" subText="This is the shop" />
    </Layout>
  );
}
