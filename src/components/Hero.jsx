import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import './fonts.css';


const HeroContainer = styled.div`
  position: relative;
  width: 100%; /* Ensure full width across viewports */
  height: 100vh;
  overflow: hidden;

  /* Responsive layout */   
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    /* Adjust text sizes for smaller screens */
    font-size: 16px;
  }
`;
const CustomFont = styled.div`
  font-family: 'Neoterique';
  font-size: 4rem; /* Adjusted for smaller screens */
`;

const CustomFont2 = styled.div`
  font-family: 'Neoterique';
  font-size: 1.5rem; /* Adjusted for smaller screens */
  color: #48D1CC;
  text-align: center;
`;

const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  justify-content:center;
  align-items:center ; 
`;

const Video = styled(ReactPlayer)`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
  pointer-events: none;
  z-index: -1;

  /* Media query for phone screens (adjust breakpoint as needed) */
  @media (max-width: 768px) {
    width: auto;
    height: 100%;
  }
`;

const LogoImage = styled.img`
  width: 60%; /* Adjusted for responsive logo */
  max-width: 300px; /* Added a max-width for larger screens */
  margin-bottom: 20px;
`;

const SciFiButton = styled.button`
  background: transparent;
  border: 2px solid #48D1CC;
  border-radius: 5px;
  padding: 10px 20px;
  font-family: 'Ethnocentric';
  font-size: 1.2rem; /* Adjusted for smaller screens */
  color: #48D1CC;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;

  /* Hover animation */
  &:hover {
    transition: all 0.4s ease-in-out 0.04s;
    background: #48D1CC;
    color: #f26922;
    border-color: transparent;
    box-shadow: 0 0 45px #f26922; /* Add a glow effect */
    transform: translateY(-4px); /* Add a subtle lift */
  }
`;

const Hero = () => {

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);   

  return (
    <HeroContainer id='hero-section' >     
      <OverlayContent>
      <div className='flex flex-col justify-center items-center'>
       <img src="https://i.ibb.co/CBv2Rbv/ciencialogo.png" alt="Ciencialogo" />
        <CustomFont className='mt-20 text-8xl inline-block'>National Level Technical Fest</CustomFont>
        <CustomFont2 className='mt-10'>Where talent meets opportunity in the realm of technology.</CustomFont2>
                        <div 
                  class="apply-button" 
                  data-hackathon-slug="innov8" 
                  data-button-theme="light"
                  className='h-20 hover:scale-[1.01] active:scale-95 w-96'
                ></div>


      
            </div>
      </OverlayContent>
    </HeroContainer>
  );
};

export default Hero;
