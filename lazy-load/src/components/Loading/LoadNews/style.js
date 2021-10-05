import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0%{transform:translateX(-150%)}
  100%{transform:translateX(150%)}
`;

export const MainCard = styled.div`
  width: 360px;
  border-radius: 10px;
  background-color: #ededed;
  box-sizing: border-box;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 360px;
    background-color: rgba(255, 255, 255, 0.1);
    transform: skewX(-20deg);
    animation: 0.84s ${loading} infinite;
  }
`;
export const Img = styled.div`
  width: 100%;
  height: 182px;
  background-color: #d6d6d6;
  border-radius: 10px;
`;
export const Desc = styled.div`
  width: ${(props) => props.width || "100%"};
  height: 20px;
  background-color: #d6d6d6;
  border-radius: 10px;
`;
