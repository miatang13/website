import projects from "../../settings/projects";
import projectByOrder from "../../settings/project-order";
import ProjectThumbnail from "./ProjectThumbnail";

export default function DesignProjects() {
  return (
    <div className='grid gap-4 md:grid-cols-3 py-3'>
      {projectByOrder.map((projectName) => {
        let p = projects.find((p) => {
          return p.path === projectName;
        });

        return p.show && p.design && <ProjectThumbnail {...p} />;
      })}
    </div>
  );
}
