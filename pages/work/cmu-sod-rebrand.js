import Image from "next/image";
import globalStyles from "../../settings/global-styles";
import projects_data from "../../settings/projects.json";
import projectByOrder from "../../settings/project-order";
import ProjectHeader from "../../components/project/ProjectHeader";
import IndivVideo from "../../components/project/Mp4Video";
import FullLine from "../../components/project/FullLine";
import hero_img from "../../public/assets/SoD/thumbnail.png";

export default function SoDRebrand() {
  const base_url = "/assets/SoD/";
  const display_format = ".png";
  let web_subpage_images = [];
  for (let i = 1; i < 7; i++) {
    let src = base_url + "web/" + i.toString() + display_format;
    web_subpage_images.push(src);
  }
  const misc_features = [
    {
      title: "Wordmark",
      path_url: "branding/",
      visuals: [
        {
          file_name: "logo_floorplan",
        },
        {
          file_name: "logo_plain",
        },
      ],
    },
    {
      title: "Marketing",
      path_url: "marketing/",
      visuals: [
        {
          file_name: "main+spread",
        },
        {
          file_name: "posters",
        },
      ],
    },
    {
      title: "Print",
      path_url: "print/",
      visuals: [
        {
          file_name: "1",
        },
        {
          file_name: "2",
        },
        {
          file_name: "3",
        },
        {
          file_name: "4",
        },
      ],
    },
    {
      title: "Merch",
      path_url: "merch/",
      visuals: [
        {
          file_name: "1",
        },
        {
          file_name: "2",
        },
      ],
    },
  ];

  const page_key = "SoD";

  const project_idx = projectByOrder.indexOf(page_key);
  const page_data = projects_data[project_idx];

  return (
    <div className={globalStyles.div_styles.page_outer_wrapper}>
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <Image src={hero_img} />
        <ProjectHeader page_data={page_data} />

        <div title='Overview'>
          <div className='grid grid-cols-2 pb-6'>
            <h2 className={globalStyles.font_styles.h2}>The Ask</h2>
            <p>
              The CMU School of Design wanted to reach diverse prospective
              students through a{" "}
              <span className='highlight_text'>marketing campaign</span>. The
              campaign should allow high school students to learn more about the
              program, seek answers to their potential questions, and ultimately
              see themselves in the design field. In order to be accessible and
              convincing to the highschool students, a more playful brand
              identity needed to be established.
            </p>
          </div>
          <div className='grid grid-cols-2 pb-6'>
            <h2 className={globalStyles.font_styles.h2}>Our Approach</h2>
            <p>
              To inspire those potential future designers to apply for CMU, we
              wanted to focus on the following actions:{" "}
              <span className='highlight_text'>
                educate, motivate, and connect
              </span>
              . It is only possible for highschool students to apply if only
              they are motivated to become designers, so in the series of
              products in this campaign:{" "}
              <span className='highlight_text'>website, print, marketing</span>,
              we strive to provide insights on how the audience just might be a
              great designer.
            </p>
          </div>
        </div>

        <div className='pb-6'>
          <h2 className={globalStyles.font_styles.h2}>Brand</h2>
          <Image
            src={base_url + "branding/guideline" + display_format}
            alt='multi-page'
            caption='Brand Guidelines'
            layout='responsive'
            width={500}
            height={300}
          />
          <div className='grid grid-cols-2 pt-6'>
            <p>
              We created a cheerful, young and exciting visual identity with the
              high contrast color combinations. Along with the color and
              typeface system, we developed a set of doodles as assets to be
              utilized across various mediums in the campaign.
            </p>
          </div>
        </div>

        <div className='pb-6'>
          <h2 className={globalStyles.font_styles.h2}>Website</h2>
          <Image
            src={base_url + "web/multi-page" + display_format}
            alt='multi-page'
            layout='responsive'
            width={500}
            height={300}
          />
          <div className='grid grid-cols-2 pt-6'>
            <Image
              src={base_url + "web/mockup.gif"}
              alt='web motion mockup'
              width={500}
              height={600}
              layout='responsive'
            />
          </div>

          {/* <ImageRow left={true} src={base_url + "web/mockup.gif"}>
            {" "}
            <div fullWidth={true}>
              As the lead developer on the team, I first researched on the
              existing popular CMS on the market, and decided on using Cargo to
              make our website come to life. By using a CMS, it allows easy
              editing for other designers on the team, and future maintenance of
              the website. <br />
              <br />
              The website is designed and made to be{" "}
              <span class='highlight_text'>
                playful, interactive, and engaging
              </span>
              .{" "}
            </div>
          </ImageRow> */}
          <div className='py-3 grid grid-cols-3 '>
            {web_subpage_images.map((src) => (
              <div className='border-2'>
                <Image
                  src={src}
                  alt='web subpage'
                  layout='responsive'
                  width={500}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>

        {misc_features.map((feat) => (
          <div className='py-3'>
            <h2 className={globalStyles.font_styles.h2}>{feat.title}</h2>
            <div className={"grid grid-cols-2 pt-6"}>
              {" "}
              {feat.visuals.map((e) => (
                <Image
                  src={base_url + feat.path_url + e.file_name + display_format}
                  alt={feat.title}
                  layout='responsive'
                  width={500}
                  height={300}
                />
              ))}
            </div>
          </div>
        ))}

        <div className='pt-6 border-t-2'>
          <h2 className={globalStyles.font_styles.h2}>Reflections</h2>
          <div className='py-2'>
            <Image
              src={base_url + "process/posters.png"}
              alt='web motion mockup'
              layout='responsive'
              caption='the TEAM <3'
              width={500}
              height={280}
            />
          </div>

          <div className='grid grid-cols-2 space-x-6 pt-6'>
            <div>
              This project was fun from the very start as I got to work with
              some of my favorite classmates as colleagues and professors as
              mentors and clients, and furthermore, I am more than honored to be
              chosen to be part of the effort to rebrand and promote CMU SoD.{" "}
              <br /> <br /> Professor Brett Yasko and Professor Dylan Vitone
              gave us valuable feedback and inspirations throughout the project
              as our main point of contact with the SoD faculty. Their
              continuous support and guidance allowed our creativity to flourish
              and be executed.
            </div>{" "}
            <div fullWidth={true}>
              This was my first time working on a client project focusing on
              creating a completely new brand identity, and developing separate
              projects across different mediums to achieve the objective. The
              technical aspect of this project was not too challenging, but I
              still learned a lot about working with CMS, <q>hacking</q> the
              pre-defined rules, and using custom code to enable playful
              interactions.
              <br />
              <br />
              As a conclusion, I have been very grateful to be a part of this
              project, and it had helped me grow both as a designer and as a
              developer.
            </div>
          </div>
        </div>
        {/* <ProjectLinkSection
          links={[
            {
              link: "https://cmudesignundergradadmissions.com/",
              text: "Live Site",
            },
            { link: "http://brettyasko.com/", text: "Brett Yasko" },
            { link: "https://www.dylanvitone.com/", text: " Dylan Vitone" },
            { link: "https://alliswells.co/", text: "Langston Wells" },
            { link: "https://www.ytorralva.com/", text: "Yoshi Torralva" },
            { link: "https://angelahlee.com/", text: "Angela Lee" },
            { link: "https://alicelcai.com/", text: "Alice Cai" },
          ]}
        /> */}
      </div>
    </div>
  );
}
