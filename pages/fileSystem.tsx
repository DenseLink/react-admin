// eslint-disable-next-line import/extensions
import type { FileSystemConfiguration } from 'browserfs';
import { BFSRequire, configure } from 'browserfs';
import type { FSModule } from 'browserfs/dist/node/core/FS';
import { useEffect, useState } from 'react';

// eslint-disable-next-line import/extensions
import contextFactory from './contextFactory';

type FileSystemContextState = {
  fs: FSModule | null;
};

const initialFileSystemContextState: FileSystemContextState = {
  fs: null
};

const FileSystemConfig: FileSystemConfiguration = {
  fs: 'IndexedDb'
};

const useFileSystemContextState = (): FileSystemContextState => {
  const [fs, setFs] = useState<FSModule | null>(null);

  useEffect(() => {
    if (!fs) {
      configure(FileSystemConfig, () => setFs(BFSRequire('fs')));
    }
  }, [fs]);

  return { fs };
};

const { Consumer, Provider } = contextFactory<FileSystemContextState>(
  initialFileSystemContextState,
  useFileSystemContextState
);

export { Consumer as FileSystemConsumer, Provider as FileSystemProvider };
