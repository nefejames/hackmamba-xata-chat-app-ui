import { Box, VStack } from "@chakra-ui/react";
import ChatProfile from "./ChatProfile";

export default function ChatContainer({ chats }) {
  return (
    <Box
      bg="green.200"
      padding={[3, 5]}
      h="70vh"
      overflowY="scroll"
      w={["full", "600px"]}
      display="flex"
      justifyContent="flex-start"
    >
      <VStack spacing={5}>
        <ChatProfile />
      </VStack>
    </Box>
  );
}
