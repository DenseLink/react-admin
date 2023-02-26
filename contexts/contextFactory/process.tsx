// eslint-disable-next-line import/extensions
import type { FSModule } from "browserfs/dist/node/core/FS";
import { useCallback, useState } from "react";

// eslint-disable-next-line import/extensions
import processDirectory from "../processDirectory";
// eslint-disable-next-line import/extensions
import contextFactory from "./contextFactory";

export type FileSystemContextState = {
  fs: FSModule | null;
};

export type Process = {
  Component: React.ComponentType;
  hasWindow?: boolean;
  icon: string;
  maximize?: boolean;
  minimize?: boolean;
  title: string;
};

export type ProcessesMap = (
  callback: ([id, process]: [string, Process]) => JSX.Element
) => JSX.Element[];

export type Processes = Record<string, Process>;

export type ProcessContextState = {
  close: (id: string) => void;
  mapProcesses: ProcessesMap;
  maximize: (id: string) => void;
  minimize: (id: string) => void;
  open: (id: string) => void;
};

export type SessionContextState = {
  setThemeName: React.Dispatch<React.SetStateAction<string>>;
  themeName: string;
};

export const initialFileSystemContextState: FileSystemContextState = {
  fs: null,
};

export const initialProcessContextState: ProcessContextState = {
  close: () => {},
  mapProcesses: () => [],
  maximize: () => {},
  minimize: () => {},
  open: () => {},
};

export const initialSessionContextState: SessionContextState = {
  setThemeName: () => {},
  themeName: "",
};

export const closeProcess =
  (processId: string) =>
  ({
    [processId]: _closedProcess,
    ...remainingProcesses
  }: Processes): Processes =>
    remainingProcesses;

export const openProcess =
  (processId: string) =>
  (currentProcesses: Processes): Processes =>
    currentProcesses[processId] || !processDirectory[processId]
      ? currentProcesses
      : {
          ...currentProcesses,
          [processId]: processDirectory[processId],
        };

export const toggleProcessSetting =
  (processId: string, setting: "maximize" | "minimize") =>
  ({ [processId]: process, ...otherProcesses }: Processes): Processes =>
    process
      ? {
          [processId]: {
            ...process,
            [setting]: !process[setting],
          },
          ...otherProcesses,
        }
      : otherProcesses;

export const maximizeProcess =
  (processId: string) =>
  (processes: Processes): Processes =>
    toggleProcessSetting(processId, "maximize")(processes);

export const minimizeProcess =
  (processId: string) =>
  (processes: Processes): Processes =>
    toggleProcessSetting(processId, "minimize")(processes);

export const useProcessContextState = (): ProcessContextState => {
  const [processes, setProcesses] = useState<Processes>({});
  const mapProcesses = useCallback<ProcessesMap>(
    (callback) => Object.entries(processes).map(callback),
    [processes]
  );
  const close = useCallback((id: string) => setProcesses(closeProcess(id)), []);
  const maximize = useCallback(
    (id: string) => setProcesses(maximizeProcess(id)),
    []
  );
  const minimize = useCallback(
    (id: string) => setProcesses(minimizeProcess(id)),
    []
  );
  const open = useCallback((id: string) => setProcesses(openProcess(id)), []);

  return { close, mapProcesses, maximize, minimize, open };
};

const { Consumer, Provider, useContext } = contextFactory<ProcessContextState>(
  initialProcessContextState,
  useProcessContextState
);

export {
  Consumer as ProcessConsumer,
  Provider as ProcessProvider,
  useContext as useProcesses,
};
