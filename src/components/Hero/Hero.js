import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Heyo, I'm <b>A V I X I T Y</b></h1>
            <h6 style={{ color: 'white', fontSmooth: 'true'}}> <b> {"> "}GFX Designer, Software Developer, Digital Artist</b></h6>
            <br></br>
            <p>
              I create art and develop different projects,
               my passion is IT & technology. I listen to alot of music whenever & wherever I can.
            </p>
          </HeroLeft>
          <HeroRight>
            <Image style={{ borderRadius: '50%' }}
              src="https://cdn.discordapp.com/attachments/898041851729305621/1085637220909731921/avatar.png"
              alt="avix"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            More 🖱️
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
