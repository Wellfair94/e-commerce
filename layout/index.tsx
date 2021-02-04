import { Box, Container } from "@chakra-ui/react";
import Footer from "components/Footer";
import Header from "components/Header";

// ADD SEO OPTIONS AS PROPS

const Layout: React.FC = ({ children }) => {
  return (
    <Box bg="white" minH="100vh">
      <Box p={[2, 2, 5, 5]}>
        <Header />
        <Box w="100%">{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
