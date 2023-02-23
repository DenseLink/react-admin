// eslint-disable-next-line import/extensions
import { ProcessConsumer } from "../contextFactory/process";
import type { TaskbarEntryProps } from "./TaskbarTypes";
import {
  StyledClock,
  StyledStartButton,
  StyledTaskbar,
  StyledTaskbarEntries,
  StyledTaskbarEntry,
} from "./TaskbarTypes";

const TaskbarEntry = ({ icon, title }: TaskbarEntryProps): JSX.Element => (
  <StyledTaskbarEntry>
    <figure>
      <img alt={title} src={icon} />
      <figcaption>{title}</figcaption>
    </figure>
  </StyledTaskbarEntry>
);

const Clock: React.FC = () => (
  <StyledClock dateTime="23:17:22">11:17:22 PM</StyledClock>
);

export const WindowsIcon = (): JSX.Element => (
  <svg viewBox="0 0 448 512">
    <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
  </svg>
);

const StartButton: React.FC = () => (
  <StyledStartButton title="Start">
    <WindowsIcon />
  </StyledStartButton>
);

const TaskbarEntries = (): JSX.Element => (
  <StyledTaskbarEntries>
    <ProcessConsumer>
      {
        ({ mapProcesses }) =>
          mapProcesses(([id, { icon, title }]) => (
            <TaskbarEntry key={id} icon={icon} title={title} />
          ))
        // eslint-disable-next-line react/jsx-curly-newline
      }
    </ProcessConsumer>
  </StyledTaskbarEntries>
);

const Taskbar: React.FC = () => (
  <StyledTaskbar>
    <StartButton />
    <TaskbarEntries />
    <Clock />
  </StyledTaskbar>
);

export default Taskbar;
