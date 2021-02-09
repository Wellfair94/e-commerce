import { Flex, Grid, Text, Input, Stack, Heading } from "@chakra-ui/react";
import Layout from "layout";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  return <Layout></Layout>;
}
