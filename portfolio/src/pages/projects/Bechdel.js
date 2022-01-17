import LeftColumn from "../../components/Layout/LeftColumn";
import RightColumn from "../../components/Layout/RightColumn";
import TwoColumns from "../../components/Layout/TwoColumns";
import ImageGallery from "../../components/Project/ImageGallery";
import ImageRow from "../../components/Project/ImageRow";
import Project from "../../components/Project/ProjectContainer";
import ProjectHeader from "../../components/Project/ProjectHeader";
import ProjectSection from "../../components/Project/ProjectSection";
import ProjectShortSection from "../../components/Project/ProjectShortSection";
import ProjectSubsection from "../../components/Project/ProjectSubsection";
import SectionBlurb from "../../components/Project/SectionBlurb";
import SpotlightImageSection from "../../components/Project/SpotlightImageSection";
import SpotlightVideoSection from "../../components/Project/SpotlightVideoSection";
import VideoRow from "../../components/Project/VideoRow";
import HighlightText from "../../components/Utility/HighlightText";
import RefLink from "../../components/Utility/RefLink";
import project_data from "../../settings/projects.json";

export default function Bechdel() {
  const project_idx = 3;
  const base_url = "/assets/Bechdel/";
  const process_url = base_url + "process/";
  const video_url = base_url + "videos/";
  const video_format = ".mp4";
  const code_url = base_url + "code/";

  return (
    <Project index={project_idx}>
      <ProjectHeader
        title={project_data[project_idx].landing.title}
        subtitle={project_data[project_idx].landing.subtitle}
        team="Jina Lee, Mihika Bansal, Caroline Song"
        role="Sole Developer, Designer"
        skills="WebGL, React, NYT API, RapidAPI"
        timeline="October 2021 — December 2021"
        client="Computational Design Thinking @CMU"
        img_src={base_url + "thumbnail.png"}
      />

      <ProjectShortSection title="Overview">
        <SectionBlurb fullWidth={true}>
          This was a 2-months class project for 51-367 Computational Design
          Thinking taught by{" "}
          <a href="https://kyuhashim.com/">Professor Kyuha Shim</a> at Carnegie
          Mellon. The prompt was to create an engaging web experience that
          organizes and displays data in a digestible approach by creating
          interesting patterns.
        </SectionBlurb>
      </ProjectShortSection>

      <ProjectShortSection title="1. Data">
        <SectionBlurb fullWidth={true}>
          Our group decided to{" "}
          <HighlightText>
            showcase data related to gender representation in films
          </HighlightText>
          . A way to measure inequality of female representation in film is the
          <RefLink
            href="https://en.wikipedia.org/wiki/Bechdel_test"
            text="Bechdel test"
          />
          . We understand that it does not provide the perfect measure, but it
          provides a surface-level framework to evaluate bias against women in
          film.
        </SectionBlurb>
      </ProjectShortSection>

      <ProjectSubsection subtitle="API 1: Bechdel Test API">
        <ImageRow
          left={true}
          src={code_url + "bechdelAPI-all.png"}
          caption="Data from BechdelTest API"
        >
          <SectionBlurb fullWidth={true}>
            We retrieved 3508 movies from the{" "}
            <a href="https://bechdeltest.com/api/v1/doc">BechdelTest API</a>,
            and used this dataset as our main data. From the BechdelTestAPI, we
            get the IMDb id for each movie that passed the Bechdel test with a
            rating from 1 to 3, i.e. the number of Bechdel test rules the movie
            passes.
          </SectionBlurb>
          <SectionBlurb fullWidth={true}>
            Then we{" "}
            <HighlightText>
              ranked directors by the number of their movies appearing in the
              dataset
            </HighlightText>{" "}
            from high to low, thus compiling a list of directors we want to
            promote and applaud for.
          </SectionBlurb>

          <SectionBlurb fullWidth={true}>
            We decided to display directors with two or more movies passing the
            Bechdel Test, which leaves us with 88 directors and 305 movies to
            display.
          </SectionBlurb>
        </ImageRow>
      </ProjectSubsection>

      <ProjectSubsection subtitle="API 2: Movie Databse API">
        <ImageRow
          left={true}
          src={code_url + "movie-data.png"}
          caption="API Call to Movie Database API"
        >
          <SectionBlurb fullWidth={true}>
            We needed more data on every movie that we are displaying, therefore
            we used the{" "}
            <a href="https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative/">
              {" "}
              Movie Database API{" "}
            </a>{" "}
            by RapidAPI.
          </SectionBlurb>

          <SectionBlurb fullWidth={true}>
            We were able to use a movie's IMDb ID to retrieve 26 fields of data
            on a movie. We selected to display a movie's poster, rated, genre,
            awards, and box office.
          </SectionBlurb>
          {/* 
          <SectionBlurb fullWidth={true}>
            <HighlightText>
              It was my first time doing data API calls with Node.js{" "}
            </HighlightText>{" "}
            as in the past I've only used Node for Sockets.
          </SectionBlurb> */}
        </ImageRow>
      </ProjectSubsection>

      <ProjectSubsection subtitle="API 3: NYT API">
        <ImageRow
          left={true}
          src={code_url + "NYT-p5.png"}
          caption="Using P5 Editor for Quick Interface"
        >
          <SectionBlurb fullWidth={true}>
            Since we want to spotlight the directors, we included{" "}
            <HighlightText>one more layer of data</HighlightText> by using the
            NYT Developer API, in particular, the Article Search API, to find
            articles on the selected directors.
          </SectionBlurb>{" "}
          <SectionBlurb fullWidth={true}>
            A challenge we encountered was that we could not programmatically
            search for all these directors at once as it exceeded the maximum
            number of calls on the API at a time. Therefore we had to do manual
            labour to run the script on 5 directors at a time. To do so, I
            created a quick interface in P5 editor that allows user to download
            a json containing search results, which expedited our manual
            process.
          </SectionBlurb>{" "}
        </ImageRow>
      </ProjectSubsection>

      <ProjectShortSection title="2. Design">
        <SectionBlurb fullWidth={true}>
          We focused on designing{" "}
          <HighlightText>
            an interactive, engaging, and fun experience that promotes and
            spotlights the directors by creating a unique data visualization{" "}
          </HighlightText>{" "}
          for each director.
        </SectionBlurb>
      </ProjectShortSection>

      <ProjectSection>
        <SpotlightImageSection
          src={process_url + "key-structure.png"}
          subtitle="Data Visualization"
          fullContent={true}
        >
          <ImageRow
            src={process_url + "director-display.png"}
            caption="NYT Articles Overlay"
          >
            <SectionBlurb fullWidth={true}>
              We designed the website to be a gallery the user can navigate back
              and forth directors. The directors are displayed in the order of
              directors with most movies that passed the Bechdel test to
              directors with least movies that passed.
            </SectionBlurb>
            <SectionBlurb fullWidth={true}>
              The website displays one director data visualization at a time.
              Each visualization plots a director's movies on a graph with two
              axis: box office and release date.
            </SectionBlurb>
            <SectionBlurb fullWidth={true}>
              A design challenge we encountered was how to include the NYT
              articles in the data visualization, and the solution we came up
              with was overlaying the articles on top, and users can toggle its
              visibility.
            </SectionBlurb>
          </ImageRow>
        </SpotlightImageSection>
      </ProjectSection>

      <ProjectSubsection subtitle="Assets">
        <TwoColumns>
          <LeftColumn>
            <ImageGallery
              images={[
                process_url + "genre-symbols.png",
                process_url + "audience-rate.png",
              ]}
              md={12}
            />
          </LeftColumn>
          <RightColumn>
            <SectionBlurb fullWidth={true}>
              We made 3D assets for movie genres and colors for movie's content
              rating. These went through multiple iterations during development
              for visual cohesiveness.
            </SectionBlurb>{" "}
          </RightColumn>
        </TwoColumns>
      </ProjectSubsection>

      <ProjectShortSection title="3. Website">
        <SectionBlurb fullWidth={true}>
          I was the only developer on the team, which gave me great freedom over
          implementation, but on the other hand, I had to automate as much as I
          could given the short implementation timeline.{" "}
          <HighlightText>
            The website was implemented and deployed within a timeline of 1.5
            week.
          </HighlightText>
        </SectionBlurb>
      </ProjectShortSection>

      <ProjectSection>
        <SpotlightVideoSection
          // title="Data Visualization"
          src={video_url + "enter" + video_format}
          caption="User Enter"
          subtitle="Gallery"
        >
          <ImageGallery
            images={[
              process_url + "visual-iterations/1.png",
              process_url + "visual-iterations/2.png",
              process_url + "visual-iterations/3.png",
            ]}
            caption="Iterations in Development"
          />
          <TwoColumns>
            <LeftColumn>
              {" "}
              <ImageGallery
                images={[
                  video_url + "shader/1.gif",
                  video_url + "shader/original1.png",
                ]}
                caption="Displayed Versus Original"
              />
            </LeftColumn>
            <RightColumn>
              <SectionBlurb fullWidth={true}>
                We experimented with various color combinations, and only
                realized after awhile that as long as we used the original
                posters, it will be almost impossible for things to look
                cohesive as these posters have a range of color palettes and
                contrasts.
              </SectionBlurb>{" "}
              <SectionBlurb fullWidth={true}>
                Therefore I{" "}
                <HighlightText>
                  wrote shaders to dynamically alter the colors channels and
                  distort the images{" "}
                </HighlightText>{" "}
                to give them a more dynamic appearance.
              </SectionBlurb>
            </RightColumn>
          </TwoColumns>
        </SpotlightVideoSection>
      </ProjectSection>

      <ProjectSection>
        <SpotlightVideoSection
          subtitle="Navigation"
          src={video_url + "navigation" + video_format}
          caption="User Enter"
        >
          <VideoRow
            src={video_url + "arrowkey_2-1" + video_format}
            caption="UI Animations"
          >
            <SectionBlurb fullWidth={true}>
              Users press arrow keys to navigate between directors. The posters
              travel in the corresponding direction of the navigation. We had
              test users tell us that this was almost a game-like experience,
              which we were very happy to hear.
            </SectionBlurb>{" "}
            <SectionBlurb fullWidth={true}>
              To make the experience delightful, playful and intuitive, I added
              minor interactive details to the user interface, such as the arrow
              key SVGs that animate when user presses up or down keys.
            </SectionBlurb>{" "}
          </VideoRow>
        </SpotlightVideoSection>
      </ProjectSection>

      <ProjectSection>
        <SpotlightVideoSection
          subtitle="NYT Articles"
          src={video_url + "NYT-articles" + video_format}
        >
          <ImageRow
            src={process_url + "NYT-articles-on.png"}
            caption="NYT Articles Toggled"
          >
            <SectionBlurb fullWidth={true}>
              With each visualization, the user can choose to display the NYT
              articles on top of the visualization.
            </SectionBlurb>{" "}
            <SectionBlurb fullWidth={true}>
              Each bubble contains the NYT article snippet, and user can hover
              on top of the bubble to increase its opacity. They can also
              navigate to the actual article by clicking on the "Read More",
              which brings them to the full article.
            </SectionBlurb>{" "}
          </ImageRow>
        </SpotlightVideoSection>
      </ProjectSection>

      <ProjectSection>
        <SpotlightVideoSection
          subtitle="Catalog"
          src={video_url + "catalog-click" + video_format}
        >
          <VideoRow
            src={video_url + "catalog-sort" + video_format}
            caption="Sort Catalog"
          >
            <SectionBlurb fullWidth={true}>
              I wanted to provide a more efficient and comprehensive way to
              navigate in between directors, therefore I built another Catalog
              page where users can view all the directors in the gallery, and by
              clicking on the director name, they will be brought to that
              director's data visualization page.
            </SectionBlurb>{" "}
            <SectionBlurb fullWidth={true}>
              Users can view the Catalog in two sortings: number of movies and
              average box office.
            </SectionBlurb>{" "}
          </VideoRow>
        </SpotlightVideoSection>
      </ProjectSection>

      <ProjectSection title="Reflection">
        <SectionBlurb>
          I had great fun making the project with great teammates who offered
          wonderful designs. In the process, one of my major take-away was
          choosing a specific dataset to work with provides more freedom, and we
          should never try to force a narrative into the data, but instead, let
          the data tell us the story. I would love to experiment more with
          creative data visualizations in the future.
        </SectionBlurb>{" "}
      </ProjectSection>
    </Project>
  );
}
