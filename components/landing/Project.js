import projects from "../../settings/projects";
import projectByOrder from "../../settings/project-order";
import ProjectThumbnail from "./ProjectThumbnail";

export default function AllProjects() {
    return (
        <div className='grid gap-4 md:grid-cols-3 py-3'>
            {projectByOrder.map((projectName) => {
                let p = projects[projectName];

                return p.show && <ProjectThumbnail {...p} key={projectName} />;
            })}
        </div>
    );
}
