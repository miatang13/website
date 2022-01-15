import Project from "../../components/Project/ProjectContainer";
import ProjectHeader from "../../components/Project/ProjectHeader";

export default function Bechdel() {
  return (
    <Project index={3}>
      <ProjectHeader
        title="Bechdel"
        team="Jina Lee, Mihika Bansal, Caroline Song"
        role="Sole Developer, Designer"
        skills="WebGL, React, NYT API, RapidAPI"
        timeline="October 2021 — December 2021"
        client="Class Project for 51-367 @CMU"
      />
    </Project>
  );
}
