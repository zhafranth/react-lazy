import styled from "styled-components/macro";

export const LoadingPage = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.h2`
  font-weight: 700;
  color: #101112;
`;

export const WrapperContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ImgWrapper = styled.div`
  width: 50%;
  height: auto;
  span {
    width: 100%;
    height: auto;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
`;
export const ImgCover = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: 24px;
`;
