import styled from 'styled-components';

const CardsContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: start;
  @media (max-width: 750px) {
    flex-direction: column;
    gap: 14px;
  }
`;

const Half = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Container = styled.div<{ toppadding: string }>`
  width: 597px;
  padding: ${(props) => props.toppadding} 44px 44px 44px;
  border-radius: 8px;
  border: 1px solid #624784;
  background: #381b5b;
  @media (max-width: 750px) {
    padding: 22px 18px;
    width: 100%;
    height: 246px;
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
  @media (max-width: 750px) {
    font-size: 16px;
    margin-top: auto;
    margin-bottom: 8px;
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
    font-size: 12px;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

type Props = {
  toppadding: string;
  title: string;
  details: string;
  imgUrl: string;
};

const PurpleCards = ({ cards }: { cards: Props[] }) => {
  return window.innerWidth > 750 ? (
    <CardsContainer>
      <Half>
        <Container key={cards[0].title} toppadding={cards[0].toppadding}>
          <ImgContainer>
            <img src={cards[0].imgUrl} alt={cards[0].imgUrl} />
          </ImgContainer>
          <Title>{cards[0].title}</Title>
          <Details>{cards[0].details}</Details>
        </Container>
        <Container key={cards[3].title} toppadding={cards[3].toppadding}>
          <ImgContainer>
            <img src={cards[3].imgUrl} alt={cards[3].imgUrl} />
          </ImgContainer>
          <Title>{cards[3].title}</Title>
          <Details>{cards[3].details}</Details>
        </Container>
      </Half>
      <Half>
        <Container key={cards[1].title} toppadding={cards[1].toppadding}>
          <ImgContainer>
            <img src={cards[1].imgUrl} alt={cards[1].imgUrl} />
          </ImgContainer>
          <Title>{cards[1].title}</Title>
          <Details>{cards[1].details}</Details>
        </Container>
        <Container key={cards[2].title} toppadding={cards[2].toppadding}>
          <ImgContainer>
            <img src={cards[2].imgUrl} alt={cards[2].imgUrl} />
          </ImgContainer>
          <Title>{cards[2].title}</Title>
          <Details>{cards[2].details}</Details>
        </Container>
      </Half>
    </CardsContainer>
  ) : (
    <CardsContainer>
      <Container key={cards[0].title} toppadding={cards[0].toppadding}>
        <ImgContainer>
          <img src={cards[0].imgUrl} width='103px' alt={cards[0].imgUrl} />
        </ImgContainer>
        <TextWrapper>
          <Title>{cards[0].title}</Title>
          <Details>{cards[0].details}</Details>
        </TextWrapper>
      </Container>
      <Container key={cards[3].title} toppadding={cards[3].toppadding}>
        <ImgContainer>
          <img src={cards[3].imgUrl} width='103px' alt={cards[3].imgUrl} />
        </ImgContainer>
        <TextWrapper>
          <Title>{cards[3].title}</Title>
          <Details>{cards[3].details}</Details>
        </TextWrapper>
      </Container>
      <Container key={cards[1].title} toppadding={cards[1].toppadding}>
        <ImgContainer>
          <img src={cards[1].imgUrl} width='103px' alt={cards[1].imgUrl} />
        </ImgContainer>
        <TextWrapper>
          <Title>{cards[1].title}</Title>
          <Details>{cards[1].details}</Details>
        </TextWrapper>
      </Container>
      <Container key={cards[2].title} toppadding={cards[2].toppadding}>
        <ImgContainer>
          <img src={cards[2].imgUrl} width='103px' alt={cards[2].imgUrl} />
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
