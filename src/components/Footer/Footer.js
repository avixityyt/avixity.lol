import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span style={{ color: "white" }}>
          Made with ❤ by {" avixity "}
          <br>
          </br>
          © 2023 AVIXITY. All Rights Reserved.

        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
