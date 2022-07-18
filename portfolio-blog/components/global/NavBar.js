import Link from "next/link";
import globalStyles from "../../settings/global-styles";

export default function () {
  return (
    <div className="sticky w-full grid px-4 pt-5 grid-cols-4 z-10 mb-8 ">
      <Link href="/" className={globalStyles.font_styles.link}>
        <span className={globalStyles.font_styles.nav_bar}>mia tang</span>
      </Link>
      <Link href="/work" className={globalStyles.font_styles.link}>
        <span className={globalStyles.font_styles.nav_bar + " text-right"}>
          work
        </span>
      </Link>
      <Link href="/blog" className={globalStyles.font_styles.link}>
        <span className={globalStyles.font_styles.nav_bar + " text-right"}>
          blog
        </span>
      </Link>
      <Link href="/about" className={globalStyles.font_styles.link}>
        <span className={globalStyles.font_styles.nav_bar + " text-right"}>
          about
        </span>
      </Link>
    </div>
  );
}
