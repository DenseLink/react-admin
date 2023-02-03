import dynamic from 'next/dynamic';
import type { ComponentType, FC, ReactElement} from 'react';
// eslint-disable-next-line import/no-duplicates
import { createContext} from 'react';
// eslint-disable-next-line import/no-duplicates
import { useState } from 'react';


type Process = {
  Component: ComponentType;
};

type Processes = {
  [id: string]: Process;
};

type ProcessContextState = {
  processes: Processes;
};

const ProcessContext = createContext<ProcessContextState>({ processes: {} });

const processDirectory: Processes = {
  HelloWorld: {
    // eslint-disable-next-line import/extensions
    Component: dynamic(() => import('./HelloWorld'))
  }
};

const useProcessContextState = (
  startupProcesses: Processes
): ProcessContextState => {
  const [processes] = useState(startupProcesses);

  return { processes };
};

const ProcessProvider: FC = ({ children }) => (
  <ProcessContext.Provider value={useProcessContextState(processDirectory)}>
    {children}
  </ProcessContext.Provider>
);

const ProcessConsumer = ProcessContext.Consumer;

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ processes }) =>
      Object.entries(processes).map(([id, { Component }]) => (
        <Component key={id} />
      ))
    }
  </ProcessConsumer>
);

export default function Home(): ReactElement {
  return (
    <ProcessProvider>
      <ProcessLoader />
    </ProcessProvider>
  );
}
