import { Box, Button, Input, Flex, useToast } from "@chakra-ui/react";

export default function ChatInput() {
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const author = data.author;
    const newMessage = data.newMessage;
    alert(JSON.stringify(data));
    e.target.reset();

    toast({
      title: "Message created.",
      description: "Message sent to chat db.",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
  };

  return (
    <Box w={["full", "400px"]}>
      <form onSubmit={handleSubmit}>
        <Flex flexDir="column">
          <Input
            bg="white"
            name="author"
            type="text"
            w="full"
            mb={2}
            display="inline-block"
            placeholder="Author"
          />
          <Input
            bg="white"
            name="newMessage"
            type="text"
            w="full"
            mb={2}
            display="inline-block"
            placeholder="Message"
          />
          <Button
            color="white"
            bg="green.600"
            fontSize="md"
            mb={4}
            _hover={{ bg: "green.500" }}
          >
            Upload Avatar
          </Button>
          <Button
            type="submit"
            color="white"
            bg="green.900"
            fontSize="md"
            _hover={{ bg: "green.800" }}
          >
            Send
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
