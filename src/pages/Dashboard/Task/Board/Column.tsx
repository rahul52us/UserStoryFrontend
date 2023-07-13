import React from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";

interface Task {
  id: string;
  content: string;
}

interface ColumnProps {
  title: string;
  tasks?: Task[];
  provided: any;
}

const Column: React.FC<ColumnProps> = ({ title, tasks, provided }) => {
  return (
    <Box
      p={4}
      borderRadius="md"
      bg="gray.100"
      boxShadow="md"
      minH={200}
      {...provided.droppableProps}
      ref={provided.innerRef}
    >
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontWeight="bold" fontSize="lg">
          {title}
        </Text>
        <Text color="gray.500" fontSize="sm">
          {tasks?.length || 0} tasks
        </Text>
      </Flex>
      <VStack spacing={5} align="stretch">
        {tasks?.map((task, index) => (
          <Draggable key={task.id} draggableId={task.id} index={index}>
            {(provided) => (
              <Box
                p={2}
                borderRadius="md"
                bg="white"
                boxShadow="sm"
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <Text>{task.content}</Text>
              </Box>
            )}
          </Draggable>
        ))}
      </VStack>
      {provided.placeholder}
    </Box>
  );
};

export default Column;
