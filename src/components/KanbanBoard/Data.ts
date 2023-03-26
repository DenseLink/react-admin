export const initialData = {
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],

  columns: {
    "column-1": {
      id: "column-1",
      taskIds: [1, 2, 3, 4, 5, 6],
      title: "TO-DO",
    },
    "column-2": {
      id: "column-2",
      taskIds: [],
      title: "IN-PROGRESS",
    },
    "column-3": {
      id: "column-3",
      taskIds: [],
      title: "COMPLETED",
    },
  },

  tasks: {
    1: { content: "Configure Next.js application", id: 1 },
    2: { content: "Configure Next.js and tailwind ", id: 2 },
    3: { content: "Create sidebar navigation menu", id: 3 },
    4: { content: "Create page footer", id: 4 },
    5: { content: "Create page navigation menu", id: 5 },
    6: { content: "Create page layout", id: 6 },
  },
};
