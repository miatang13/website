import IntroHeader from "./IntroHeader";
import IntroTitle from "./IntroTitle";
import "../../styles/gallery/thumbnail.scss";
import IntroImg from "./IntroImage";

export default function ProjectHeader(props) {
  return (
    //
    <div className="project_section">
      <div className="project_header_wrapper">
        <IntroTitle
          title={props.title}
          subtitle={props.subtitle}
          callout={props.callout}
        />

        <IntroHeader
          team={props.team}
          role={props.role}
          timeline={props.timeline}
          skills={props.skills}
          client={props.client}
        />
        <IntroImg img_src={props.img_src} />
      </div>
    </div>

    // </TiltOnIntersect>
  );
}
