import Image from "next/image";
import globalStyles from "../settings/global-styles";
import teaPainting from "../public/assets/personal/painting-tea.png";
import animalPainting from "../public/assets/personal/painting-animals.png";
import mangoLeeze from "../public/assets/personal/doggo.png";
import doggoSniff from "../public/assets/personal/doggo-sniff.png";

export default function About() {
  return (
    <div
      className={globalStyles.div_styles.page_outer_wrapper}
      id='page-container'
    >
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <p className={globalStyles.font_styles.p + " mt-4"}>
          If you're curious about my journey and what drives my work, here’s a bit about why I do what I do and why it matters to me. :)  <br />
          <br />

          I spent most of my days before college dabbling with art, experimenting with everything from sketching to sculpture. During my undergrad, I started as a Design major at Carnegie Mellon, never expecting to also study Computer Science. But an introductory programming class showed me that code could be another medium for creation, especially for building tools that help other artists and designers bring their visions to life. While it wasn't an easy journey, moving from being "the art kid" to diving deep into computer science, I saw the potential to make a greater impact by being at the frontier of creating tools, bringing my insights from the creative community. I deeply cherish the nights I spent in the design studio, the experiences I gained freelancing as a graphic designer, and the wonderful creatives I met while working at a design agency — all of which continue to inform my approach to building better creative tools.
          <br />
          <br />
          This blend of technical and creative experiences shaped not just my research direction, but also my approach to teaching. I'm a firm believer that complex ideas don't have to be complicated to explain. During my time as a teaching assistant, I discovered the power of educational comics to help students grasp tricky programming concepts. Watching their "aha!" moments was incredibly rewarding, and these comics ended up reaching far beyond our classroom - they've been used in university courses, featured in tech blogs, and even led me to run workshops at major conferences. I'm extremely grateful for all the kindness people have shown toward my educational work. Even if it's just sparking a slight smile on your face, or reminding you of a long-forgotten concept you brushed over in school, I am happy that what I created gave you some joy.
          <br />
          <br />
          These experiences reinforced my belief in the transformative power of visual storytelling, and I want everyone, including those without professional training, to have access to that power. There's something remarkable about helping people bring their ideas to life, enabling them to have a visual voice that will effectively communicate the message they wish to tell the world. This is what drives my current research focus.
          <br />
          <br />
          While I'm currently focused on growing as a researcher, I'm excited to resume creating educational content soon. My interest in learning and teaching continues to evolve — during my break from making cute cartoons, I've been tutoring preschoolers (ages 3-4) in basic math — it's fascinating to observe how young minds learn and develop concepts of abstract ideas!
          <br />
          <br />
          Looking ahead, I'm excited to keep growing as a researcher and an educator. There's still so much to discover about how we learn and create, and I hope my work in both domains can help make that journey a bit easier and more enjoyable for others.
          <br />
          <br />
          Some fun facts: (1) My favorite artistic medium is oil on
          canvas.
        </p>
        <div className='grid sm:grid-cols-2 gap-4 py-6'>
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
          feel free to contact me. The best way to reach me is: miatang [at]
          cs.stanford.edu <br /><br />
          <span className="text-pink-400"><b>Thanks for visiting ◡̈!  </b></span>
        </p>
      </div>
    </div>
  );
}
