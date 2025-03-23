import { useState } from "react";
import styled from "styled-components";
import { pxToRem } from "../utils";

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: ${({ isDark }) => (isDark ? "flex-start" : "flex-end")};
  gap: ${pxToRem(10)};
  width: ${pxToRem(70)};
  height: ${pxToRem(20)};
  background: ${({ isDark }) => (isDark ? "#101010" : "#ffffff")};
  color: ${({ isDark }) => (isDark ? "white" : "black")};
  font-size: ${pxToRem(9)};
  padding: ${pxToRem(12)} ${pxToRem(15)};
  border: ${pxToRem(1)} solid #ffffff;
  border-radius: ${pxToRem(50)};
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
  box-shadow: 0 0 ${pxToRem(10)}
    ${({ isDark }) =>
      isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.3)"};

  &:hover {
    box-shadow: 0 0 ${pxToRem(20)}
      ${({ isDark }) =>
        isDark ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.5)"};
  }
`;

function ThemeToggleButton() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ToggleButton isDark={isDark} onClick={() => setIsDark(!isDark)}>
      {isDark ? "🌙" : "☀️"}
    </ToggleButton>
  );
}

export default ThemeToggleButton;
