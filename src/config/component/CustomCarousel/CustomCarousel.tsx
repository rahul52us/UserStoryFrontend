import React, { useRef, useEffect } from 'react';
import Slider, { Settings } from 'react-slick';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';
import './CustomCarousel.css'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

interface CarouselProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
  settings?: {
    slidesToShow?: number;
    [key: string]: any;
  };
}

const Carousel = React.forwardRef<Slider, CarouselProps>(({ style, children, settings, ...rest }, ref) => {
  const customRef = useRef<Slider>(null);
  const slidesToShow = useBreakpointValue({ base: settings?.slidesToShow || 1, md: settings?.slidesToShow || 3 });

  var slickSettings: Settings = {
    infinite: true,
    slidesToShow: slidesToShow || 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    pauseOnHover: true,
    adaptiveHeight: true,
    arrows:false,
    ...rest,
  };

  // Handle keyboard arrow navigation when the slider is focused
  useEffect(() => {
    const sliderElement = customRef.current?.innerSlider?.list;
    if (sliderElement) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
          customRef.current?.slickPrev();
        } else if (event.key === 'ArrowRight') {
          customRef.current?.slickNext();
        }
      };

      sliderElement.addEventListener('keydown', handleKeyDown);

      return () => {
        sliderElement.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, []);


  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  return (
    <Box position={'relative'}>
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => customRef.current?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => customRef.current?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
    <Slider ref={ref || customRef} {...slickSettings} {...rest} className='slick-slider'>
      {children}
    </Slider>
    </Box>
  );
});

Carousel.displayName = 'Carousel';

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.any,
  settings: PropTypes.object,
};

export default Carousel;
