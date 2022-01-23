import LeftColumn from "../Layout/LeftColumn";
import RightColumn from "../Layout/RightColumn";
import TwoColumns from "../Layout/TwoColumns";
import AboutIntro from "./AboutIntro";
import AboutSection from "./AboutSection";

export default function AboutPhotoBlurb() {
  return (
    <AboutSection>
      <TwoColumns>
        <LeftColumn>
          <img
            src="/assets/personal/with-mango-cropped.png"
            width="100%"
            id="bio-photo"
            alt="bio"
          />
        </LeftColumn>
        <RightColumn>
          <AboutIntro />
        </RightColumn>
      </TwoColumns>
    </AboutSection>
  );
}
