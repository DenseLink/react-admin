import dynamic from 'next/dynamic';
import type { ComponentType, FC, ReactElement } from 'react';
// eslint-disable-next-line import/no-duplicates
import { createContext } from 'react';
// eslint-disable-next-line import/no-duplicates
import { useState } from 'react';
import styled from 'styled-components';

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

const HelloWorld: Process = {
  Component: dynamic(() => import('./HelloWorld')),
  hasWindow: true
};

const Taskbar: Process = {
  Component: dynamic(() => import('./Taskbar'))
};

const StyledDesktop = styled.main`
  background-color: #ac898992;
  bottom: 0;
  height: 100vh;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
`;

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState({ Taskbar, HelloWorld });

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

const renderProcesses = (processes: Processes) =>
  Object.entries(processes).map(([id, process]) => (
    <RenderProcess key={id} {...process} />
  ));

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ processes }) => renderProcesses(processes)}
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
