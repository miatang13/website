import Linkedin from "../svgs/Linkedin";
import Twitter from "../svgs/Twitter";
import globalStyles from "../../settings/global-styles";

export default function Footer() {
  return (
    <footer className='container sm:pt-8 sm:pb-8 pb-12 pt-4 w-screen place-content-center grid'>
      <ul className='flex flex-none sm:flex-1 space-x-4 place-content-center'>
        <li>
          <a href='https://twitter.com/Miamiamia0103'>
            <Twitter />
          </a>
        </li>
        <li>
          <a
            className='align-baseline'
            href='https://www.linkedin.com/in/mia-tang/'
          >
            <Linkedin />
          </a>
        </li>
      </ul>
      <p
        className={
          globalStyles.font_styles.p + " text-sm text-neutral-500 py-3"
        }
      >
        &copy; mia tang 2018-2023
      </p>
    </footer>
  );
}
