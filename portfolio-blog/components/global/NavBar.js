import Container from "../layouts/Container";
import Link from "next/link";

export default function () {
  return (
    <div className="hover:cursor-default sticky w-full grid px-4 py-5 grid-cols-4 border-b border-solid z-10">
      <Link href="/">
        <span>Landing</span>
      </Link>
      <Link href="/work">
        <span>Work</span>
      </Link>
      <Link href="/blog">
        <span>Blog</span>
      </Link>
      <Link href="/about">
        <span>About</span>
      </Link>
    </div>
  );
}
