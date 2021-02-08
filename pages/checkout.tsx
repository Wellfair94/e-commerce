import { Stack, Button, Heading, Divider } from "@chakra-ui/react";
import ErrorMessage from "components/shared/ErrorMessage";
import SectionDivider from "components/shared/SectionDivider";
import { BasketContext } from "contexts/BasketContext";
import Layout from "layout";
import { useContext } from "react";
import Router from "next/router";
import BasketItem from "components/BasketItem";

export default function Checkout() {
  const { basket, totalItems, totalPrice } = useContext(BasketContext);

  return (
    <Layout>
      <SectionDivider
        title="Checkout"
        subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus quibusdam minus possimus vitae autem consequatur, provident quidem doloremque totam, quo eos molestiae perferendis esse dolore natus illo rerum voluptates."
        dark
      />

      <Stack
        align="center"
        p={5}
        bg={!totalItems ? "none" : "white"}
        spacing={3}
        mb={3}
      >
        {basket.map(({ id, name, price, quantity }) => (
          <BasketItem
            key={id}
            id={id}
            name={name}
            price={price}
            quantity={quantity}
          />
        ))}

        {!totalItems ? (
          <ErrorMessage
            message="Your basket is empty"
            button="Shop now"
            handleClick={() => Router.push("/shop")}
          />
        ) : (
          <Stack spacing={5} w="100%" maxW="600px">
            <Divider />
            <Heading size="md" textAlign="right">
              Total ({totalItems} item{totalItems === 1 ? "" : "s"}): £
              {totalPrice.toFixed(2)}
            </Heading>

            <Button
              isFullWidth
              bg="black"
              color="white"
              borderRadius="none"
              onClick={() => alert("Payment isn't working yet :)")}
            >
              Go to payment
            </Button>
          </Stack>
        )}
      </Stack>
    </Layout>
  );
}
