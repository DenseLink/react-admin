import styled from 'styled-components';

const StyledTaskbarEntries = styled.div`
  background-color: purple;
  height: 100%;
  left: 30px;
  position: absolute;
  right: 90px;
  width: 100%;
  overflow: hidden;
  display: inline-block;
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
const StyledStartButton = styled.button`
  background-color: red;
  height: 100%;
  left: 0;
  position: absolute;
  width: 30px;
`;
const StyledTaskbarEntry = styled.div`
  background-color: pink;
  height: 100%;
  width: 80px;
  left: 30px;
  display: inline-block;
`;
const StyledClock = styled.time`
  background-color: green;
  height: 100%;
  position: absolute;
  right: 0;
  width: 90px;
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
