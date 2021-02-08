import { Flex, Grid, Text, Input, Stack, Heading } from "@chakra-ui/react";
import Section from "components/shared/Section";
import SectionDivider from "components/shared/SectionDivider";
import Layout from "layout";

export default function About() {
  return (
    <Layout>
      <SectionDivider
        title="About"
        subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita soluta sequi fugiat accusantium corporis illo nobis eos ipsum magni? Optio quisquam beatae fuga repudiandae fugit itaque minus accusamus non."
        dark
      />

      <Section
        title="This is a title"
        subtitle="This is a longer sub-title"
        body={[
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita soluta sequi fugiat accusantium corporis illo nobis eos ipsum magni? Optio quisquam beatae fuga repudiandae fugit itaque minus accusamus non.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita soluta sequi fugiat accusantium corporis illo nobis eos ipsum magni? Optio quisquam beatae fuga repudiandae fugit itaque minus accusamus non.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita soluta sequi fugiat accusantium corporis illo nobis eos ipsum magni? Optio quisquam beatae fuga repudiandae fugit itaque minus accusamus non.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita soluta sequi fugiat accusantium corporis illo nobis eos ipsum magni? Optio quisquam beatae fuga repudiandae fugit itaque minus accusamus non.",
        ]}
      />
    </Layout>
  );
}
