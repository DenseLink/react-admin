import dynamic from 'next/dynamic';
import type { ComponentType, FC, ReactElement} from 'react';
// eslint-disable-next-line import/no-duplicates
import { createContext} from 'react';
// eslint-disable-next-line import/no-duplicates
import { useState } from 'react';
import styled from 'styled-components';


type Process = {
  Component: ComponentType;
  hasWindow: boolean;
};

type Processes = {
  [id: string]: Process;
};

type ProcessContextState = {
  processes: Processes;
};

const initialProccessContextState = {
  processes: {}
};

const ProcessContext = createContext<ProcessContextState>(
  initialProccessContextState
);

const STARTUP_PROCESSES: string[] = ['HelloWorld'];

const processDirectory: Processes = {
  HelloWorld: {
    // eslint-disable-next-line import/extensions
    Component: dynamic(() => import('./HelloWorld')),
    hasWindow: true
  }
};

const getStartupProcesses = (): Processes =>
  STARTUP_PROCESSES.reduce(
    (acc, id) => ({
      ...acc,
      [id]: processDirectory[id]
    }),
    {}
  );

const useProcessContextState = (
  startupProcesses: Processes
): ProcessContextState => {
  const [processes] = useState(startupProcesses);

  return { processes };
};

type ProcessProviderProps = {
  startupProcesses: Processes;
};

const ProcessProvider: FC<ProcessProviderProps> = ({
  children,
  startupProcesses
}) => (
  <ProcessContext.Provider value={useProcessContextState(startupProcesses)}>
    {children}
  </ProcessContext.Provider>
);


const StyledWindow = styled.section`
  background-color: ${({ theme }) => theme.colors.window};
`;
const Window: FC = ({ children }) => <StyledWindow>{children}</StyledWindow>;
const ProcessConsumer = ProcessContext.Consumer;

const RenderProcess: FC<Process> = ({ Component, hasWindow }) =>
  hasWindow ? (
    <Window>
      <Component />
    </Window>
  ) : (
    <Component />
  );

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ processes }) =>
        Object.entries(processes).map(([id, process]) => (
          <RenderProcess key={id} {...process} />
        ))
    }
  </ProcessConsumer>
);

export default function Home(): ReactElement {
  return (
    <ProcessProvider startupProcesses={getStartupProcesses()}>
      <ProcessLoader />
    </ProcessProvider>
  );
}
