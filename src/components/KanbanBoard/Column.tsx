import { Flex, Text } from "@chakra-ui/react";
import { Draggable, Droppable } from "react-beautiful-dnd";

export type Task = {
  content: string;
  id: number;
};

type ColumnProps = {
  column: {
    id: string;
    taskIds: number[];
    title: string;
  };
  tasks: Task[];
};

const Column = ({ column, tasks }: ColumnProps): JSX.Element => {
  return (
    <Flex bg="column-bg" flexDir="column" h="620px" rounded="3px" w="400px">
      <Flex
        align="center"
        bg="column-header-bg"
        h="60px"
        mb="1.5rem"
        px="1.5rem"
        rounded="3px 3px 0 0"
      >
        <Text color="subtle-text" fontSize="17px" fontWeight={600}>
          {column.title}
        </Text>
      </Flex>
      <Droppable droppableId={column.id}>
        {(droppableProvided) => (
          <Flex
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
            flex={1}
            flexDir="column"
            px="1.5rem"
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                {(draggableProvided, draggableSnapshot) => (
                  <Flex
                    ref={draggableProvided.innerRef}
                    bg="card-bg"
                    h="72px"
                    mb="1rem"
                    outline="2px solid"
                    p="1.5rem"
                    rounded="3px"
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                    boxShadow={
                      draggableSnapshot.isDragging
                        ? "0 5px 10px rgba(0, 0, 0, 0.6)"
                        : "unset"
                    }
                    outlineColor={
                      draggableSnapshot.isDragging
                        ? "card-border"
                        : "transparent"
                    }
                  >
                    <Text>{task.content}</Text>
                  </Flex>
                )}
              </Draggable>
            ))}
          </Flex>
        )}
      </Droppable>
    </Flex>
  );
};

export default Column;
