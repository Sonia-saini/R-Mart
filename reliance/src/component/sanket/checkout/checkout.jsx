import { Box, Stack } from "@chakra-ui/react";
import React from "react";

const Checkout = () => {
  return (
    <Box>
      <Stack direction='column' align='center'>
        <Box>Delivery Method</Box>
        <Box>Order Details</Box>
        <Box>Pay Securely</Box>
      </Stack>
    </Box>
  );
};

export default Checkout;
