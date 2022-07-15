import Link from "next/link";

const nav_text_style = "font-mono text-base font-normal text-slate-700 ";
export default function () {
  return (
    <div className="hover:cursor-default sticky w-full grid px-4 py-5 grid-cols-4 z-10 mb-8">
      <Link href="/">
        <span className={nav_text_style}>MIA TANG</span>
      </Link>
      <Link href="/work">
        <span className={nav_text_style + " text-right"}>WORK</span>
      </Link>
      <Link href="/blog">
        <span className={nav_text_style + " text-right"}>BLOG</span>
      </Link>
      <Link href="/about">
        <span className={nav_text_style + " text-right"}>ABOUT</span>
      </Link>
    </div>
  );
}
