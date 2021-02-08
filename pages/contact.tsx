import SectionDivider from "components/shared/SectionDivider";
import Layout from "layout";
import Section from "components/shared/Section";

export default function Contact() {
  return (
    <Layout>
      <SectionDivider
        title="Contact"
        subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veniam nostrum ipsam officia voluptas voluptates asperiores, vitae ex libero vero alias tenetur fugit odio soluta, harum sunt. Fugit, at maxime."
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
