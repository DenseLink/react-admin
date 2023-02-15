import { useCallback } from 'react';
import styled from 'styled-components';

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

const Button = styled.button.attrs({
  type: 'button'
})`
  background-color: transparent;
  font-family: inherit;
`;

const FileEntry = ({ name, path }: FileEntryProps): JSX.Element => {
  const { icon, pid } = useFileInfo(path);
  const { open } = useProcesses();
  const onActivate = useCallback(() => open(pid), [open, pid]);

  return (
    <StyledFileEntry>
      <Button onClick={onActivate} onKeyDown={onActivate}>
        <figure>
          <img src={icon} alt={name} />
          <figcaption>{name}</figcaption>
        </figure>
      </Button>
    </StyledFileEntry>
  );
};

export default FileEntry;
