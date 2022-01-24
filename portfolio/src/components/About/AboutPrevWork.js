import about_data from "../../settings/about.json";

export default function PrevWork() {
  return (
    <div className="about_section_wrapper">
      <p>
        I seek to work in environments that allow me to be creative and
        technical at the same time.
      </p>
      <ul>
        {about_data.past_work.map((w) => (
          <li>
            <a href={w.link}>{w.company}</a> ({w.title}){" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
