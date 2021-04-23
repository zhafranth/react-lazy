import styled from "styled-components/macro";

export const MainCard = styled.div`
  position: relative;
  overflow: hidden;
  width: 240px;
  height: 350px;

  span {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    transform: scale(1.1);
    transition: transform ease-in-out 0.4s;
  }
  &::after {
    content: "";
    position: absolute;
    top: -100%;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #d3b85698;
    transition: all ease-in 0.2s;
  }
  &:hover {
    cursor: pointer;
    &::after {
      top: 0;
      transition: all ease-in 0.2s;
    }
    span {
      transform: scale(1);
      transition: transform ease-in-out 0.4s;
    }
  }
`;
