import Link from "next/link";
import { useEffect, useState } from "react";
import globalStyles from "../../settings/global-styles";
import { NavLink } from "./NavLink";

export default function ResponsiveNav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsNavExpanded(false);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <nav className='navigation container select-none fixed top-0 left-0 right-0 z-40'>
      <div
        className='logo hover:cursor-pointer'
        onClick={() => setIsNavExpanded(false)}
      >
        <Link href='/'>
          <span className={globalStyles.font_styles.nav_bar_logo}>M.T.</span>
        </Link>
      </div>

      <button
        className='hamburger'
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg viewBox='0 0 100 80' width='30' height='30'>
          <rect width='80' height='15'></rect>
          <rect y='30' width='80' height='15'></rect>
          <rect y='60' width='80' height='15'></rect>
        </svg>
      </button>
      <div
        className={
          isNavExpanded
            ? "navigation-menu expanded w-screen z-40"
            : "navigation-menu grid sm:grid-col-5"
        }
      >
        <ul
          className={isNavExpanded ? "" : "grid sm:grid-cols-5"}
          onClick={() => setIsNavExpanded(false)}
        >
          <li className={isNavExpanded ? " " : "col-start-3"}>
            <NavLink href='/' className='nav-link' exact>
              <span className={globalStyles.font_styles.nav_bar}>home</span>
            </NavLink>
          </li>
          <li className='text-right'>
            <NavLink href='/blog' className='nav-link' exact>
              <span className={globalStyles.font_styles.nav_bar}>blog</span>
            </NavLink>
          </li>
          <li className='text-right'>
            <NavLink href='/about' className='nav-link'>
              <span className={globalStyles.font_styles.nav_bar}>about</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <style jsx>
        {`
          .navigation {
            // position: relative;
            display: flex;
            align-items: center;
            height: 60px;
            width: 100%;
            padding: 0.5rem 0.5rem;
            color: black;
            background-color: white;
            // background-color: rgb(255, 254, 249);
          }

          .navigation-menu {
            margin-left: auto;
          }

          .navigation-menu ul {
            display: flex;
            padding: 0;
          }

          .navigation-menu li {
            list-style-type: none;
            margin: 0 1rem;
            padding-left: 2rem;
          }

          .navigation-menu li a {
            text-decoration: none;
            display: block;
            width: 100%;
          }

          .hamburger {
            border: 0;
            height: 40px;
            width: 40px;
            padding: 0.5rem;
            cursor: pointer;
            transition: background-color 0.2s ease-in-out;
            position: absolute;
            top: 50%;
            right: 25px;
            transform: translateY(-50%);
            display: none;
          }

          @media screen and (max-width: 550px) {
            .hamburger {
              display: block;
            }

            .navigation {
              padding: 0;
            }

            .navigation-menu ul {
              flex-direction: column;
              position: absolute;
              top: 60px;
              left: 0;
              width: 100%;
              height: calc(100vh - 60px);
              background-color: rgb(255, 254, 249);
              display: none;
            }

            .navigation-menu li {
              text-align: center;
              margin: 0;
              font-size: 3em;
              padding: 0;
            }

            .navigation-menu.expanded ul {
              display: block;
            }

            .logo {
              margin-left: 1.5rem;
            }
          }
        `}
      </style>
    </nav>
  );
}
