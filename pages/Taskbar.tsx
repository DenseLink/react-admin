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
  display: flex;
  height: 100%;
  place-content: center;
  place-items: center;
  max-width: 161px;
`;

const TaskbarEntry: React.FC = () => (
  <StyledTaskbarEntry>PROCESS</StyledTaskbarEntry>
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
    <TaskbarEntry />
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
