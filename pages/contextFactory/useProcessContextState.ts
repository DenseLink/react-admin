import { useState } from 'react';

export type Process = {
  Component: React.ComponentType;
  hasWindow?: boolean;
  icon: string;
  title: string;
};

export type Processes = {
  [id: string]: Process;
};

export type ProcessContextState = {
  processes: Processes;
};

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState<Processes>({});

  return { processes };
};

export default useProcessContextState;
