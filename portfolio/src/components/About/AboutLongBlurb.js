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
        Thank you for visiting :) <br></br>I am Mia Tang, a student at Carnegie
        Mellon University's{" "}
        <RefLink
          href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html"
          text="BXA program"
        />
        , majoring in Computer Science and Design.
      </h3>
      <Row id="about_content">
        <Col md={2}>
          <IndivImage src="/assets/personal/dog-computer.gif" />
        </Col>
      </Row>
      <h3>
        At the moment, I am a backend developer at{" "}
        <RefLink
          text="Computational Creativity Lab"
          href="http://computational-creativity.org/"
        />{" "}
        , and a teaching assistant for the class Computer Graphics.{" "}
      </h3>{" "}
      <Row id="about_content">
        <Col md={2}>
          <IndivImage src="/assets/personal/spongebob-read.gif" />
        </Col>
      </Row>
      <h3>
        In the past, I met and collaborated with wonderful people as a developer
        intern at <RefLink text="Jam3" href="https://www.jam3.com/" />, research
        assistant at{" "}
        <RefLink text="Penrose" href="https://penrose.cs.cmu.edu/ " />,
        developer & brand designer at{" "}
        <RefLink
          text="CMU School of Design"
          href="https://design.cmu.edu/content/school-design-debuts-new-logo-designed-students"
        />
        , and frontend engineer at{" "}
        <RefLink text="IrisRover" href="https://irislunarrover.space/" />.
      </h3>
      <Row id="about_content">
        <Col md={2}>
          <IndivImage src="/assets/personal/penguin-work.gif" />
        </Col>
      </Row>
      <h3>
        For summer 2022, I will be interning at{" "}
        <RefLink text="Cesium" href="https://cesium.com/" /> as a software
        developer, working with 3D geospatial data. Feel free to reach out to
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
