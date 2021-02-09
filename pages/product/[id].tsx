import Layout from "layout";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default function Product() {
  return (
    <Layout>
      <Product />
    </Layout>
  );
}
