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

const ProcessContext = createContext<ProcessContextState>({ processes: {} });

const processDirectory: Processes = {
  HelloWorld: {
    // eslint-disable-next-line import/extensions
    Component: dynamic(() => import('./HelloWorld')),
    hasWindow: true
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


const StyledWindow = styled.section`
  background-color: ${({ theme }) => theme.colors.window};
`;
const Window: FC = ({ children }) => <StyledWindow>{children}</StyledWindow>;
const ProcessConsumer = ProcessContext.Consumer;

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ processes }) =>
       Object.entries(processes).map(([id, { Component, hasWindow }]) =>
        hasWindow ? (
          <Window key={id}>
            <Component />
          </Window>
        ) : (
         <Component key={id} />
        )
      )
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
