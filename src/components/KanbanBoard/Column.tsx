import { Flex, Text } from "@chakra-ui/react";

type Task = {
  content: string;
  id: string;
};

type ColumnProps = {
  column: {
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

      <Flex flex={1} flexDir="column" px="1.5rem">
        {tasks.map((task) => (
          <Flex
            key={task.id}
            bg="card-bg"
            h="72px"
            mb="1rem"
            outline="2px solid"
            p="1.5rem"
            rounded="3px"
          >
            <Text>{task.content}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Column;
