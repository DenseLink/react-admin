import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

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
`;

const StyledStartButton = styled.button.attrs({
  type: 'button'
})`
  color: #fff;
  display: flex;
  font-size: 19px;
  height: 100%;
  left: 0;
  place-content: center;
  place-items: center;
  position: absolute;
  width: 36px;
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
    ${theme.sizes.taskbar.entry.borderSize} solid ${theme.colors.highlight}
  `};
  display: flex;
  height: 100%;
  max-width: 161px;
  figure {
    align-items: center;
    display: flex;
    figcaption {
      color: ${({ theme }) => theme.colors.opaqueWhite};
      font-size: ${({ theme }) => theme.sizes.taskbar.entry.fontSize};
    }
    img {
      height: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
      margin: ${({ theme }) => theme.sizes.taskbar.entry.icon.margin};
      width: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
    }
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

const StartButton: React.FC = () => (
  <StyledStartButton title="Start">
    <FontAwesomeIcon icon={faWindows} />
  </StyledStartButton>
);

const TaskbarEntries: React.FC = () => (
  <StyledTaskbarEntries>
    <TaskbarEntry icon="" title="" />
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
