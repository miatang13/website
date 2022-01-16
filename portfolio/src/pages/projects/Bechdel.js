import LeftColumn from "../../components/Layout/LeftColumn";
import RightColumn from "../../components/Layout/RightColumn";
import TwoColumns from "../../components/Layout/TwoColumns";
import ImageGallery from "../../components/Project/ImageGallery";
import ImageRow from "../../components/Project/ImageRow";
import IndivImage from "../../components/Project/IndivImage";
import IndivVideo from "../../components/Project/IndivVideo";
import Project from "../../components/Project/ProjectContainer";
import ProjectHeader from "../../components/Project/ProjectHeader";
import ProjectSection from "../../components/Project/ProjectSection";
import ProjectShortSection from "../../components/Project/ProjectShortSection";
import ProjectSubsection from "../../components/Project/ProjectSubsection";
import SectionBlurb from "../../components/Project/SectionBlurb";
import SectionSubtitle from "../../components/Project/SectionSubtitle";
import SpotlightImageSection from "../../components/Project/SpotlightImageSection";
import SpotlightVideoSection from "../../components/Project/SpotlightVideoSection";
import VideoGallery from "../../components/Project/VideoGallery";
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
            We retrieved NUMBER movies from the{" "}
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
            Bechdel Test, which leaves us with NUMBER directors and NUMBERS
            movies to display.
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
            In total, we made around NUMBER API calls. We were able to use a
            movie's IMDb ID to retrieve 26 fields of data on a movie. We
            selected to display a movie's poster, rated, genre, awards, and box
            office.
          </SectionBlurb>

          <SectionBlurb fullWidth={true}>
            <HighlightText>
              It was my first time doing data API calls with Node.js{" "}
            </HighlightText>{" "}
            as in the past I've only used Node for Sockets, and I am always glad
            to learn more.
          </SectionBlurb>
        </ImageRow>
      </ProjectSubsection>

      <ProjectSubsection subtitle="API 3: NYT API">
        <ImageRow
          left={true}
          src={code_url + "NYT-p5.png"}
          caption="Using P5 Editor for Quick Interface"
        >
          <SectionBlurb fullWidth={true}>
            Since we want to spotlight the directors, we included one more layer
            of data by using the NYT Developer API, in particular, the Article
            Search API, to find articles on the selected directors.
          </SectionBlurb>{" "}
          <SectionBlurb fullWidth={true}>
            A challenge we encountered was that we could not programmatically
            search for all these directors as we were exceeding the maximum
            number of calls on the API at a time. Therefore we had to do some
            manual labour to run the script on 5 directors at a time. To do so,
            I created a quick interface in P5 editor that allows user to
            download a json containing search results of 5 directors at a time,
            which expedited our manual process.
          </SectionBlurb>{" "}
        </ImageRow>
      </ProjectSubsection>

      <ProjectShortSection title="2. Design">
        <SectionBlurb fullWidth={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </SectionBlurb>
      </ProjectShortSection>

      <ProjectSection>
        <SpotlightImageSection
          src={process_url + "key-withoutUI.png"}
          title="Data Visualization"
        >
          <SectionBlurb fullWidth={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </SectionBlurb>{" "}
        </SpotlightImageSection>
      </ProjectSection>

      <ProjectSection>
        <SectionSubtitle>SUBTITLE</SectionSubtitle>
        <ImageGallery
          images={[
            process_url + "genre-symbols.png",
            process_url + "audience-rate.png",
          ]}
        />
        <TwoColumns>
          <LeftColumn>
            <IndivImage src={code_url + "snippet.png"} />{" "}
          </LeftColumn>
          <RightColumn>
            <SectionBlurb fullWidth={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </SectionBlurb>{" "}
          </RightColumn>
        </TwoColumns>
      </ProjectSection>

      <ProjectShortSection title="3. Website">
        <SectionBlurb fullWidth={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </SectionBlurb>
      </ProjectShortSection>

      <ProjectSection>
        <SpotlightVideoSection
          // title="Data Visualization"
          src={video_url + "enter" + video_format}
          caption="User Enter"
        >
          <SectionBlurb fullWidth={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </SectionBlurb>{" "}
        </SpotlightVideoSection>
        <VideoGallery
          videos={[
            video_url + "shader1" + video_format,
            video_url + "shader2" + video_format,
            video_url + "shader3" + video_format,
          ]}
        />
      </ProjectSection>

      <ProjectSection>
        <SpotlightVideoSection
          title="Navigation"
          src={video_url + "navigation" + video_format}
          caption="User Enter"
        >
          <SectionBlurb fullWidth={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </SectionBlurb>{" "}
        </SpotlightVideoSection>

        <ProjectSection>
          <TwoColumns>
            <LeftColumn>
              <IndivVideo src={video_url + "arrowkey_detail" + video_format} />{" "}
            </LeftColumn>
            <RightColumn>
              <SectionBlurb fullWidth={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </SectionBlurb>{" "}
            </RightColumn>
          </TwoColumns>
        </ProjectSection>
      </ProjectSection>

      <ProjectSection>
        <SpotlightVideoSection
          title="NYT Articles"
          src={video_url + "NYT-articles" + video_format}
        >
          <SectionBlurb fullWidth={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </SectionBlurb>{" "}
        </SpotlightVideoSection>
      </ProjectSection>

      <ProjectSection>
        <SectionSubtitle>Catalog </SectionSubtitle>
        <VideoGallery
          videos={[
            video_url + "catalog-sort" + video_format,
            video_url + "catalog-click" + video_format,
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Reflection">
        <SectionBlurb>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </SectionBlurb>{" "}
      </ProjectSection>
    </Project>
  );
}
