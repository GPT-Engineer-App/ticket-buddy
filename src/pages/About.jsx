import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <Heading as="h1" mb={4}>About Us</Heading>
    <Text fontSize="lg">
      Welcome to the Service Ticket Management App. This application helps manage service tickets efficiently by providing different roles such as Customer, Service Moderator, Service Agent, and Service Manager. Each role has specific functionalities to ensure smooth operation and resolution of service tickets.
    </Text>
  </Box>
);

export default About;