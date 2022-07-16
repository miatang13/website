import Link from "next/link";

const nav_text_style = "font-mono text-base font-black text-slate-700 ";
export default function () {
  return (
    <div className="hover:cursor-default sticky w-full grid px-4 pt-5 grid-cols-4 z-10 mb-8">
      <Link href="/">
        <div>
          <span className={nav_text_style}>mia tang</span>
        </div>
      </Link>
      <Link href="/work">
        <span className={nav_text_style + " text-right"}>work</span>
      </Link>
      <Link href="/blog">
        <span className={nav_text_style + " text-right"}>blog</span>
      </Link>
      <Link href="/about">
        <span className={nav_text_style + " text-right"}>about</span>
      </Link>
    </div>
  );
}
