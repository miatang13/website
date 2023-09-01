import ExternalLink from "../global/ExternalLink";
import StyledExternalLink from "../global/StyledExternalLink";

export default function LandingIntro() {
  return (
    <div className='pb-3 max-h-min'>
      <h4 className='mono font-normal text-slate-800'>
        I am Mia — an incoming MS CS student at Stanford University, and a
        Research Engineer Intern at Adobe. I am passionate about developing
        innovative creative tools for artists and designers, using graphics,
        HCI, and machine learning.
        <br />
        <br />
        During my time at Carnegie Mellon University, where I received my BCSA —
        Bachelors of Computer Science and Arts, I had the privilege of
        conducting research on (1) generative systems under the guidance of
        Professor
        {` `}
        <StyledExternalLink href='https://www.cs.cmu.edu/~junyanz/'>
          Jun-Yan Zhu
        </StyledExternalLink>
        , and (2) computational design under the guidance of Professor {` `}
        <StyledExternalLink href='https://kyuhashim.com/'>
          Kyuha Shim
        </StyledExternalLink>
        .
        <br />
        <br />
        Teaching is a passion of mine. At CMU, I helped students learn about
        computer graphics and functional programming. I believe in the power of
        visual storytelling as a vessel for knowledge sharing. In my free time,
        I experiment as a comic artist, curating accessible educational
        illustrations on technical topics. I have had the honor to co-teach a
        course on Generative Machine Learning at SIGGRAPH 2023, incorporating
        visual narratives in the teaching material.
        <br />
        <br />
        If you'd like to chat about design, generative systems, or education,
        feel free to reach me at miatang13 [at] gmail.
      </h4>
    </div>
  );
}
