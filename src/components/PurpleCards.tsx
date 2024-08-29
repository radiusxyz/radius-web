import { useEffect, useState } from "react";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: grid;
  gap: 30px;
  align-items: start;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  @media (max-width: 950px) {
    flex-wrap: wrap;
    gap: 14px;
  }
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 597px;
  padding: 88px 44px 44px 44px;
  border-radius: 8px;
  min-height: 589px;
  border: 1px solid #624784;
  background: #381b5b;
  height: 100%;
  @media (max-width: 750px) {
    padding: 34px 22px;
    width: 100%;
    height: auto;
    min-height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const TextWrapper = styled.div`
  dislay: flex;
  flex-direction: column;
`;

const Title = styled.p`
  color: #fff;
  font-family: Atyp Display;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 41.6px */
  margin-bottom: 13px;
  margin-top: 70px;
  @media (max-width: 750px) {
    font-size: 24px;
    margin: 34px 0 10px;
  }
`;

const Details = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-family: Gilroy-Light;
  font-size: 24px;
  font-style: normal;
  font-weight: 200;
  line-height: 136%; /* 32.64px */
  @media (max-width: 750px) {
    font-size: 18px;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

type Props = {
  title: string;
  details: string;
  imgUrl: string;
};

const PurpleCards = ({ cards }: { cards: Props[] }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width to state
      setWindowWidth(window.innerWidth);
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowWidth > 750 ? (
    <CardsContainer>
      <Container key={cards[0].title}>
        <ImgContainer>
          <img loading="lazy" src={cards[0].imgUrl} alt={cards[0].imgUrl} />
        </ImgContainer>
        <Title>{cards[0].title}</Title>
        <Details>{cards[0].details}</Details>
      </Container>
      <Container key={cards[3].title}>
        <ImgContainer>
          <img loading="lazy" src={cards[3].imgUrl} alt={cards[3].imgUrl} />
        </ImgContainer>
        <Title>{cards[3].title}</Title>
        <Details>{cards[3].details}</Details>
      </Container>
      <Container key={cards[1].title}>
        <ImgContainer>
          <img loading="lazy" src={cards[1].imgUrl} alt={cards[1].imgUrl} />
        </ImgContainer>
        <Title>{cards[1].title}</Title>
        <Details>{cards[1].details}</Details>
      </Container>
      <Container key={cards[2].title}>
        <ImgContainer>
          <img loading="lazy" src={cards[2].imgUrl} alt={cards[2].imgUrl} />
        </ImgContainer>
        <Title>{cards[2].title}</Title>
        <Details>{cards[2].details}</Details>
      </Container>
    </CardsContainer>
  ) : (
    <CardsContainer>
      <Container key={cards[0].title}>
        <ImgContainer>
          <img
            loading="lazy"
            src={cards[0].imgUrl}
            width="100px"
            alt={cards[0].imgUrl}
          />
        </ImgContainer>
        <TextWrapper>
          <Title>{cards[0].title}</Title>
          <Details>{cards[0].details}</Details>
        </TextWrapper>
      </Container>
      <Container key={cards[3].title}>
        <ImgContainer>
          <img
            loading="lazy"
            src={cards[3].imgUrl}
            width="100px"
            alt={cards[3].imgUrl}
          />
        </ImgContainer>
        <TextWrapper>
          <Title>{cards[3].title}</Title>
          <Details>{cards[3].details}</Details>
        </TextWrapper>
      </Container>
      <Container key={cards[1].title}>
        <ImgContainer>
          <img
            loading="lazy"
            src={cards[1].imgUrl}
            width="100px"
            alt={cards[1].imgUrl}
          />
        </ImgContainer>
        <TextWrapper>
          <Title>{cards[1].title}</Title>
          <Details>{cards[1].details}</Details>
        </TextWrapper>
      </Container>
      <Container key={cards[2].title}>
        <ImgContainer>
          <img
            loading="lazy"
            src={cards[2].imgUrl}
            width="100px"
            alt={cards[2].imgUrl}
          />
        </ImgContainer>
        <TextWrapper>
          <Title>{cards[2].title}</Title>
          <Details>{cards[2].details}</Details>
        </TextWrapper>
      </Container>
    </CardsContainer>
  );
};

export default PurpleCards;
