import styled from 'styled-components';

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 30px;
  align-items: start;
  grid-auto-rows: min-content;
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
      {cards.map((card: Props) => (
        <Container key={card.title} pddn={card.pddn}>
          <ImgContainer>
            <img src={card.imgUrl} alt={card.imgUrl} />
          </ImgContainer>
          <Title>{card.title}</Title>
          <Details>{card.details}</Details>
        </Container>
      ))}
    </CardsContainer>
  );
};

export default PurpleCards;
