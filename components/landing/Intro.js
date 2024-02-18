import StyledExternalLink from "../global/StyledExternalLink";

export default function LandingIntro() {
  return (
    <div className='pb-3 max-h-min'>
      <h4 className='mono font-normal text-slate-800'>
        I am Mia — an MS CS student at Stanford University.
        I am passionate about developing innovative
        creative tools for artists and designers.
        <br />
        <br />
        During my time at Carnegie Mellon University, where I received
        Bachelors of Computer Science and Arts, I had the privilege of
        conducting research on generative systems under the guidance of
        Prof.
        {` `}
        <StyledExternalLink href='https://www.cs.cmu.edu/~junyanz/'>
          Jun-Yan Zhu
        </StyledExternalLink>
        , and computational design under the guidance of Prof. {` `}
        <StyledExternalLink href='https://kyuhashim.com/'>
          Kyuha Shim
        </StyledExternalLink>
        .
        <br />
        <br />
        Teaching is a passion of mine. I believe in the power of
        visual storytelling as a vessel for knowledge sharing. In my free time,
        I experiment as a comic artist, curating accessible educational
        illustrations on technical topics. I have had the honor to co-teach courses at SIGGRAPH and
        SIGGRAPH Asia on Generative AI, incorporating visual narratives in the teaching material.
        <br />
        <br />
        If you'd like to chat about design, generative systems, or education,
        feel free to reach me at miatang13 [at] gmail.
      </h4>
    </div>
  );
}
