import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import SlideItem from './SlideItem/SlideItem';
import { slideItems } from '@flatize/utils';
const Slide: React.FC = () => {
  return (
    <div>
      <Carousel
        NextIcon={<FontAwesomeIcon icon={faChevronRight} />}
        PrevIcon={<FontAwesomeIcon icon={faChevronLeft} />}
        indicators={false}
        navButtonsProps={{
          style: {
            borderRadius: 0,
            background: '#333',
            color: 'white',
            fontSize: '1.8rem',
            lineHeight: '5rem',
            width: '5rem',
            height: '5rem',
            padding: 0,
          },
        }}
      >
        {slideItems.map((item, index) => (
          <SlideItem key={index} {...item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Slide;
