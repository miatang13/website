import globalStyles from "../../settings/global-styles";

export default function ProjectHeader(props) {
  return (
    <div className="pb-12" id="work-page-header">
      <h2 className={globalStyles.font_styles.h2 + " text-slate-600"}>
        {props.page_data.landing.title.toUpperCase()} -
      </h2>
      <h1 className={globalStyles.font_styles.h1}>
        {props.page_data.landing.subtitle}
      </h1>
      <div className="grid sm:grid-cols-2">
        <div>
          <h3 className={globalStyles.font_styles.h3}>
            <b>skills</b> <br />
          </h3>
          <p className={globalStyles.font_styles.p}>{props.page_data.skills}</p>
        </div>

        <div>
          <h3 className={globalStyles.font_styles.h3}>
            <b>timeline</b> <br />
          </h3>
          <p className={globalStyles.font_styles.p}>
            {props.page_data.timeline}
          </p>
        </div>

        <div>
          <h3 className={globalStyles.font_styles.h3}>
            <b>role</b> <br />
          </h3>
          <p className={globalStyles.font_styles.p}> {props.page_data.role}</p>
        </div>
      </div>
    </div>
  );
}
