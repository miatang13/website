import StyledExternalLink from "../global/StyledExternalLink";

export default function LandingIntro() {
  return (
    <div className='pb-3 max-h-min'>
      <h4 className='mono font-normal text-slate-800'>
        I am Mia — a first-year master’s student in computer science at Stanford University, advised by Professor  {" "}
        <StyledExternalLink href="https://graphics.stanford.edu/~maneesh/"> Maneesh Agrawala</StyledExternalLink>.
        Previously, I earned my BCSA (Bachelor of Computer Science and Arts) at Carnegie Mellon University,
        where I was fortunate to be advised by Professor <StyledExternalLink href='https://www.cs.cmu.edu/~junyanz/'>
          Jun-Yan Zhu
        </StyledExternalLink> on generative visual systems and Professor <StyledExternalLink href='https://kyuhashim.com/'>
          Kyuha Shim
        </StyledExternalLink> on computational design.<br /><br />

        My research interests are at the intersection of computer graphics, computational 2D and 3D design, and storytelling.
        I am interested in leveraging generative models to create visual content and tools for artists and designers.<br /><br />

        I am passionate about teaching and express this through my work as a comic artist,
        developing accessible educational illustrations on technical topics.
        I have had the privilege of co-teaching courses on Generative AI at SIGGRAPH. In my free time, I volunteer as a math tutor for preschool children at local schools in Palo Alto.

        <br /><br />
        🐰 I currently co-organize Stanford Graphics Cafe Seminar. Subscribe to our  <StyledExternalLink href="https://mailman.stanford.edu/mailman/listinfo/graphics-cafe">mailing list</StyledExternalLink> for updates on our weekly talks!

      </h4>
    </div>
  );
}
