import { Box, Card, Flex, Image, Text } from "@chakra-ui/react";

interface Tag {
  name: string;
}

interface HomeServiceCompProps {
  item: {
    gradiant: string;
    preTitle: string;
    title: string;
    Image: string;
    tags: Tag[];
  };
}

const HomeServiceComp: React.FC<HomeServiceCompProps> = ({ item }) => {
  return (
    <Card bgGradient={item.gradiant} w="100%" p={4} borderRadius={5} boxShadow="rgb(0 0 0 / 20%) 0px 0px 11px">
      <Box display={"flex"} justifyContent={"center"}>
        <Box w={"80%"}>
          <Text
            fontWeight="600"
            fontSize="xs"
            color="white"
            mt={3}
            textAlign={"center"}
          >
            {item.preTitle}
          </Text>
          <Text
            fontWeight="600"
            fontSize="xl"
            color="white"
            mt={3}
            textAlign={"center"}
          >
            {item.title}
          </Text>
        </Box>
      </Box>
      <Box h="150px" w="100%" mt={8} mb={8}>
        <Image src={item.Image} objectFit="contain" h="100%" w="100%" />
      </Box>
      <Flex justify="space-around" flexWrap="wrap" gap={2}>
        {item.tags.map((tag, index) => (
          <Text
            key={index}
            border="1px solid rgba(255, 255, 255, 0.05)"
            bgColor="rgba(255, 255, 255, 0.05)"
            p={1}
            borderRadius={10}
            fontSize="sm"
            color="#ffffff"
            fontWeight="400"
          >
            {tag.name}
          </Text>
        ))}
      </Flex>
    </Card>
  );
};

export default HomeServiceComp;
