import { Flex, Heading, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useState } from "react";
import type { DropResult } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";

import { initialData } from "./Data";

const Column = dynamic(() => import("./Column"));

type ColumnType = {
  id: string;
  taskIds: number[];
  title: string;
};

const reorderColumnList = (
  sourceCol: ColumnType,
  startIndex: number,
  endIndex: number
): ColumnType => {
  const newTaskIds = [...sourceCol.taskIds];
  const [removed] = newTaskIds.splice(startIndex, 1);
  newTaskIds.splice(endIndex, 0, removed);

  const newColumn: ColumnType = {
    ...sourceCol,
    taskIds: newTaskIds,
  };
  return newColumn;
};

type ColumnStateType = Record<
  string,
  {
    id: string;
    taskIds: number[];
    title: string;
  }
>;

const Header = (): JSX.Element => {
  const [state, setState] = useState<{
    columnOrder: string[];
    columns: ColumnStateType;
    tasks: Record<number, { content: string; id: number }>;
  }>(initialData);

  const onDragEnd = (result: DropResult): void => {
    const { destination, source } = result;
    // user drops in unregulated spot
    if (!destination) {
      return;
    }
    // if user drops in same location
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // If the user drops within the same column but in a different position
    const sourceCol = state.columns[source.droppableId];
    const destinationCol = state.columns[destination.droppableId];

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      );

      const updatedState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(updatedState);
      return;
    }

    // If the user moves from one column to another
    const startTaskIds = [...sourceCol.taskIds];
    const [removed] = startTaskIds.splice(source.index, 1);
    const newStartCol = {
      ...sourceCol,
      taskIds: startTaskIds,
    };

    const endTaskIds = [...destinationCol.taskIds];
    endTaskIds.splice(destination.index, 0, removed);
    const newEndCol = {
      ...destinationCol,
      taskIds: endTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      },
    };

    setState(newState);
  };

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
