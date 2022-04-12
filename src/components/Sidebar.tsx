import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiDashboardLine} font-size="20" />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiContactsLine} font-size="20" />
              <Text ml="4" fontWeight="medium">
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMAÇÃO
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiInputMethodLine} font-size="20" />
              <Text ml="4" fontWeight="medium">
                Formulários
              </Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiGitMergeLine} font-size="20" />
              <Text ml="4" fontWeight="medium">
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
