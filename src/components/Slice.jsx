import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import { Audio } from './Audio';

const Slice = ({ nextPage }) => {
  const [index, setIndex] = useState(0);

  const images = [
    {
      src: 'https://i.postimg.cc/vm0dMJrt/imagenuno.jpg',
      alt: 'Imagen 1',
      caption: 'Imagen 1',
      description: 'Por mas momentos a tu lado',
    },
    {
      src: 'https://i.postimg.cc/Hxj1L63D/image2.jpg',
      alt: 'Imagen 2',
      caption: 'Imagen 2',
      description: 'Te mereces los mejor de este mundo mi amor',
    },
    {
      src: 'https://i.postimg.cc/63SJ4C17/image3.jpg',
      alt: 'Imagen 3',
      caption: 'Imagen 3',
      description: 'Por ultimo, te casas conmigo?',
    },
  ];

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="sliderContent">
      <Carousel activeIndex={index} onSelect={handleSelect} className="slider">
        {images.map((image, i) => (
          <Carousel.Item key={i}>
            <img className="d-block w-100" src={image.src} alt={image.alt} />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
              <p>{image.description}</p>
              <button className="btn btn-light" onClick={() => nextPage(1)}>
                Volver
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="audio">
        {/* <Audio /> */}
        <iframe
          className="video"
          width="320"
          height="260"
          src="https://www.youtube.com/embed/yWkQbrfSvfs?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Slice;
