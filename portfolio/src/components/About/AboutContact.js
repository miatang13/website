import Envelop from "../svgs/Envelop";
import Link45Deg from "../svgs/Link45Deg";
import Twitter from "../svgs/Twitter";
import AboutSection from "./AboutSection";

export default function Contact() {
  return (
    <AboutSection>
      <ul>
        <li>
          <Envelop /> miatang13[at]gmail[dot]com
        </li>
        <li>
          <Twitter />{" "}
          <a href="https://twitter.com/Miamiamia0103">@miamiamia0103</a>
        </li>
        <li>
          <Link45Deg />{" "}
          <a href="https://drive.google.com/file/d/1tXYpZihDdmMnYTsDwIiHwF3peB2Zq3r6/view?usp=sharing">
            résumé
          </a>
        </li>
      </ul>
    </AboutSection>
  );
}
