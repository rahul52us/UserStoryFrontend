import { Box, Avatar, Text, Stack } from "@chakra-ui/react"; // Import Chakra UI components
import { getCustomTextDate } from "../../../../../../config/constant/dateUtils";

const DisplayComment = ({ comment }: any) => {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      mt={4}
      display="flex"
      flexDirection="column"
      alignItems="start"
      boxShadow="sm"
    >
      <Stack direction="row" alignItems="center" mb={2}>
        <Avatar size="sm" src={""} name={comment?.user?.name} />
        <Box>
        <Box display="flex" fontSize="sm" gap={1}>
          <Text fontWeight={700}>{comment?.user?.name}</Text>
          <Text color="gray.600" fontWeight={600} fontSize="small">
            (Student)
          </Text>
        </Box>
        <Text fontSize="xs" color="gray.600" fontWeight={600}>
          {getCustomTextDate('Commented on',new Date())}
        </Text>
      </Box>
      </Stack>
      <Text fontSize="sm">
      <div dangerouslySetInnerHTML={{ __html: comment.content }} />
      </Text>
    </Box>
  );
};

export default DisplayComment;