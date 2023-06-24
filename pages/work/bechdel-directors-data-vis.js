import Image from "next/image";
import globalStyles from "../../settings/global-styles";
import projects_data from "../../settings/projects.json";
import projectByOrder from "../../settings/project-order";
import ProjectHeader from "../../components/project/ProjectHeader";
import IndivVideo from "../../components/project/Mp4Video";
import FullLine from "../../components/project/FullLine";
import StyledExternalLink from "../../components/global/StyledExternalLink";
import hero_img from "../../public/assets/Bechdel/thumbnail.png";

// Images
import data_img from "../../public/assets/Bechdel/code/bechdelAPI-all.png";
import movie_data_img from "../../public/assets/Bechdel/code/movie-data.png";
import key_structure_img from "../../public/assets/Bechdel/process/key-structure.png";
import director_display_img from "../../public/assets/Bechdel/process/director-display.png";
import genre_symbols_img from "../../public/assets/Bechdel/process/genre-symbols.png";
import audience_rate_img from "../../public/assets/Bechdel/process/audience-rate.png";
import displayed_shader_img from "../../public/assets/Bechdel/videos/shader/1.gif";
import original_shader_img from "../../public/assets/Bechdel/videos/shader/original1.png";

export default function Bechdel() {
  const base_url = "/assets/Bechdel/";
  const process_url = base_url + "process/";
  const video_url = base_url + "videos/";
  const video_format = ".mp4";
  const code_url = base_url + "code/";

  const page_key = "Bechdel";
  const page_data = projects_data[page_key];

  return (
    <div className={globalStyles.div_styles.page_outer_wrapper}>
      <div className={globalStyles.div_styles.page_inner_wrapper}>
        <Image src={hero_img} />
        <ProjectHeader page_data={page_data} />

        <div className='grid md:grid-cols-2 md:py-6'>
          <h2 className={globalStyles.font_styles.h2}>Overview</h2>
          <p>
            This was a 2 months class project for 51-367 Computational Design
            Thinking taught by Professor{" "}
            <StyledExternalLink
              href='https://kyuhashim.com/'
              text='Kyuha Shim'
            />{" "}
            at Carnegie Mellon. The prompt was to create an engaging web
            experience that organizes and displays data in a digestible approach
            by creating interesting patterns.
          </p>
        </div>

        <div className='grid md:grid-cols-2 py-6'>
          <h2 className={globalStyles.font_styles.h2}>1. Data</h2>
          <div>
            <p>
              Our group decided to{" "}
              <span className={globalStyles.font_styles.highlight_text}>
                showcase data related to gender representation in films
              </span>
              . A way to measure inequality of female representation in film is
              the{" "}
              <StyledExternalLink
                href='https://en.wikipedia.org/wiki/Bechdel_test'
                text='Bechdel test'
              />
              . We understand that it does not provide the perfect measure, but
              it provides a surface-level framework to evaluate bias against
              women in film.
            </p>
            <div className='py-6'>
              <div>
                <h3 className={globalStyles.font_styles.h3}>Bechdel Test</h3>
                <p> The usual criteria of the Bechdel Test are:</p>
              </div>

              <ul className='list-disc list-inside'>
                <li> "at least two women are featured"</li>
                <li> "these women talk to each other"</li>
                <li> "they discuss something other than a man",</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className={globalStyles.font_styles.h3}>
            API: Bechdel Test, Movie Database, NYT
          </h3>

          <div className='grid md:grid-cols-2'>
            <div className='pr-6'>
              <Image src={data_img} />
            </div>

            <div>
              <p>
                We retrieved 3508 movies from the{" "}
                <StyledExternalLink href='https://bechdeltest.com/api/v1/doc'>
                  BechdelTest API
                </StyledExternalLink>
                , and used this dataset as our main data. From the
                BechdelTestAPI, we get the IMDb id for each movie that passed
                the Bechdel test with a rating from 1 to 3, i.e. the number of
                Bechdel test rules the movie passes.
              </p>
              <p className='pt-3'>
                Then we{" "}
                <span className={globalStyles.font_styles.highlight_text}>
                  ranked directors by the number of their movies appearing in
                  the dataset
                </span>{" "}
                from high to low, thus compiling a list of directors we want to
                promote and applaud for.
              </p>

              <p>
                We decided to display directors with two or more movies passing
                the Bechdel Test, which leaves us with 88 directors and 305
                movies to display.
              </p>
              <p className='pt-3'>
                We needed more data on every movie that we are displaying,
                therefore we used the{" "}
                <StyledExternalLink href='https://rapidapi.com/rapidapi/api/movie-database-imdb-alternative/'>
                  Movie Database API
                </StyledExternalLink>
                by RapidAPI.
                <br />
                <br />
                We were able to use a movie's IMDb ID to retrieve 26 fields of
                data on a movie. We selected to display a movie's poster, rated,
                genre, awards, and box office.
              </p>
              <p className='pt-3'>
                Since we want to spotlight the directors, we included{" "}
                <span className={globalStyles.font_styles.highlight_text}>
                  one more layer of data
                </span>{" "}
                by using the NYT Developer API, in particular, the Article
                Search API, to find articles on the selected directors.
                <br /> <br />A challenge we encountered was that we could not
                programmatically search for all these directors at once as it
                exceeded the maximum number of calls on the API at a time.
                Therefore we had to do manual labour to run the script on 5
                directors at a time. To do so, I created a quick interface in P5
                editor that allows user to download a json containing search
                results, which expedited our manual process.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className='grid md:grid-cols-2 place-items-center pt-6'>
            <div className='pr-6'>
              <h2 className={globalStyles.font_styles.h2}>2. Design</h2>
              <Image src={genre_symbols_img} />
              <Image src={audience_rate_img} />
            </div>
            <div>
              <p>
                {" "}
                We focused on designing{" "}
                <span className={globalStyles.font_styles.highlight_text}>
                  an interactive, engaging, and fun experience that promotes and
                  spotlights the directors by creating a unique data
                  visualization{" "}
                </span>{" "}
                for each director.
              </p>
              <p className='pt-3'>
                {" "}
                We made 3D assets for movie genres and colors for movie's
                content rating. These went through multiple iterations during
                development for visual cohesiveness.
              </p>
            </div>
          </div>
        </div>

        <div className='pt-6'>
          <h2 className={globalStyles.font_styles.h2}>3. Deliverable</h2>
          <IndivVideo src={video_url + "enter" + video_format} />
        </div>

        <div className='grid md:grid-cols-2 py-6'>
          <p>
            We designed the website to be a gallery the user can navigate back
            and forth between the directors. The directors are displayed in the
            order of most to least movies.
            <br /> <br />
            The website displays one director data visualization at a time. Each
            visualization plots a director's movies on a graph with two axis:
            box office and release date.
          </p>
          <p>
            A design challenge we encountered was how to include the NYT
            articles in the data visualization, and the solution we came up with
            was overlaying the articles on top, and users can toggle its
            visibility.
          </p>
        </div>

        {/* <div className='grid md:grid-cols-2'>
          <div>
            <p>
              We experimented with various color combinations, and only realized
              after a while that as long as we used the original posters, it
              will be almost impossible for things to look cohesive as these
              posters have a range of color palettes. <br /> <br />
              Therefore I{" "}
              <span className={globalStyles.font_styles.highlight_text}>
                wrote shaders to dynamically alter the colors channels and
                distort the images{" "}
              </span>{" "}
              to give them a more dynamic appearance.
            </p>
          </div>

          <div>
            <Image src={original_shader_img} />
            <Image src={displayed_shader_img} />
          </div>
        </div> */}

        <div className='py-6'>
          <IndivVideo src={video_url + "navigation" + video_format} />
          <div className='grid md:grid-cols-2 pt-6 place-items-center'>
            <div className='w-1/2'>
              <IndivVideo src={video_url + "arrowkey_2-1" + video_format} />
            </div>
            <p>
              Users press arrow keys to navigate between directors. The posters
              travel in the corresponding direction of the navigation. We had
              test users tell us that this was almost a game-like experience,
              which we were very happy to hear. <br /> <br />
              To make the experience delightful, playful and intuitive, I added
              minor interactive details to the user interface, such as the arrow
              key SVGs that animate when user presses up or down keys.
            </p>{" "}
          </div>
        </div>

        <div className='py-6'>
          <IndivVideo src={video_url + "NYT-articles" + video_format} />
          <div className='grid md:grid-cols-2 py-6'>
            <p>
              With each visualization, the user can choose to display the NYT
              articles on top of the visualization.
            </p>
            <p>
              Each bubble contains a NYT article snippet, and user can hover on
              top of the bubble to increase its opacity. They can also navigate
              to the actual article by clicking on the "Read More", which brings
              them to the full article.
            </p>
          </div>
        </div>

        <IndivVideo src={video_url + "catalog-click" + video_format} />

        <div className='grid md:grid-cols-2 py-6 place-items-center'>
          <div className='pr-6'>
            <IndivVideo src={video_url + "catalog-sort" + video_format} />
          </div>

          <p className='pt-3'>
            I wanted to provide a more efficient and comprehensive way to
            navigate in between directors, therefore I built another Catalog
            page where users can view all the directors in the gallery, and by
            clicking on the director name, they will be brought to that
            director's data visualization page. Users can view the Catalog in
            two sortings: number of movies and average box office.
          </p>
        </div>
        {/* 
        <div title='Reflection'>
          <p>
            I had great fun making the project with great teammates who offered
            wonderful designs. One of my major take-away was choosing a specific
            dataset to work with provides more freedom, and we should never try
            to force a narrative into the data, but instead, let the data tell
            us the story. I would love to experiment more with creative data
            visualizations in the future.
          </p>
        </div> */}
      </div>
    </div>
  );
}
