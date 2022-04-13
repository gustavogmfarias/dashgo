import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gustavo Goulart</Text>
        <Text color="gray.300" fontSize="small">
          gustavogmfarias@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Gustavo Goulart"
        src="https://github.com/gustavogmfarias.png"
      />
    </Flex>
  );
}
