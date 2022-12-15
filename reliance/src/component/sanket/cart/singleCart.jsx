import {
  Box,
  Stack,
  Image,
  Button,
  useControllableState
} from "@chakra-ui/react";
import React from "react";

const SingleCart = () => {
  const [value, setValue] = React.useState(1);
  const [internalValue, setInternalValue] = useControllableState({
    value,
    onChange: setValue
  });

  return (
    <Box bg='white'>
      <Stack direction='row' justify='space-between' align='center'>
        <Stack direction='row' justify='space-between' align='center'>
          <Box>
            <Image src='' alt='' />
            <Box>
              <Button
                bg='gray.200'
                disabled={value === 1}
                _disabled={{ bg: "gray.100" }}
                onClick={() => setInternalValue(value - 1)}
              >
                -
              </Button>
              <Button
                border='2px solid'
                p='0'
                disabled
                _disabled={{ color: "black", bg: "white" }}
                mx='24px'
              >
                {internalValue}
              </Button>
              <Button onClick={() => setInternalValue(value + 1)}>+</Button>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SingleCart;
