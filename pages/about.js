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
          If you're curious about my journey and what drives my work, here’s a bit about why I do what I do and why it matters to me. :)
          <br />
          <br />
          From a young age, I've been drawn to the world of art and design. I spent afternoons in art studios, dabbling in everything from sketching and painting to sculpting. Initially, I pursued a major in Graphic Design in college. However, an introductory programming class soon broadened my horizons, revealing new possibilities at the intersection of technology and art. Fortunately, Carnegie Mellon’s BXA program allowed me to nurture both my technical skills and artistic passions. This led me to discover Computer Graphics, which perfectly blended these interests.
          <br />
          <br />
          My deep appreciation for creating beautiful visuals—whether through a traditional brush on canvas, digital tools or a shader program—has always been a part of me. But the true unifying theme across all my pursuits is my passion for visuals that captivate and stimulate thought. This passion became even more apparent when I was a teaching assistant for a functional programming class during my sophomore year. Teaching students from diverse backgrounds challenged me to present complex material in an engaging and accessible way. That's when I started creating educational comics, which proved incredibly rewarding as I watched students experience their "aha" moments. These experiences have fueled my current research focus: simplifying the creative process to empower everyone to produce impactful visual content.
          <br />
          <br />
          As an educational comic artist (yes, that's definitely a thing!), I am incredibly grateful for the opportunity to teach complex technical content in an approachable way. Over the years, my educational artwork has been featured in tech community blogs and used in university teaching materials. After graduating from CMU, I self-published a booklet compiling all my work up to that point. While I'm currently focused on growing as a researcher, I'm excited to resume creating educational content soon.
          <br />
          <br />
          Some fun facts: (1) My favorite artistic medium is oil on
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
