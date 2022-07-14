import projects from "../settings/projects.json";
import Thumbnail from "../components/WorkPage/Thumbnail";
import WorkDescription from "../components/WorkPage/WorkDescription";
import Link from "next/link";

export default function Work() {
  return (
    <div className="grid gap-4 grid-cols-2 grid-rows-2">
      {projects.map((p, index) => (
        <Link href={"projects" + p.page_name} key={p.name}>
          <div>
            <Thumbnail path={p.path} />
            <WorkDescription
              title={p.landing.title}
              subtitle={p.landing.subtitle}
              page_name={p.page_name}
              index={index}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
