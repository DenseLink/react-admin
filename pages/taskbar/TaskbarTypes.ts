import styled from "styled-components";

export const StyledClock = styled.time`
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
export const Button = styled.button.attrs({
  type: "button",
})`
  background-color: transparent;
  font-family: inherit;
`;

export const StyledStartButton = styled(Button)`
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

export const StyledTaskbar = styled.nav`
  backdrop-filter: 5px;
  background-color: rgba(0, 0, 0, 60%);
  bottom: 0;
  height: 30px;
  left: 0;
  position: absolute;
  right: 0;
  width: 100vw;
`;

export const StyledTaskbarEntries = styled.ol`
  height: 100%;
  left: 30px;
  position: absolute;
  right: 90px;
`;

export const StyledTaskbarEntry = styled.li`
  border-bottom: ${({ theme }) => `
    ${"2px"} solid ${theme.colors.highlight}
  `};
  display: flex;
  height: 100%;
  max-width: 161px;
  figure {
    align-items: center;
    display: flex;
    figcaption {
      color: ${({ theme }) => theme.colors.opaqueWhite};
      font-size: ${"12px"};
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

export type TaskbarEntryProps = {
  icon: string;
  title: string;
};
