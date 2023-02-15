import { useCallback, useRef } from 'react';
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

type DoubleClick = (
  handler: React.MouseEventHandler,
  timeout?: number
) => React.MouseEventHandler;

const useDoubleClick: DoubleClick = (handler, timeout = 500) => {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const onClick = useCallback<React.MouseEventHandler>(
    (event) => {
      if (!timer.current) {
        timer.current = setTimeout(() => {
          timer.current = null;
        }, timeout);
      } else {
        clearTimeout(timer.current);
        handler(event);
        timer.current = null;
      }
    },
    [handler, timeout]
  );

  return onClick;
};

const FileEntry = ({ name, path }: FileEntryProps): JSX.Element => {
  const { icon, pid } = useFileInfo(path);
  const { open } = useProcesses();
  const onClick = useCallback(() => open(pid), [open, pid]);

  return (
    <StyledFileEntry>
      <Button onClick={useDoubleClick(onClick)}>
        <figure>
          <img src={icon} alt={name} />
          <figcaption>{name}</figcaption>
        </figure>
      </Button>
    </StyledFileEntry>
  );
};

export default FileEntry;
