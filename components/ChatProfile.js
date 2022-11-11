import { Box, Avatar, HStack, Text } from "@chakra-ui/react";

export default function ChatProfile({
  author = "John Doe",
  img,
  message = "This is a dummy message",
}) {
  return (
    <Box bg="white" borderRadius="2xl" p={2} w="100%">
      <HStack spacing={2} mb={2}>
        <Avatar name="John Doe" size="sm" src={img} />
        <Text as="span" fontSize="14px">
          {author}
        </Text>
      </HStack>

      <Text>{message}</Text>
    </Box>
  );
}
