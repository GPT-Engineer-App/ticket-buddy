import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Service Ticket Management App</Heading>
        <Text fontSize="lg">Manage your service tickets efficiently with our app.</Text>
      </VStack>
    </Container>
  );
};

export default Index;