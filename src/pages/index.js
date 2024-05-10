import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle click on "Events" button
  const handleEventsClick = () => {
    window.location.href = "https://unstop.com/hackathons/graph-e-thon-2024-graphic-era-university-949350"; // Replace this with the desired URL
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection
        image={Image1}
        id="About"
        subtitle="Incubators"
        title="Providing Innovation Space"
        text="At InoHub, we specialize in fostering innovation through our cutting-edge innovation cells. Designed to be dynamic and adaptable, our innovation cells are the driving force behind groundbreaking ideas and transformative solutions."
        btnText="Start today"
      />
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle="Resources"
        title="Providing Raw Resources"
        text="Dive into innovation with a diverse array of high-quality raw materials provided by InoHub. Our Innovation Materials offering is tailored to fuel your creative process, enabling you to prototype, experiment, and iterate with ease."
        btnText="Explore"
      />
      <Services />
     
      <InfoSectionLight
        image={Image1}
        id="Events"
        subtitle="Events"
        title="Updates on events"
        text="InnoHub's Events feature is a dynamic platform designed to empower and amplify the potential of startups. Through a diverse array of seminars, festivals, and hackathons, we provide a vibrant space for budding entrepreneurs to showcase their projects, exchange ideas, and forge valuable connections within the startup ecosystem."
        btnText="Events" 
        onClick={handleEventsClick} // Adding onClick event handler
      />
 <InfoSection
        image={Image1}
        id="Legalities"
        subtitle="Legalities"
        title="Know Your Licence"
        text="Our Legalities feature offers comprehensive resources and expert advice to help startups identify the most suitable licenses for their specific industry and business model."
        btnText="Know More"
      />


      <Footer />
    </>
  );
};
