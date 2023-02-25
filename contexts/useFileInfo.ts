import type { FSModule } from 'browserfs/dist/node/core/FS';
// eslint-disable-next-line import/no-extraneous-dependencies
import ini from 'ini';
import { extname } from 'path';
import { useEffect, useState } from 'react';

// eslint-disable-next-line import/extensions
import { useFileSystem } from './fileSystem';

export type FileInfo = {
  icon: string;
  pid: string;
};

export const IMAGE_FILE_EXTENSIONS = [
  '.apng',
  '.avif',
  '.bmp',
  '.cur',
  '.gif',
  '.ico',
  '.jfif',
  '.jif',
  '.jpe',
  '.jpeg',
  '.jpg',
  '.pjp',
  '.pjpeg',
  '.png',
  '.svg',
  '.tif',
  '.tiff',
  '.webp',
  '.xbm'
];

type Shortcut = {
  URL: string;
  IconFile: string;
};

export const getShortcut = (path: string, fs: FSModule): Promise<Shortcut> =>
  new Promise((resolve) => {
    fs.readFile(path, (_error, contents = Buffer.from('')) => {
      const { InternetShortcut = { URL: '', IconFile: '' } } = ini.parse(
        contents.toString()
      );

      resolve(InternetShortcut as Shortcut);
    });
  });

export const getProcessByFileExtension = (_extension: string): string => '';

const useFileInfo = (path: string): FileInfo => {
  const [icon, setIcon] = useState('');
  const [pid, setPid] = useState('');
  const { fs } = useFileSystem();

  useEffect(() => {
    if (fs) {
      const extension = extname(path);

      if (extension === '.url') {
        getShortcut(path, fs).then(({ URL, IconFile }) => {
          setIcon(IconFile);
          setPid(URL);
        });
      } else if (IMAGE_FILE_EXTENSIONS.includes(extension)) {
        setIcon(path);
        setPid('ImageViewer');
      } else {
        setPid(getProcessByFileExtension(extension));
      }
    }
  }, [fs, path]);

  return { icon, pid };
};

export default useFileInfo;
