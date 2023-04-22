import dynamic from "next/dynamic";

const Kanbanboard = dynamic(() => import("../components/KanbanBoard"));

const kanban = (): JSX.Element => {
  return <Kanbanboard />;
};

export default kanban;
