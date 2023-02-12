import dynamic from 'next/dynamic';
import type { ComponentType, FC, ReactElement } from 'react';
// eslint-disable-next-line import/no-duplicates
import { createContext } from 'react';
// eslint-disable-next-line import/no-duplicates
import styled from 'styled-components';

// eslint-disable-next-line import/extensions
import { useProcessContextState } from './contextFactory/process';
// eslint-disable-next-line import/extensions
import HelloWorld from './HelloWorld';
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

const processDirectory: Processes = {
  HelloWorld: {
    // eslint-disable-next-line import/extensions
    Component: dynamic(() => import('./HelloWorld')),
    hasWindow: true
  }
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

const ProcessProvider: React.FC = ({ children }) => (
  <Provider value={useProcessContextState()}>{children}</Provider>
);

const StyledWindow = styled.section`
  background-color: ${({ theme }) => theme.colors.window};
`;
const Window: FC = ({ children }) => <StyledWindow>{children}</StyledWindow>;
const ProcessConsumer = Consumer;

const withWindow = (Component: React.ComponentType) => (
  <Window>
    <Component />
  </Window>
);

const RenderProcess = ({ Component, hasWindow }: Process): JSX.Element =>
  hasWindow ? withWindow(Component) : <Component />;

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {
      ({ processes }) =>
        Object.entries(processes).map(([id, process]) => (
          <RenderProcess key={id} {...process} />
        ))
      // eslint-disable-next-line react/jsx-curly-newline
    }
  </ProcessConsumer>
);
const Desktop: FC = ({ children }) => <StyledDesktop>{children}</StyledDesktop>;

export default function Home(): ReactElement {
  return (
    <Desktop>
      <ProcessProvider>
        <Taskbar />
        <ProcessLoader />
      </ProcessProvider>
    </Desktop>
  );
}
