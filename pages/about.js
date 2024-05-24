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
          If you're curious about my journey and what drives my work, here's a little about why I do what I do and why it matters to me. :)  <br /> <br />
          Ever since I was a kid, I wanted to be an artist or designer. My afternoons were spent in an art studio exploring all sorts of artistic mediums—from sketching and painting to sculpting. I started college as a Graphic Design major, which I still really love, but an introductory programming class opened my eyes to new possibilities. Thankfully, Carnegie Mellon's BXA program let me keep both my technical and artistic interests alive. <br /> <br />
          Ultimately, I believe it's crucial to understand the underlying motivations for any claimed passion. Yes, I enjoy beautiful pictures, and I love the feel of a brush gliding over canvas, but the consistent thread across all my interests is my fascination with visuals that grab people's attention and make them think. Accessible and engaging visuals have the immense ability to captivate audiences and convey messages effectively.
          <br /> <br />
          This clicked for me when I was a teaching assistant for a Functional Programming class during my sophomore year. My students had all kinds of backgrounds, which challenged me to make the material clear and fun. That's when I came up with the idea to create educational comics. It was so rewarding to see students have those “aha” moments—it made teaching and learning really enjoyable.
          Now, in my research, I'm looking to make creating easier for everyone.
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
          feel free to contact me. The best way to reach me is: miatang13 [at]
          gmail.
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
