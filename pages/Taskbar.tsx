import styled from "styled-components";




const StyledClock = styled.time`
  background-color: green;
  height: 100%;
  position: absolute;
  right: 0;
  width: 90px;
`;

const StyledStartButton = styled.button`
  background-color: red;
  height: 100%;
  left: 0;
  position: absolute;
  width: 30px;
`;

const StyledTaskbar = styled.nav`
  background-color: orange;
  bottom: 0;
  height: 30px;
  left: 0;
  position: fixed;
  right: 0;
  width: 100vw;
`;

const StyledTaskbarEntries = styled.ol`
  background-color: purple;
  height: 100%;
  left: 30px;
  position: absolute;
  right: 90px;
`;

const StyledTaskbarEntry = styled.li`
  background-color: pink;
  height: 100%;
  width: 80px;
`;

const TaskbarEntry: React.FC = () => (
  <StyledTaskbarEntry>PROCESS</StyledTaskbarEntry>
);

const Clock: React.FC = () => <StyledClock>11:17:22 PM</StyledClock>;

const StartButton: React.FC = () => <StyledStartButton>X</StyledStartButton>;

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
