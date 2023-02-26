// eslint-disable-next-line import/extensions
import type { FileSystemConfiguration } from "browserfs";
import { BFSRequire, configure } from "browserfs";
import type { FSModule } from "browserfs/dist/node/core/FS";
import publicFileSystemIndex from "public.json";
import { useEffect, useState } from "react";

// eslint-disable-next-line import/extensions
import contextFactory from "./contextFactory/contextFactory";

export type FileSystemContextState = {
  fs: FSModule | null;
};

const initialFileSystemContextState: FileSystemContextState = {
  fs: null,
};

const FileSystemConfig: FileSystemConfiguration = {
  fs: "OverlayFS",
  options: {
    readable: {
      fs: "XmlHttpRequest",
      options: {
        index: publicFileSystemIndex,
      },
    },
    writable: {
      fs: "IndexedDB",
      options: {
        storeName: "browser-fs-cache",
      },
    },
  },
};

const useFileSystemContextState = (): FileSystemContextState => {
  const [fs, setFs] = useState<FSModule | null>(null);

  useEffect(() => {
    if (!fs) {
      configure(FileSystemConfig, () => setFs(BFSRequire("fs")));
    }
  }, [fs]);

  return { fs };
};

const { Consumer, Provider, useContext } =
  contextFactory<FileSystemContextState>(
    initialFileSystemContextState,
    useFileSystemContextState
  );

export {
  Consumer as FileSystemConsumer,
  Provider as FileSystemProvider,
  useContext as useFileSystem,
};
