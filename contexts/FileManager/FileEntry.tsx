// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/extensions
import { useProcesses } from "contexts/contextFactory/process";
import useFileInfo from "contexts/useFileInfo";
import { useCallback, useRef } from "react";
import styled from "styled-components";

// eslint-disable-next-line import/extensions
import StyledFileEntry from "./StyledFileEntry";

type FileEntryProps = {
  name: string;
  path: string;
};

const Button = styled.button.attrs({
  type: "button",
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
  return useCallback<React.MouseEventHandler>(
    (event) => {
      if (timer.current) {
        clearTimeout(timer.current);
        handler(event);
        timer.current = null;
      } else {
        timer.current = setTimeout(() => {
          timer.current = null;
        }, timeout);
      }
    },
    [handler, timeout]
  );
};

const FileEntry = ({ name, path }: FileEntryProps): JSX.Element => {
  const { icon, pid } = useFileInfo(path);
  const { open } = useProcesses();
  const onClick = useCallback(() => open(pid), [open, pid]);

  return (
    <StyledFileEntry>
      <Button onClick={useDoubleClick(onClick)}>
        <figure>
          <img alt={name} src={icon} />
          <figcaption>{name}</figcaption>
        </figure>
      </Button>
    </StyledFileEntry>
  );
};

export default FileEntry;
