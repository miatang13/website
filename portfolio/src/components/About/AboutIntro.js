import about_data from "../../settings/about.json";
import Listbullet from "./ListBullet";

export default function AboutIntro() {
  return (
    <div className="about_section_wrapper">
      <p>
        Hi, I am Mia Tang, and I am a Canadian creative developer interested in
        building interactive experiences (web, MR, & game).
      </p>{" "}
      <p>
        I currently study at Carnegie Mellon University under the
        interdisciplinary{" "}
        <a href="https://www.cmu.edu/interdisciplinary/programs/bcsa.html">
          BXA program
        </a>
        , majoring in Computer Science and Communications Design.
      </p>
      <p>
        I seek to work in environments that allow me to be creative and
        technical at the same time.
      </p>
      <p>
        {" "}
        Previously, I've worked with wonderful people at the following places
      </p>
      <ul>
        {about_data.past_work.map((w) => (
          <li>
            <Listbullet /> <a href={w.link}>{w.company}</a> ({w.title}){" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
