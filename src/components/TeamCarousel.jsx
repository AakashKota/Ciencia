import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CoordinatorCarousel = ({ coordinators }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (<>
    <div className='mt-[-30px] text-center text-6xl'>OUR TEAM</div>
    <div className='mt-12 mb-36'>
    <Slider {...settings}>
      {coordinators.map((coordinator, index) => (
        <div key={index}>
          <img src={coordinator.imgSrc} alt={coordinator.name} style={{ display: 'block', margin: '0 auto' , height:'400px'}} />
          <h3 className='pt-8'>{coordinator.name}</h3>
          <p>{coordinator.roles.join(', ')}</p>
        </div>
      ))}
    </Slider>
    </div>
    </>
  );
};

export default CoordinatorCarousel;