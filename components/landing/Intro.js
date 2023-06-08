import StyledExternalLink from "../global/StyledExternalLink";

export default function LandingIntro() {
  return (
    <div className='pb-3 max-h-min'>
      <h4 className='mono font-normal text-slate-800'>
        I am Mia — a Research Engineer Intern at Adobe, passionate about
        utilizing computer graphics, vision, and deep learning to develop
        innovative creative tools for artists and designers. With these
        technologies, I aim to enhance the creative process and empower
        individuals to express their artistic vision more effectively.
        <br />
        <br />
        In the fall of 2023, I'll be pursuing my master's degree in Computer
        Science at Stanford University. Recently, I graduated from Carnegie
        Mellon University, where I studied Computer Science and Design under the
        guidance of Professor{" "}
        <StyledExternalLink href='https://www.cs.cmu.edu/~junyanz/'>
          Jun-Yan Zhu
        </StyledExternalLink>
        , conducting research on generative visual systems.
        {/* Along my journey,
        I've collaborated with amazing professionals in diverse roles, including
        software developer intern at{" "}
        <StyledExternalLink href='https://cesium.com/'>
          Cesium
        </StyledExternalLink>
        , developer intern at{" "}
        <StyledExternalLink href='https://www.jam3.com/'>
          Jam3
        </StyledExternalLink>
        , and developer & brand designer at{" "}
        <StyledExternalLink href='https://design.cmu.edu/content/school-design-debuts-new-logo-designed-students'>
          CMU School of Design
        </StyledExternalLink>. */}
        <br />
        <br />
        Sharing knowledge through teaching is another passion of mine. Explore
        my educational work on the blog page.
      </h4>
    </div>
  );
}
