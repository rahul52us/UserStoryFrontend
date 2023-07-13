import React, { useState } from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./Column";

interface Task {
  id: string;
  content: string;
}

interface Columns {
  id: string;
  title: string;
  tasks: Task[];
}

const Board: React.FC = () => {
  const initialColumns: Columns[] = [
    {
      id: "column-1",
      title: "To Do",
      tasks: [
        { id: "task-1", content: "Task 1" },
        { id: "task-2", content: "Task 2" },
        { id: "task-3", content: "Task 3" },
      ],
    },
    {
      id: "column-2",
      title: "In Progress",
      tasks: [
        { id: "task-4", content: "Task 4" },
        { id: "task-5", content: "Task 5" },
      ],
    },
    {
      id: "column-3",
      title: "Done",
      tasks: [{ id: "task-6", content: "Task 6" }],
    },
    {
      id: "column-4",
      title: "Complete",
      tasks: [{ id: "task-7", content: "Task 7" }],
    },
  ];

  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const sourceColumn = columns.find(
      (column) => column.id === source.droppableId
    );

    const destinationColumn = columns.find(
      (column) => column.id === destination.droppableId
    );

    if (!sourceColumn || !destinationColumn) {
      return;
    }

    const sourceTasks = [...sourceColumn.tasks];
    const destinationTasks = [...destinationColumn.tasks];

    const [removedTask] = sourceTasks.splice(source.index, 1);
    destinationTasks.splice(destination.index, 0, removedTask);

    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        if (column.id === sourceColumn.id) {
          return { ...column, tasks: sourceTasks };
        } else if (column.id === destinationColumn.id) {
          return { ...column, tasks: destinationTasks };
        }
        return column;
      })
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box mx={[-4, -6]} mb={-4}>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={3}>
          {columns.map((column) => (
            <Droppable droppableId={column.id} key={column.id}>
              {(provided: any) => (
                <Column
                  title={column.title}
                  tasks={column.tasks}
                  provided={provided}
                />
              )}
            </Droppable>
          ))}
        </SimpleGrid>
      </Box>
    </DragDropContext>
  );
};

export default Board;
