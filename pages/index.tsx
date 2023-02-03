import dynamic from 'next/dynamic';
import type { FC, ReactElement} from 'react';
// eslint-disable-next-line import/no-duplicates
import { createContext} from 'react';
// eslint-disable-next-line import/no-duplicates
import { useState } from 'react';


type Process = {
  Component: any;
};

type Processes = {
  [id: string]: Process;
};

type ProcessContextState = {
  processes: Partial<Process>;
};

const ProcessContext = createContext<ProcessContextState>({ processes: {} });

const processDirectory: Processes = {
  HelloWorld: {
    // eslint-disable-next-line import/extensions
    Component: dynamic(() => import('./HelloWorld'))
  }
};

const ProcessProvider: FC = ({ children }) => {
  const [processes] = useState(processDirectory);

  return (
    <ProcessContext.Provider value={{ processes }}>
      {children}
    </ProcessContext.Provider>
  );
};

const ProcessConsumer = ProcessContext.Consumer;

const WindowManager: FC = () => (
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
      <WindowManager />
    </ProcessProvider>
  );
}
