import styled from 'styled-components';

const StyledTaskbar = styled.nav`
  background-color: orange;
  bottom: 0;
  height: 30px;
  left: 0;
  position: fixed;
  right: 0;
  width: 100vw;
`;
const StyledStartButton = styled.button`
  background-color: red;
  height: 100%;
  left: 0;
  position: absolute;
  width: 30px;
`;
const StyledTaskbarEntry = styled.li`
  background-color: pink;
  height: 100%;
  width: 80px;
`;
const StyledClock = styled.time`
  background-color: green;
  height: 100%;
  position: absolute;
  right: 0;
  width: 90px;
`;
const StyledTaskbarEntries = styled.ol`
  background-color: purple;
  height: 100%;
  left: 50px;
  position: absolute;
  right: 90px;
  width: 100%;
`;
const Taskbar = () => (
    <StyledTaskbar>
        <StyledStartButton type = 'button'>
        HELLO
        </StyledStartButton>
        <StyledTaskbarEntries>
            <StyledTaskbarEntry />
        </StyledTaskbarEntries>
        <StyledClock>
           11:17:22 PM
        </StyledClock>
    </StyledTaskbar>
)
export default Taskbar;
