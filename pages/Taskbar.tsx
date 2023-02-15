import styled from 'styled-components';

// eslint-disable-next-line import/extensions
import { ProcessConsumer } from './contextFactory/process';

const StyledClock = styled.time`
  color: rgba(255, 255, 255, 80%);
  display: flex;
  font-size: 12px;
  height: 100%;
  place-content: center;
  place-items: center;
  position: absolute;
  right: 0;
  width: 76px;

  &:hover {
    background-color: hsla(0, 0%, 25%, 70%);
  }
`;
const Button = styled.button.attrs({
  type: 'button'
})`
  background-color: transparent;
  font-family: inherit;
`;

const StyledStartButton = styled(Button)`
  fill: #fff;
  display: flex;
  height: 100%;
  left: 0;
  place-content: center;
  place-items: center;
  position: absolute;
  width: 36px;
  svg {
    height: 19px;
  }
  &:hover {
    background-color: hsla(0, 0%, 25%, 70%);
    svg {
      fill: hsla(0, 0%, 25%, 70%);
    }
  }
`;

const StyledTaskbar = styled.nav`
  backdrop-filter: 5px;
  background-color: rgba(0, 0, 0, 60%);
  bottom: 0;
  height: 30px;
  left: 0;
  position: absolute;
  right: 0;
  width: 100vw;
`;

const StyledTaskbarEntries = styled.ol`
  height: 100%;
  left: 30px;
  position: absolute;
  right: 90px;
`;

const StyledTaskbarEntry = styled.li`
  border-bottom: ${({ theme }) => `
    ${'2px'} solid ${theme.colors.highlight}
  `};
  display: flex;
  height: 100%;
  max-width: 161px;
  figure {
    align-items: center;
    display: flex;
    figcaption {
      color: ${({ theme }) => theme.colors.opaqueWhite};
      font-size: ${'12px'};
    }
    img {
      height: 12px;
      margin: 12px;
      width: 12px;
    }
  }
  &:hover {
    background-color: hsla(0, 0%, 25%, 70%);
  }
`;

type TaskbarEntryProps = {
  icon: string;
  title: string;
};

const TaskbarEntry = ({ icon, title }: TaskbarEntryProps): JSX.Element => (
  <StyledTaskbarEntry>
    <figure>
      <img src={icon} alt={title} />
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
