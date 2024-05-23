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
        I aim to create compelling and engaging visual content by introducing new forms of control into vision-language models.<br /><br />

        My primary goal in creating effective visuals is educational.
        I am passionate about teaching and express this through my work as a comic artist,
        developing accessible educational illustrations on technical topics.
        I have had the privilege of co-teaching courses on Generative AI at SIGGRAPH and SIGGRAPH Asia.
        Additionally, I volunteer as a math tutor for preschool children at local schools in Palo Alto in my free time.
        <br /><br />

        If you'd like to discuss generative models, design, or education, feel free to contact me at miatang13 [at] gmail.com.

      </h4>
    </div>
  );
}
