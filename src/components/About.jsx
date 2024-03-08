import React from "react";
import WordZoomer from "./Zoomer";
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Container = styled.div`
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
    font-size: 2vw; /* 16px equivalent to 2% of the viewport width */
  }
`;

const OverlayContent = styled.div`
  position: absolute;
  color: white;
  text-align: center;
  justify-content:center;
  align-items:center;
`;

export default function About() {
    return (
       <Container>
        <OverlayContent>  
          <section className="flex flex-col font-Anton tracking-wider justify-center items-center mx-auto mt-48 px-4 py-48 lg:py-40" style={{ padding: "4%" }}>
            <WordZoomer />
            <p className="p-4 md:p-8 mt-5 md:mt-2 font-Titillium font-semibold leading-relaxed md:leading-[2.6vw] text-center md:text-2xl text-justify" style={{ marginTop: "2%" }}>
            CIENCIA, a National-level technical symposium organized by CVR College of Engineering, has evolved into a remarkable phenomenon. It has significantly contributed to elevating CVRCE to unprecedented levels of fame and technical excellence. CIENCIA returns bigger and better, showcasing innovative events for all branches including CSE, Civil, Mechanical, IT, EIE, EEE & ECE. The fest features a plethora of programming, analytical, electrical, and electronic events, along with a challenging Technical Quiz. For those less inclined towards technical events, there are engaging activities like LAN gaming and a General Quiz. CIENCIA aims to transform attendees into active participants, encouraging them to join various events and explore the campus stalls. Join us at CIENCIA for an unforgettable experience!</p>
          </section>
        </OverlayContent>
       </Container>
    );
}
