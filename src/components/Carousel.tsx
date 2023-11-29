import { useState, useEffect } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 500px;
  display: flex;
  width: 100%;
  background: blue;
`;

const CarouselItem = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  background: red;
  transition: opacity 1s ease-in-out;
  opacity: 0;

  &.active {
    opacity: 1;
  }
`;

const Carousel = ({
  items,
  interval = 3000,
}: {
  items: any;
  interval: any;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const tick = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(tick);
  }, [items.length, interval]);

  return (
    <CarouselContainer>
      {items.map((item: any, index: any) => (
        <CarouselItem
          key={index}
          className={index === currentIndex ? 'active' : ''}
        >
          {item}
        </CarouselItem>
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
