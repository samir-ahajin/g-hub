import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const delay = 2500;
const Carousel = (carouselData) => {
  const data = carouselData["carouselData"]["results"];

  const timeoutRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      const isLastSlide = currentIndex === data.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, delay);

    return () => {
      resetTimeout();
    };
  });

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <>
      <SlideShow>
        <div>
          <LeftArrowStyles onClick={goToPrevious}>❰</LeftArrowStyles>
          <RightArrowStyles onClick={goToNext}>❱</RightArrowStyles>
        </div>

        <SlidesShowSlider
          style={{
            transform: `translate3d(${-currentIndex * 100}%, 0, 0)`,
          }}
        >
          {data.map((carousel) => {
            return (
              <>
                <ImageCon key={carousel.id}>
                  <SliderImage src={carousel.background_image}></SliderImage>
                </ImageCon>
              </>
            );
          })}
        </SlidesShowSlider>

        <SliderDots>
          {data.map((carousel, index) => {
            return (
              <DotStyle
                key={carousel.id + index}
                onClick={() => {
                  setCurrentIndex(index);
                }}
              ></DotStyle>
            );
          })}
        </SliderDots>
      </SlideShow>
    </>
  );
};

const SlideShow = styled.div`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  max-width: 900px;
`;

const SlidesShowSlider = styled.ul`
  white-space: nowrap;
  transition: ease 1000ms;
`;

const ImageCon = styled.li`
  display: inline-block;
`;
const SliderImage = styled.img`
  width: 100%;
  height: auto;
`;

const SliderDots = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
`;
const DotStyle = styled.div`
  display: inline-block;
  height: 10px;
  width: 10px;
  position: absolute;
  border-radius: 50%;
  left: 50%;
  background-color: #c4c4c4;
`;

const RightArrowStyles = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 1rem;
  font-size: 45px;
  color: #fff;
  z-index: 1;
  cursor: pointer;
`;

const LeftArrowStyles = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 1rem;
  font-size: 45px;
  color: #fff;
  z-index: 1;
  cursor: pointer;
`;

export default Carousel;
