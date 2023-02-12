// eslint-disable-next-line import/extensions
import * as BrowserFS from 'browserfs';
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

const useFileSystemContextState = (): FileSystemContextState => {
  const [fs, setFs] = useState<FSModule | null>(null);

  useEffect(() => {
    BrowserFS.install(window);

    BrowserFS.configure(
      {
        fs: 'IndexedDb'
      },
      () => {
        setFs(BrowserFS.BFSRequire('fs'));
      }
    );
  }, []);

  return { fs };
};

const { Consumer, Provider } = contextFactory<FileSystemContextState>(
  initialFileSystemContextState,
  useFileSystemContextState
);

export { Consumer as FileSystemConsumer, Provider as FileSystemProvider };