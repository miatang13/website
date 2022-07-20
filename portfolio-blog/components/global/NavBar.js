import Link from "next/link";
import globalStyles from "../../settings/global-styles";
import { useRouter } from "next/router";
import Hamburger from "./NavBurger";
import { useState } from "react";

export default function () {
  const router = useRouter();
  const active_link_styling = " bg-amber-300";
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="navigation">
      <div className="sticky w-full grid px-4 pt-5 grid-cols-5 z-10 mb-8 select-none">
        <Link href="/" className={globalStyles.font_styles.nav_bar}>
          <>
            <span className={globalStyles.font_styles.nav_bar_logo}>
              mia tang
            </span>
          </>
        </Link>
      </div>
      <div className="text-right col-start-3">
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
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
      <style jsx>{`
        .navigation {
          width: 100%;
          height: 50px;
        }
        .navigation ul {
          display: flex;
          flex-wrap: wrap;
          float: right;
          margin: 0px;
          padding: 0px;
          overflow: hidden;
        }
        .navigation ul li {
          list-style-type: none;
          padding-right: 10px;
        }
        .hamburger {
          display: none;
          z-index: 6;
        }
        @media (max-width: 767px) {
          .hamburger {
            display: fixed;
            padding-top: 10px;
            margin-left: 10px;
            z-index: 6;
          }
          .navigation ul {
            display: ${hamburgerOpen ? "inline" : "none"};
            background-color: blue;
            height: 100vh;
            width: 50vw;
            margin-top: 50px;
            position: fixed;
          }
        }
      `}</style>
    </div>
  );
}
