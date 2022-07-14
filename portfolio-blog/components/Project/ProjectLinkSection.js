import ProjectSection from "./ProjectSection";
import Link45Deg from "../svgs/Link45Deg";

export default function ProjectLinkSection(props) {
  return (
    <ProjectSection title="Mentioned">
      <ul>
        {props.links.map((l) => (
          <li>
            <a href={l.link}>
              <Link45Deg></Link45Deg> {l.text}
            </a>
          </li>
        ))}
      </ul>
    </ProjectSection>
  );
}
