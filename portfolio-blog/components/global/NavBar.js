import Link from "next/link";
import globalStyles from "../../settings/global-styles";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  const active_link_styling = " bg-amber-300";
  return (
    <div className="sticky w-full grid px-4 pt-5 grid-cols-4 z-10 mb-8 select-none">
      <div>
        <Link href="/" className={globalStyles.font_styles.nav_bar}>
          <span className={globalStyles.font_styles.nav_bar_logo}>
            mia tang
          </span>
        </Link>
      </div>
      <div className="text-right">
        <Link href="/work" className={globalStyles.font_styles.link}>
          <span className={globalStyles.font_styles.nav_bar + " text-right"}>
            work
          </span>
        </Link>
      </div>
      <div className="text-right">
        <Link
          href="/blog"
          className={
            globalStyles.font_styles.link + router.asPath === "/blog"
              ? active_link_styling
              : ""
          }
        >
          <span className={globalStyles.font_styles.nav_bar + " text-right"}>
            blog
          </span>
        </Link>
      </div>
      <div className="text-right">
        <Link
          href="/about"
          className={
            globalStyles.font_styles.link + router.asPath === "/about"
              ? active_link_styling
              : ""
          }
        >
          <span className={globalStyles.font_styles.nav_bar + " text-right"}>
            about
          </span>
        </Link>
      </div>
    </div>
  );
}
