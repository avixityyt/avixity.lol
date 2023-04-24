import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
import { FaDiscord, FaGithub, FaMailBulk, FaTwitter } from "react-icons/fa";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container glass-filter">
        <div className="SectionTitle">Contact Me
          <hr></hr></div>
        <div className="BigCard">
          <Email style={{ color: 'white' }}>

            {/* create a list of socials, icons and buttons */}
            <h1>
              <a className="btn " style={{ background: 'transparent' }} href="mailto:avixityyt@gmail.com" target="_blank" rel="noopener noreferrer" > <FaMailBulk /> Send Mail </a>
            </h1>
            <br></br>
            <h1>
              <a className="btn " style={{ background: 'transparent' }} href="https://discord.com/users/459025800633647116" target="_blank" rel="noopener noreferrer" ><FaDiscord />  Discord </a>
            </h1>
            <br></br>

            <h1>
              <a className="btn " style={{ background: 'transparent' }} href="https://twitter.com/AvixityYT" target="_blank" rel="noopener noreferrer" > <FaTwitter /> Twitter</a>

            </h1>
            <br></br>

            <h1>
              <a className="btn " style={{ background: 'transparent' }} href="https://github.com/avixityyt" target="_blank" rel="noopener noreferrer" ><FaGithub />  Github</a>


            </h1>

          </Email>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
