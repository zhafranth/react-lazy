import styled, { keyframes } from "styled-components/macro";

const loading = keyframes`
  0%{transform:translateX(-150%)}
  100%{transform:translateX(150%)}
`;

export const MainCard = styled.div`
  width: 240px;
  height: 350px;
  border-radius: 5px;
  background-color: #ededed;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 240px;
    height: 350px;
    background-color: rgba(255, 255, 255, 0.2);
    transform: skewX(-20deg);
    animation: 0.84s ${loading} infinite;
  }
`;
