import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="teal.500" p={4}>
    <Flex justify="space-between" align="center">
      <Link as={RouterLink} to="/" color="white" fontSize="lg" fontWeight="bold">
        Home
      </Link>
      <Flex>
        <Link as={RouterLink} to="/about" color="white" mx={2}>
          About
        </Link>
        <Link as={RouterLink} to="/contact" color="white" mx={2}>
          Contact
        </Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;