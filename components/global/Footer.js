import Linkedin from "../svgs/Linkedin";
import Twitter from "../svgs/Twitter";
import GoogleScholar from "../svgs/GoogleScholar";
import globalStyles from "../../settings/global-styles";

export default function Footer() {
  return (
    <footer className='container sm:pt-8 sm:pb-8 pb-12 pt-4 w-screen place-content-center grid'>
      <ul className='flex flex-none sm:flex-1 space-x-4 place-content-center'>
        <li>
          <a href='https://twitter.com/Miamiamia0103' target="_blank">
            <Twitter />
          </a>
        </li>
        <li>
          <a
            className='align-baseline'
            href='https://www.linkedin.com/in/mia-tang/'
            target="_blank">
            <Linkedin />
          </a>
        </li>
        <li>
          <a
            className='align-baseline'
            href='https://scholar.google.com/citations?user=4uGB3NsAAAAJ'
            target="_blank">
            <GoogleScholar />
          </a>
        </li>
      </ul>
      <p
        className={
          globalStyles.font_styles.p + " text-sm text-slate-400 py-3"
        }
      >
        &copy; mia tang 2018-2025
      </p>
    </footer>
  );
}
