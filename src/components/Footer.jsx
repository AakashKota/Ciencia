import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const Logo = styled.img`
  width: 200px;
  margin: 0 auto 20px;
`;

const SocialIcons = styled.div`
  margin-top: 20px;
`;

const SocialIconLink = styled.a`
  margin: 0 10px;
  color: white;
  font-size: 30px;
  text-decoration: none;

  &:hover {
    color: #48D1CC;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper className='relative bg-[#071a20] border-t border-t-white'>
      <Logo src="https://i.ibb.co/CBv2Rbv/ciencialogo.png" alt="Ciencia Logo" />
      <div className='flex flex-col md:flex-row gap-5 w-full'>
        <div className='flex flex-col justify-center items-center md:w-1/2'>
          <p className='text-xl md:text-3xl'>Location</p>
          <p className='text-base md:text-lg'>CVR College of Engineering, Hyderabad</p>
          <iframe className='self-start mx-auto' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.466108509041!2d78.59466117516061!3d17.196163183658683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba659868b4727%3A0xf39a771705e23170!2sCVR%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1709724447924!5m2!1sen!2sin"></iframe>
        </div>
        <div className='md:w-1/2 flex flex-col justify-center'>
          <SocialIcons>
            <div className='flex flex-col md:flex-row justify-center items-center gap-2'>
              <SocialIconLink href="https://www.instagram.com/cvrciencia2k24?igsh=MTlucWM2dnRyNXBpZw==" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </SocialIconLink>
              <span>Follow us for updates</span>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-2'>
              <SocialIconLink href='' target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </SocialIconLink>
              <span>Subscribe to the channel</span>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-2'>
              <SocialIconLink href="https://www.linkedin.com/in/cvr-ciencia-8265152b7/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </SocialIconLink>
              <span>Connect with us</span>
            </div>
          </SocialIcons>
        </div>
      </div>
      <h5>©Ciencia All Rights Reserved.</h5>
    </FooterWrapper>
  );
};

export default Footer;
