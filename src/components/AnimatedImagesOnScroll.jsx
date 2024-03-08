import React, { useState, useEffect } from "react";

const AnimatedImagesOnScroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const maxFontSize = 7; // Maximum font size
  const minFontSize = 5; // Minimum font size

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const offset = window.innerHeight * 0.75; // Adjust the offset as needed

      if (scrollTop > offset) {
        const progress = (scrollTop - offset) / (window.innerHeight * 0.25);
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let fontSizeFlashMob = maxFontSize - scrollProgress * maxFontSize;
  fontSizeFlashMob = Math.max(minFontSize, fontSizeFlashMob); // Limit font size to minFontSize

  let fontSize5KRun = maxFontSize - scrollProgress * maxFontSize;
  fontSize5KRun = Math.max(minFontSize, fontSize5KRun); // Limit font size to minFontSize

  return (
    <>
      <div style={{ position: "relative", width: "100%", maxWidth: "100vw" }}>
        <img
          className=""
          src="https://i.ibb.co/kSTTLCj/Untitled-design-1.png"
          alt="First Image"
          style={{
            width: "70%", // Change width to percentage
            height: "auto", // Maintain aspect ratio
            marginLeft: "0rem", // Adjust margin to center
            borderRadius: "1rem 1rem 6rem 1rem",
            transition: "opacity 0.5s ease-in-out",
            opacity: scrollProgress > 0 ? 1 : 0,
          }}
        />
        <div
          className="absolute top-25 left-66 transform -translate-x-50 -translate-y-50"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.15)",
            padding: "1%", // Change padding to percentage
            borderRadius: "5px",
            display: scrollProgress > 0 ? "block" : "none",
            width: "100%", // Change width to percentage
            top: "10%", // Set the top position as a percentage
          }}
        >
          <h3
            className="text-[#FFD700] text-4xl"
            style={{
              fontFamily: "Kdam",
              fontSize: `${fontSizeFlashMob}rem`,
              paddingLeft:"40rem" // Font size
            }}
          >
            Flash Mob
          </h3>
        </div>
      </div>

      <div style={{ position: "relative", width: "100%", maxWidth: "100vw" }}>
        <img
          className=""
          src="https://i.ibb.co/cr9XMZG/Untitled-design-3.png"
          alt="Second Image"
          style={{
            width: "70%", // Change width to percentage
            height: "auto", // Maintain aspect ratio
            marginLeft: "30rem", // Adjust margin to center
            borderRadius: "1rem 1rem 6rem 1rem",
            transition: "opacity 0.5s ease-in-out",
            opacity: scrollProgress > 0 ? 1 : 0,
          }}
        />
        <div
          className="absolute top-25 left-66 transform -translate-x-50 -translate-y-50"
          style={{
            padding: "1%", // Change padding to percentage
            borderRadius: "5px",
            display: scrollProgress > 0 ? "block" : "none",
            width: "80%", // Change width to percentage
            top: "40%", // Set the top position as a percentage
          }}
        >
          <h3
            className="text-[#FFD700] text-4xl"
            style={{
              fontFamily: "Kdam",
              fontSize: `${fontSize5KRun}rem`, // Font size
            }}
          >
            5K Run
          </h3>
          <div className="mt-5" style={{ paddingLeft: "10%" }}>
            <p style={{ margin: "5px 0", fontWeight: "bold", color: "#ffff", fontSize: "1.2rem" }}>Time: 6:00 AM, Saturday</p>
            <p style={{ margin: "5px 0", fontWeight: "bold", color: "#ffff", fontSize: "1.2rem" }}>Date: March 16th, 2024</p>
            <p style={{ margin: "5px 0", fontWeight: "bold", color: "#ffff", fontSize: "1.2rem" }}>Place: JALAVIHAR, NECKLACE ROAD</p>
            <p style={{ margin: "5px 0", fontWeight: "bold", color: "#ffff", fontSize: "1.2rem" }}>Coordinator: N Abhinav Reddy</p>
            <p style={{ margin: "5px 0", color: "#666", fontSize: "1rem" }}>Contact: <a href="tel:+911111111111" style={{ color: "#007BFF", textDecoration: "none" }}>+91 63001 51274</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedImagesOnScroll;
