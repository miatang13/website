import StyledExternalLink from "../global/StyledExternalLink";
import landingPic from "../../public/assets/personal/sig_bio_sqr_sm.png";
import Image from "next/image";

export default function LandingIntro() {
  const section_title_style = "text-xl font-bold text-pink-400";
  return (
    <div className='pb-3 max-h-min'>
      <div class="grid lg:grid-cols-6">

        {/* Left Image */}
        <div className="lg:col-span-2 lg:mx-[10px] lg:px-20 lg:pt-3 w-full">
          <Image
            src={landingPic}
            className="w-full h-auto object-cover rounded-full"
            alt="Mia Bio Picture"
          />
        </div>
        {/* Right Text Content */}
        <div className="md:col-span-4 grid place-content-center md:pl-2 flex items-stretch">
          <div className="flex flex-col justify-between">
            <h2 className={section_title_style}>Hello there :)</h2> <h4 className='mono font-normal text-slate-800'>
              I am Mia — a master's student in computer science at Stanford University, where I'm fortunate to be advised by Professor {" "}
              <StyledExternalLink href="https://graphics.stanford.edu/~maneesh/"> Maneesh Agrawala</StyledExternalLink>. I have also had the privilege of working at the <StyledExternalLink href="https://svl.stanford.edu/"> Stanford Vision and Learning Lab (SVL)</StyledExternalLink>.
              Previously, I earned my BCSA (Bachelor of Computer Science and Arts) at Carnegie Mellon University,
              where I was grateful to work with Professor <StyledExternalLink href='https://www.cs.cmu.edu/~junyanz/'>
                Jun-Yan Zhu
              </StyledExternalLink> on generative visual systems and Professor <StyledExternalLink href='https://kyuhashim.com/'>
                Kyuha Shim
              </StyledExternalLink> on computational design.<br /><br />

              I am passionate about teaching and express this through my work as a comic artist,
              developing accessible educational illustrations on technical topics. In my free time, I volunteer as a math tutor for preschool children at local schools in Palo Alto.

              <br /><br />
              <span class="text-pink-400 lg:text-sm">  🐰 I currently co-organize Stanford Graphics Cafe Seminar. Subscribe to our  <StyledExternalLink href="https://mailman.stanford.edu/mailman/listinfo/graphics-cafe">mailing list</StyledExternalLink> for updates! <br />
                📧 You can reach me personally at miatang [at] cs [dot] stanford [dot] edu.  </span>
            </h4>
          </div>
        </div>
      </div>
      <div id="research-details">
        <h2 className={section_title_style}>Research Interest</h2>
        <h4 className='mono font-normal text-slate-800'>
          My research focuses on vision-language models for controllable 2D and 3D generation. I am particularly interested in developing algorithms and systems that facilitate the creative processes of designers and artists.<br /><br />
        </h4>
      </div>
    </div>
  );
}
