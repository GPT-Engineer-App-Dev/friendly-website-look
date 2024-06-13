import { Container, Text, VStack, Box, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} align="start">
        <Box>
          <Image src="/images/stripe-logo.png" alt="Stripe Logo" />
        </Box>
        <Box>
          <Text fontSize="2xl" fontWeight="bold">Congratulations Lovable Labs Incorporated!</Text>
        </Box>
        <Box>
          <Text fontSize="md">You've just received your first payment through Stripe.</Text>
        </Box>
        <Box>
          <Text fontSize="md">Your first payout for this payment of <Text as="span" fontWeight="bold">$10.00</Text> (minus any fees) should land in your bank account on <Text as="span" fontWeight="bold">12/28/23</Text>.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;