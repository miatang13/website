import Envelop from "../svgs/Envelop";
import Linkedin from "../svgs/Linkedin";
import Twitter from "../svgs/Twitter";
import AboutSection from "./AboutSection";

export default function Contact() {
  return (
    <AboutSection>
      <ul>
        <li>
          <Envelop /> miatang13[at]gmail[dot]com
        </li>
        <li className="contact_links_wrapper">
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
