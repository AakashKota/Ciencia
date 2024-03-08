
import React from 'react';
import Hero from './components/Hero';
// import Sponsor from './components/Sponsor';
// import Footer from './components/Footer';
import MarqueeComponent from './components/Carousel2';
import About from './components/About';
// import Events from './components/Events/Events';

import './App.css';
import Navbar from './components/Navbar';
import Counter from './Events/Countdown';
import Footer from './components/Footer';
import CoordinatorCarousel from './components/TeamCarousel';
import AnimatedImagesOnScroll from './components/Flashmob';






const App = () => {
  // // const [showLogoZoom, setShowLogoZoom] = useState(true);
  // const [showHero, setShowHero] = useState(false);

  // const handleLogoZoomEnd = () => {
  //   // setShowLogoZoom(false);
  //   setShowHero(true);
  // };
   const mainCoordinators = [
    {
      name: 'Daknya Bam',
      imgSrc: 'https://i.ibb.co/K0qDHqB/Whats-App-Image-2024-03-07-at-13-16-16-1.jpg',
      roles: ['Designer', 'UI/UX', 'Frontend', 'Coordinator']
    },
    {
      name: 'Pursottam Sah',
      imgSrc: 'https://i.ibb.co/j4T5FgW/Whats-App-Image-2024-03-07-at-13-16-16-2.jpg',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },
    {
      name: 'Pursottam Sah',
      imgSrc: 'https://i.ibb.co/0KnyTrp/Whats-App-Image-2024-03-07-at-13-16-16-3.jpg"',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },
    {
      name: 'Pursottam Sah',
      imgSrc: 'https://i.ibb.co/BKnWVkW/Whats-App-Image-2024-03-07-at-13-16-16.jpg',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },{
      name: 'Pursottam Sah',
      imgSrc: 'https://i.ibb.co/tsH0NZQ/Whats-App-Image-2024-03-07-at-13-16-17-1.jpg',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },
    {
      name: 'Pursottam Sah',
      imgSrc: '"https://i.ibb.co/88bqYYh/Whats-App-Image-2024-03-07-at-13-16-17-2.jpg',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },
    {
      name: 'Pursottam Sah',
      imgSrc: 'https://i.ibb.co/9Y2NmPn/Whats-App-Image-2024-03-07-at-13-16-17.jpg',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },
    {
      name: 'Pursottam Sah',
      imgSrc: 'https://i.ibb.co/88bqYYh/Whats-App-Image-2024-03-07-at-13-16-17-2.jpg',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },
    {
      name: 'Pursottam Sah',
      imgSrc: 'https://i.ibb.co/88bqYYh/Whats-App-Image-2024-03-07-at-13-16-17-2.jpg',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },
    {
      name: 'Pursottam Sah',
      imgSrc: 'https://i.ibb.co/88bqYYh/Whats-App-Image-2024-03-07-at-13-16-17-2.jpg',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },
    {
      name: 'Pursottam Sah',
      imgSrc: 'https://i.ibb.co/88bqYYh/Whats-App-Image-2024-03-07-at-13-16-17-2.jpg',
      roles: ['Developer', 'Event Coordinator', 'Backend']
    },
    // Add other coordinators here
  ];


  return (

   <>
   <Navbar/>
   <Hero/>
   <AnimatedImagesOnScroll/>
   <About/>
   <Counter/>
   <CoordinatorCarousel coordinators={mainCoordinators} /> 

   <MarqueeComponent></MarqueeComponent>
   <Footer/>
    
   </>

  );
};

export default App;
