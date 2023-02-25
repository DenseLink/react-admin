import { basename, extname, resolve } from 'path';

// eslint-disable-next-line import/extensions
import FileEntry from './FileEntry';
// eslint-disable-next-line import/extensions
import StyledFileManager from './StyledFileManager';
// eslint-disable-next-line import/extensions
import useFiles from './useFiles';

type FileManagerProps = {
  directory: string;
};

const FileManager = ({ directory }: FileManagerProps): JSX.Element => (
  <StyledFileManager>
    {useFiles(directory, (file) => (
      <FileEntry
        key={file}
        name={basename(file, extname(file))}
        path={resolve(directory, file)}
      />
    ))}
  </StyledFileManager>
);

export default FileManager;
