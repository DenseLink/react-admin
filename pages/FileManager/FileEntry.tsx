import { useCallback } from 'react';

// eslint-disable-next-line import/extensions
import { useProcesses } from '../contextFactory/process';
// eslint-disable-next-line import/extensions
import useFileInfo from '../useFileInfo';
// eslint-disable-next-line import/extensions
import StyledFileEntry from './StyledFileEntry';

type FileEntryProps = {
  name: string;
  path: string;
};

const FileEntry = ({ name, path }: FileEntryProps): JSX.Element => {
  const { icon, pid } = useFileInfo(path);
  const { open } = useProcesses();
  const onActivate = useCallback(() => open(pid), [open, pid]);

  return (
    <StyledFileEntry>
      <button type="button" onClick={onActivate} onKeyDown={onActivate}>
        <figure>
          <img src={icon} alt={name} />
          <figcaption>{name}</figcaption>
        </figure>
      </button>
    </StyledFileEntry>
  );
};

export default FileEntry;
