// eslint-disable-next-line import/extensions
import type { FSModule } from 'browserfs/dist/node/core/FS';
import { useState } from 'react';

// eslint-disable-next-line import/extensions
import contextFactory from '../contextFactory';

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
  processes: {}
};

export const initialSessionContextState: SessionContextState = {
  themeName: '',
  setThemeName: () => undefined
};

export const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState<Processes>({});

  return { processes };
};

const { Consumer, Provider } = contextFactory<ProcessContextState>(
  initialProcessContextState,
  useProcessContextState
);

export { Consumer as ProcessConsumer, Provider as ProcessProvider };
