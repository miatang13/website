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
      <Row>
        <h3>
          Thanks for visiting :) <br></br>I am Mia Tang, a student at Carnegie
          Mellon University's{" "}
          <RefLink
            href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html"
            text="BXA program"
          />
          , majoring in Computer Science and Design.
        </h3>
      </Row>
      <Row id="about_content">
        <Col md={3}>
          <img
            src="/assets/personal/bio-photo-side.jpg"
            width="100%"
            id="bio-photo"
            alt="bio"
          />
        </Col>
      </Row>
      <Row>
        <h3>
          I am from Canada, and I grew up in the beautiful Vancouver, British
          Columbia, where my family lives (including my two adorable corgis).{" "}
        </h3>
      </Row>
      <Row id="about_content">
        <Col md={2}>
          <IndivImage src="/assets/personal/dog-computer.gif" />
        </Col>
      </Row>
      <h3>
        At the moment, I am a software developer intern at{" "}
        <RefLink text="Cesium" href="https://cesium.com/" />. During the
        semester, I am a teaching assistant for the class Computer Graphics.
      </h3>{" "}
      <Row id="about_content">
        <Col md={2}>
          <IndivImage src="/assets/personal/spongebob-read.gif" />
        </Col>
      </Row>
      <h3>
        In the past, I have met and collaborated with wonderful people as a
        research developer at{" "}
        <RefLink
          text="Computational Creativity Lab"
          href="http://computational-creativity.org/"
        />{" "}
        led by Professor Kyuha Shim , developer intern at{" "}
        <RefLink text="Jam3" href="https://www.jam3.com/" />, research assistant
        at <RefLink text="Penrose" href="https://penrose.cs.cmu.edu/ " />,
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
        In my free time, I like to create educational content in the form of
        illustrations and comics as both the writer and illustrator. In
        particular, I am fascinated with the field of Graphics. Feel free to
        contact me for any fun opportunities.
      </h3>
      <ul className="contact_links_wrapper">
        <li>
          <Envelop /> <HighlightText>miatang13[at]gmail[dot]com</HighlightText>
        </li>
        <li>
          {/* <a href="https://drive.google.com/file/d/1tXYpZihDdmMnYTsDwIiHwF3peB2Zq3r6/view?usp=sharing">             résumé available upon request
          </a> */}
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