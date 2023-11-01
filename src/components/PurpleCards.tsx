import styled from 'styled-components';

const CardsContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: start;
`;

const Half = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Container = styled.div<{ pddn: string }>`
  width: 597px;
  padding: ${(props) => props.pddn};
  border-radius: 8px;
  border: 1px solid #624784;
  background: #381b5b;
`;

const Title = styled.p`
  color: #fff;
  font-family: Atyp Display;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 41.6px */
  margin-bottom: 13px;
`;

const Details = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-family: Gilroy-Regular;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 136%; /* 32.64px */
`;

const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

type Props = {
  pddn: string;
  title: string;
  details: string;
  imgUrl: string;
};

const PurpleCards = ({ cards }: { cards: Props[] }) => {
  return (
    <CardsContainer>
      <Half>
        <Container key={cards[0].title} pddn={cards[0].pddn}>
          <ImgContainer>
            <img src={cards[0].imgUrl} alt={cards[0].imgUrl} />
          </ImgContainer>
          <Title>{cards[0].title}</Title>
          <Details>{cards[0].details}</Details>
        </Container>
        <Container key={cards[3].title} pddn={cards[3].pddn}>
          <ImgContainer>
            <img src={cards[3].imgUrl} alt={cards[3].imgUrl} />
          </ImgContainer>
          <Title>{cards[3].title}</Title>
          <Details>{cards[3].details}</Details>
        </Container>
      </Half>
      <Half>
        <Container key={cards[1].title} pddn={cards[1].pddn}>
          <ImgContainer>
            <img src={cards[1].imgUrl} alt={cards[1].imgUrl} />
          </ImgContainer>
          <Title>{cards[1].title}</Title>
          <Details>{cards[1].details}</Details>
        </Container>
        <Container key={cards[2].title} pddn={cards[2].pddn}>
          <ImgContainer>
            <img src={cards[2].imgUrl} alt={cards[2].imgUrl} />
          </ImgContainer>
          <Title>{cards[2].title}</Title>
          <Details>{cards[2].details}</Details>
        </Container>
      </Half>
    </CardsContainer>
  );
};

export default PurpleCards;
