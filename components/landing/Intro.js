import StyledExternalLink from "../global/StyledExternalLink";
import landingPic from "../../public/assets/personal/bio_stanford_sqr_sm.png";
import Image from "next/image";

export default function LandingIntro() {
  const section_title_style = "text-xl font-bold text-pink-400";
  return (
    <div className='pb-3 max-h-min'>
      <div className="grid lg:grid-cols-6">

        {/* Left Image */}
        <div className="lg:col-span-2 lg:mx-[10px] lg:pr-28 lg:pl-0 lg:pb-0 lg:pt-3 p-14 w-full">
          <Image
            src={landingPic}
            className="w-full h-auto object-cover rounded-full"
            alt="Mia Bio Picture"
          />
        </div>
        {/* Right Text Content */}
        <div className="md:col-span-4 grid place-content-center flex items-stretch">
          <div className="flex flex-col justify-between">
            <h2 className={section_title_style + " mb-2"}>Hello there :)</h2>

            <h4 className='mono font-normal text-slate-800 mt-0 pt-0'>
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
            </h4>
          </div>
        </div>
      </div>
      <div id="research-details" className="grid lg:grid-cols-3">
        <div className='flex flex-col col-start-2 col-span-2 '>
          <h2 className={section_title_style}> Research Interest</h2>
          <h4 className='mono font-normal text-slate-800 mt-0 pt-0'>
            My research explores the intersection of computer graphics, vision, and AI, with a focus on developing controllable and interactive systems for visual expression.<br /><br />
            <hr />
          </h4>
        </div>

      </div>

      <div className="grid lg:grid-cols-3 mb-4">
        <div id="intro-call-outs" className='flex flex-col gap-y-2 col-start-2 col-span-2'>
          <p className="text-pink-400 lg:text-sm mono font-bold">  🐰 I currently co-organize Stanford Graphics Cafe Seminar. Subscribe to our  <StyledExternalLink href="https://mailman.stanford.edu/mailman/listinfo/graphics-cafe">mailing list</StyledExternalLink> for updates!
          </p>
          <p className="lg:text-sm  mono font-bold text-blue-400"> 📧 You can reach me personally at miatang [at] cs [dot] stanford [dot] edu. </p>
        </div>


      </div>

    </div>
  );
}
