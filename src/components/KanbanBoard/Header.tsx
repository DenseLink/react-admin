import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import type { DropResult } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";

import Column from "./Column";
import { initialData } from "./Data";

const onDragEnd = (result: DropResult): void => {
  const { destination, source } = result;
};

const Header = (): JSX.Element => {
  const [state, setState] = useState(initialData);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Flex
        bg="main-bg"
        color="white-text"
        flexDir="column"
        minH="100vh"
        pb="2rem"
        w="full"
      >
        <Flex align="center" flexDir="column" py="4rem">
          <Heading fontSize="3xl" fontWeight={600}>
            React Beautiful Drag and Drop
          </Heading>
          <Text color="subtle-text" fontSize="20px" fontWeight={600}>
            react-beautiful-dnd
          </Text>
        </Flex>

        <Flex justify="space-between" px="4rem">
          {state.columnOrder.map((columnId) => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </Flex>
      </Flex>
    </DragDropContext>
  );
};

export default Header;
