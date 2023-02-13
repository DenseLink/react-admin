// eslint-disable-next-line import/extensions
import type { FSModule } from 'browserfs/dist/node/core/FS';
import { useCallback, useState } from 'react';

// eslint-disable-next-line import/extensions
import contextFactory from '../contextFactory';
// eslint-disable-next-line import/extensions
import processDirectory from '../processDirectory';

export type FileSystemContextState = {
  fs: FSModule | null;
};

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
  close: (id: string) => void;
  open: (id: string) => void;
  processes: Processes;
};

export type SessionContextState = {
  themeName: string;
  setThemeName: React.Dispatch<React.SetStateAction<string>>;
};

export const initialFileSystemContextState: FileSystemContextState = {
  fs: null
};

export const initialProcessContextState: ProcessContextState = {
  close: () => undefined,
  open: () => undefined,
  processes: {}
};

export const initialSessionContextState: SessionContextState = {
  themeName: '',
  setThemeName: () => undefined
};

export const closeProcess = (processId: string) => ({
  [processId]: _closedProcess,
  ...remainingProcesses
}: Processes): Processes => remainingProcesses;

export const openProcess = (processId: string) => (
  currentProcesses: Processes
): Processes =>
  currentProcesses[processId] || !processDirectory[processId]
    ? currentProcesses
    : {
        ...currentProcesses,
        [processId]: processDirectory[processId]
      };

export const useProcessContextState = (): ProcessContextState => {
  const [processes, setProcesses] = useState<Processes>({});
  const close = useCallback((id: string) => setProcesses(closeProcess(id)), []);
  const open = useCallback((id: string) => setProcesses(openProcess(id)), []);

  return { close, open, processes };
};

const { Consumer, Provider } = contextFactory<ProcessContextState>(
  initialProcessContextState,
  useProcessContextState
);

export { Consumer as ProcessConsumer, Provider as ProcessProvider };
