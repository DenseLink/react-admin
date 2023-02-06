import dynamic from 'next/dynamic';
import type { ComponentType, FC, ReactElement} from 'react';
// eslint-disable-next-line import/no-duplicates
import { createContext} from 'react';
// eslint-disable-next-line import/no-duplicates
import { useState } from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/extensions
import Taskbar from './Taskbar';


type Process = {
  Component: ComponentType;
  // eslint-disable-next-line react/require-default-props
  hasWindow?: boolean;
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

const { Consumer, Provider } = createContext<ProcessContextState>(
  initialProccessContextState
);

const STARTUP_PROCESSES: string[] = ['HelloWorld', 'Taskbar'];

const processDirectory: Processes = {
  HelloWorld: {
    // eslint-disable-next-line import/extensions
    Component: dynamic(() => import('./HelloWorld')),
    hasWindow: true
  },
  Taskbar: {
    Component: Taskbar
  }
};

const getStartupProcesses = (): Processes =>
  STARTUP_PROCESSES.reduce(
    (processes, processId) => ({
      ...processes,
      [processId]: processDirectory[processId]
    }),
    {}
  );

  const StyledDesktop = styled.main`
  background-color: #ac898992;
  bottom: 0;
  height: 100vh;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
`;

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState(getStartupProcesses());

  return { processes };
};

const ProcessProvider: React.FC = ({ children }) => (
  <Provider value={useProcessContextState()}>{children}</Provider>
);


const StyledWindow = styled.section`
  background-color: ${({ theme }) => theme.colors.window};
`;
const Window: FC = ({ children }) => <StyledWindow>{children}</StyledWindow>;
const ProcessConsumer = Consumer;

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
const Desktop: FC = ({ children }) => <StyledDesktop>{children}</StyledDesktop>;

export default function Home(): ReactElement {
  return (
    <Desktop>
      <ProcessProvider>
        <ProcessLoader />
      </ProcessProvider>
    </Desktop>
  );
}
