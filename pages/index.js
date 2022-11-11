import Head from "next/head";
import { Box, Flex, Heading } from "@chakra-ui/react";
import ChatContainer from "@components/ChatContainer";
import ChatInput from "@components/ChatInput";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Xata Chat App</title>
      </Head>
      <Heading as="h1" mb={5}>
        Xata Chat App
      </Heading>
      <Flex flexDir={["column", "row"]} justifyContent="space-between">
        <ChatContainer chats={data} />
        <Box mt={[5, 0]}>
          <ChatInput />
        </Box>
      </Flex>
    </div>
  );
}
