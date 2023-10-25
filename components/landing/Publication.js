import PublicationPaper from "./PublicationPaper";
import papers from "../../settings/publication.json";

export default function Publications() {
  return (
    <div className='py-3'>
      {papers.map((paper) => (
        <PublicationPaper {...paper} key={paper.title} />
      ))}
    </div>
  );
}
