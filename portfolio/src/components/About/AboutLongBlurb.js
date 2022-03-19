import { Col, Row } from "react-bootstrap";
import IndivImage from "../Project/IndivImage";
import Envelop from "../svgs/Envelop";
import Linkedin from "../svgs/Linkedin";
import Twitter from "../svgs/Twitter";
import HighlightText from "../Utility/HighlightText";
import RefLink from "../Utility/RefLink";
import AboutSection from "./AboutSection";

export default function AboutLongBlurb() {
  return (
    <AboutSection>
      <Row id="about_content">
        <Col md={2}>
          <IndivImage src="/assets/personal/elmo-wave.gif" />
        </Col>
      </Row>
      <h3>
        {" "}
        hello, I am Mia Tang, and I study at Carnegie Mellon University under
        the interdisciplinary{" "}
        <RefLink
          href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html"
          text="BXA program"
        />
        , majoring in Computer Science and Communications Design.
      </h3>
      <Row id="about_content">
        <Col md={2}>
          <IndivImage src="/assets/personal/dog-computer.gif" />
        </Col>
      </Row>
      <h3>
        currently I am a backend developer at{" "}
        <RefLink
          text="Computational Creativity Lab"
          href="http://computational-creativity.org/"
        />{" "}
        led by Professor Kyuha Shim, and teaching assistant for the class
        Computer Graphics (15-462) at CMU.{" "}
      </h3>{" "}
      <Row id="about_content">
        <Col md={2}>
          <IndivImage src="/assets/personal/spongebob-read.gif" />
        </Col>
      </Row>
      <h3>
        in the past, I worked as a developer intern at Jam3, research assistant
        at Penrose, developer & brand designer at CMU School of Design, and
        frontend engineer at IrisRover.
      </h3>
      <Row id="about_content">
        <Col md={2}>
          <IndivImage src="/assets/personal/penguin-work.gif" />
        </Col>
      </Row>
      <h3>
        for summer 2022, I will be interning at{" "}
        <RefLink text="Cesium" href="https://cesium.com/" /> as a software
        developer, focusing on 3D geospatial data. Feel free to reach out to
        talk about anything fun for the future.
      </h3>
      <ul className="contact_links_wrapper">
        <li>
          <Envelop /> <HighlightText>miatang13[at]gmail[dot]com</HighlightText>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1tXYpZihDdmMnYTsDwIiHwF3peB2Zq3r6/view?usp=sharing">
            résumé
          </a>
          <a href="https://www.linkedin.com/in/mia-tang/">
            <Linkedin />{" "}
          </a>{" "}
          <a href="https://twitter.com/Miamiamia0103">
            <Twitter />
          </a>
        </li>
      </ul>
    </AboutSection>
  );
}
