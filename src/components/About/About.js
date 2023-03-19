import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Stuff,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container glass-filter">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard ">
          <Image style={{ borderRadius: '50%' }}
            src="https://cdn.discordapp.com/attachments/758038403634692187/1086997758017286225/1679230853794.jpg"
            alt="avix"
          />
          <div className="AboutBio">
             I'm <strong>A V I X I T Y (on the internet)</strong>, i create projects and contribute to some that are open-sourced. I'm from Latvia, 20 y/o and soon to finish 12th grade. 
            <br />

          </div>
          <div style={{ color: 'white', textAlign: 'center', padding: '15px', fontSize: '2rem', fontFamily: 'sans-serif'}}>
            Tech Stack:
            <hr></hr>
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Stuff key={index} className="Stuff">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName><b>{stack.name}</b></TechName>
              </Stuff>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
