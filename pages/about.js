import Image from "next/image";
import globalStyles from "../settings/global-styles";
import teaPainting from "../public/assets/personal/painting-tea.png";
import animalPainting from "../public/assets/personal/painting-animals.png";
import mangoLeeze from "../public/assets/personal/doggo.png";
import doggoSniff from "../public/assets/personal/doggo-sniff.png";
import profilePic from "../public/assets/personal/bio-side-1.jpg";
import StyledExternalLink from "../components/global/StyledExternalLink";

export default function About() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id='page-container'
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <p className={globalStyles.font_styles.p + " mt-4"}>
          I am Mia Tang, a recent graduate of Carnegie Mellon University's{" "}
          <StyledExternalLink href='https://www.cmu.edu/interdisciplinary/programs/bcsa.html'>
            BXA program
          </StyledExternalLink>
          , where I majored in Computer Science and Design with a concentration
          in Communications Design.
          <br />
          <br />
          Finding solutions to challenging problems brings me immense joy. I
          have a deep curiosity and strive to gain a diverse range of
          perspectives.
          <br />
          <br />
          Professionally, I have a strong passion for software development and a
          keen interest in working with graphics systems. I appreciate the
          intricacies of typography, color, and motion in design. Although my
          childhood dreams revolved around becoming an artist or designer, my
          introduction to programming at CMU changed my path. While I now pursue
          a career as an engineer, I still hold a deep admiration for the
          creative community. I value collaborative environments where I can
          work alongside artists and designers, building tools to support their
          craft.
          <br />
          <br />
          In my free time, I explore my passion for storytelling. I am
          particularly motivated to find ways to explain complex technical
          concepts in accessible and engaging ways. This interest sparked during
          my sophomore year when I served as a teaching assistant for an
          introductory Functional Programming class. Many students came from
          diverse academic backgrounds, and I dedicated time to finding
          effective ways to explain intricate topics in a manner that resonated
          with them. I firmly believe that the process of acquiring new
          knowledge is exhilarating and rewarding, and I am committed to helping
          others experience that same joy. Additionally, overcoming intellectual
          challenges fosters confidence and resilience, shaping us into stronger
          individuals.
          <br />
          <br /> Some fun facts: (1) My favorite artistic medium is oil on
          canvas.
        </p>
        <div class='grid sm:grid-cols-2 gap-4 py-6'>
          <Image src={teaPainting} />
          <Image src={animalPainting} />
        </div>
        <p className={globalStyles.font_styles.p}>
          (2) I have two adorable corgis, Mango and Leeze. They live in the
          beautiful British Columbia, Canada, with my lovely family.
        </p>

        <div className='grid sm:grid-cols-2 gap-4 py-6'>
          <Image src={mangoLeeze} />
          <Image src={doggoSniff} />
        </div>

        <p className={globalStyles.font_styles.p}>
          That's about it for now. I'm always looking for fun opportunities, so
          feel free to contact me. The best way to reach me is at my email:
          miatang13[at]gmail[dot]com
        </p>

        <div className='grid sm:grid-cols-3 py-6'>
          <div className='sm:col-start-2'>
            <Image src={profilePic} />
            <p className={globalStyles.font_styles.p}>
              Thanks for visiting. :-)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
