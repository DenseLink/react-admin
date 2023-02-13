import type { FC, ReactElement } from 'react';
// eslint-disable-next-line import/no-duplicates
import { createContext } from 'react';
// eslint-disable-next-line import/no-duplicates
import styled from 'styled-components';

import type { Process } from './contextFactory/process';
// eslint-disable-next-line import/extensions
import { useProcessContextState } from './contextFactory/process';
// eslint-disable-next-line import/extensions
import Taskbar from './Taskbar';

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
