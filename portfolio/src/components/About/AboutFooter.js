import TiltOnIntersect from "../Animation/TiltOnIntersect";
import AboutSection from "./AboutSection";

export default function AboutFooter() {
  return (
    <AboutSection>
      <TiltOnIntersect>
        <img
          style={{ paddingBottom: "2vh" }}
          src="/assets/personal/doggo.png"
          width="100%"
          alt="doggo"
        />
        <span>My dogs: Mango & Leeze</span>
      </TiltOnIntersect>
    </AboutSection>
  );
}
