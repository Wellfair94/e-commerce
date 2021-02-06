import { Box, Container } from "@chakra-ui/react";
import Footer from "components/Footer";
import Header from "components/Header";

// ADD SEO OPTIONS AS PROPS

const Layout: React.FC = ({ children }) => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Header />
      <Box p={[2, 2, 5, 5]}>
        <Box w="100%" mt="40px">
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
